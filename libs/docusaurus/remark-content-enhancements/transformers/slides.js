/**
 * Slides Transformer
 *
 * Injects PDFViewer component based on frontmatter metadata.
 * Supports both local paths and cloud URLs transparently.
 *
 * Frontmatter schema:
 * ---
 * slides:
 *   source: "slides/chapter-14.pdf" | "https://cdn.example.com/slide.pdf"
 *   placement: "before-what-you-learn" | "after-intro" | "custom-heading"
 *   height: 700
 *   title: "Chapter 14 Slides"
 * ---
 *
 * OR simple string format:
 * ---
 * slides: "slides/chapter-14.pdf"
 * ---
 */

const { visit } = require('unist-util-visit');

/**
 * Check if a string is a URL
 */
function isUrl(str) {
  return str.startsWith('http://') || str.startsWith('https://');
}

/**
 * Normalize path to absolute from static directory
 * URLs are returned as-is
 */
function normalizePath(source) {
  if (isUrl(source)) {
    return source;  // Use URL as-is
  }
  // Normalize local path to absolute from static directory
  return source.startsWith('/') ? source : `/${source}`;
}

function getHeadingText(node) {
  if (!Array.isArray(node.children)) {
    return '';
  }

  return node.children
    .map((child) => {
      if (typeof child.value === 'string') {
        return child.value;
      }

      if (Array.isArray(child.children)) {
        return getHeadingText(child);
      }

      return '';
    })
    .join('')
    .trim()
    .toLowerCase();
}

function findHeadingIndex(tree, matcher, offset = 0) {
  let targetIndex = -1;

  visit(tree, 'heading', (node, index, parent) => {
    if (targetIndex !== -1) {
      return visit.EXIT;
    }

    if (!Array.isArray(parent?.children) || typeof index !== 'number') {
      return;
    }

    if (matcher(node)) {
      targetIndex = index + offset;
      return visit.EXIT;
    }
  });

  return targetIndex;
}

function hasExistingPDFViewer(tree) {
  let found = false;

  visit(tree, 'mdxJsxFlowElement', (node) => {
    if (node.name === 'PDFViewer') {
      found = true;
      return visit.EXIT;
    }
  });

  return found;
}

/**
 * Find injection point in AST based on placement strategy
 */
function findInjectionPoint(tree, placement) {
  if (placement === 'before-what-you-learn') {
    const whatYouLearnIndex = findHeadingIndex(
      tree,
      (node) => {
        if (node.depth !== 2) {
          return false;
        }

        const text = getHeadingText(node);
        return (
          text.includes("what you'll learn") ||
          text.includes('what you will learn')
        );
      },
    );

    if (whatYouLearnIndex !== -1) {
      return whatYouLearnIndex;
    }

    return findHeadingIndex(
      tree,
      (node) => node.depth === 2 && getHeadingText(node).includes('teaching aid'),
      1,
    );
  }

  if (placement === 'after-intro') {
    return findHeadingIndex(tree, (node) => node.depth === 2);
  }

  return -1;
}

/**
 * Create PDFViewer JSX node for injection
 */
function createPDFViewerNode(slides) {
  const { source, height = 700, title = 'Chapter Slides' } = slides;
  const normalizedSource = normalizePath(source);

  return {
    type: 'mdxJsxFlowElement',
    name: 'PDFViewer',
    attributes: [
      {
        type: 'mdxJsxAttribute',
        name: 'src',
        value: normalizedSource,
      },
      {
        type: 'mdxJsxAttribute',
        name: 'title',
        value: title,
      },
      {
        type: 'mdxJsxAttribute',
        name: 'height',
        value: {
          type: 'mdxJsxAttributeValueExpression',
          value: String(height),
          data: {
            estree: {
              type: 'Program',
              body: [{
                type: 'ExpressionStatement',
                expression: {
                  type: 'Literal',
                  value: height,
                  raw: String(height)
                }
              }],
              sourceType: 'module',
            }
          }
        },
      },
    ],
    children: [],
  };
}

/**
 * Transform tree by injecting PDFViewer component
 */
function transform(tree, file, slidesMetadata, config = {}) {
  // Normalize metadata to object format
  let slides;
  if (typeof slidesMetadata === 'string') {
    slides = {
      source: slidesMetadata,
      placement: 'before-what-you-learn',
      height: 700,
      title: 'Chapter Slides',
    };
  } else {
    slides = {
      source: slidesMetadata.source,
      placement: slidesMetadata.placement || 'before-what-you-learn',
      height: slidesMetadata.height || config.defaultHeight || 700,
      title: slidesMetadata.title || 'Chapter Slides',
    };
  }

  if (hasExistingPDFViewer(tree)) {
    console.log(
      `[Slides Transformer] Skipped ${slides.source} because PDFViewer already exists in ${file.path || 'unknown file'}`,
    );
    return;
  }

  // Find where to inject
  const injectionIndex = findInjectionPoint(tree, slides.placement);

  if (injectionIndex === -1) {
    console.warn(`[Slides Transformer] Could not find injection point "${slides.placement}" in ${file.path || 'unknown file'}`);
    return;
  }

  // Create PDFViewer node
  const pdfNode = createPDFViewerNode(slides);

  // Inject before target heading in tree.children
  if (tree.children) {
    tree.children.splice(injectionIndex, 0, pdfNode);
    console.log(`[Slides Transformer] ✅ Injected ${slides.source} at ${slides.placement}`);
  }
}

module.exports = { transform };
