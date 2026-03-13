const test = require('node:test');
const assert = require('node:assert/strict');

const { transform } = require('../transformers/slides');

function makeHeading(depth, text) {
  return {
    type: 'heading',
    depth,
    children: [{ type: 'text', value: text }],
  };
}

function makeParagraph(text) {
  return {
    type: 'paragraph',
    children: [{ type: 'text', value: text }],
  };
}

function makeTree(children) {
  return {
    type: 'root',
    children,
  };
}

function makeFile(path) {
  return { path };
}

function findPDFViewerIndex(tree) {
  return tree.children.findIndex(
    (node) => node.type === 'mdxJsxFlowElement' && node.name === 'PDFViewer',
  );
}

test('injects slides before the What You\'ll Learn heading', () => {
  const tree = makeTree([
    makeHeading(1, 'Chapter 1'),
    makeParagraph('Intro'),
    makeHeading(2, 'Teaching Aid'),
    makeHeading(2, "What You'll Learn"),
  ]);

  transform(
    tree,
    makeFile('/docs/chapter-1/README.md'),
    { source: 'slides/chapter-1.pdf' },
    {},
  );

  const pdfIndex = findPDFViewerIndex(tree);
  assert.equal(pdfIndex, 3);
  assert.equal(tree.children[pdfIndex + 1].children[0].value, "What You'll Learn");
});

test('falls back to the Teaching Aid section when What You\'ll Learn is absent', () => {
  const tree = makeTree([
    makeHeading(1, 'Chapter 23'),
    makeParagraph('Intro'),
    makeHeading(2, 'Teaching Aid'),
    makeHeading(3, 'Lesson Map'),
  ]);

  transform(
    tree,
    makeFile('/docs/chapter-23/README.md'),
    { source: 'slides/chapter-23.pdf' },
    {},
  );

  const pdfIndex = findPDFViewerIndex(tree);
  assert.equal(pdfIndex, 3);
  assert.equal(tree.children[pdfIndex + 1].children[0].value, 'Lesson Map');
});

test('skips auto-injection when a manual PDFViewer already exists', () => {
  const tree = makeTree([
    makeHeading(1, 'Chapter 31'),
    makeHeading(2, 'Teaching Aid'),
    {
      type: 'mdxJsxFlowElement',
      name: 'PDFViewer',
      attributes: [],
      children: [],
    },
    makeHeading(2, 'Prerequisites'),
  ]);

  transform(
    tree,
    makeFile('/docs/chapter-31/README.md'),
    { source: 'slides/chapter-31.pdf' },
    {},
  );

  const pdfNodes = tree.children.filter(
    (node) => node.type === 'mdxJsxFlowElement' && node.name === 'PDFViewer',
  );
  assert.equal(pdfNodes.length, 1);
});
