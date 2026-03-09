/**
 * Pure function for locale URL computation.
 * Handles GitHub Pages baseUrl structure: /repo-name/[locale]/path
 * Converts paths like /agent-factory-book/ → /agent-factory-book/ur/
 */
export function getLocaleUrl({
  pathname,
  currentLocale,
  targetLocale,
  defaultLocale,
  localeConfigs,
  baseUrl = '/',
}: {
  pathname: string;
  currentLocale: string;
  targetLocale: string;
  defaultLocale: string;
  localeConfigs: Record<string, { path?: string }>;
  baseUrl?: string;
}): string {
  // For the current locale, use the configured path or fallback to locale name
  const currentPath = localeConfigs[currentLocale]?.path ?? currentLocale;

  // Clean up baseUrl: if Docusaurus already appended the current locale to it (e.g. /agent-factory-book/ur/)
  // we want to strip that so we have the pure root baseUrl.
  let rootBasePath = baseUrl.replace(/\/$/, '');

  if (currentLocale !== defaultLocale) {
    const localeSuffix = `/${currentPath}`;
    if (rootBasePath.endsWith(localeSuffix)) {
      rootBasePath = rootBasePath.slice(0, -localeSuffix.length);
    }
  }

  // Ensure we still have a leading slash if it became empty
  if (!rootBasePath && baseUrl.startsWith('/')) {
    rootBasePath = '';
  }

  // Extract the part of pathname after the active base path
  const activeBasePath = baseUrl.replace(/\/$/, '');
  let pathAfterBase = pathname;
  if (activeBasePath && pathname.startsWith(activeBasePath)) {
    pathAfterBase = pathname.slice(activeBasePath.length) || '/';
  }

  let result = pathAfterBase;

  // Strip current locale prefix if we didn't strip it via activeBasePath
  // (e.g., if pathname didn't perfectly match activeBasePath for some reason)
  if (currentLocale !== defaultLocale) {
    const prefix = `/${currentPath}/`;
    if (result.startsWith(prefix)) {
      result = '/' + result.slice(prefix.length);
    } else if (result === `/${currentPath}`) {
      result = '/';
    }
  }

  // Add target locale prefix only if target locale is NOT the default locale
  const targetPath = localeConfigs[targetLocale]?.path ?? targetLocale;
  if (
    targetLocale !== defaultLocale &&
    !result.startsWith(`/${targetPath}/`) &&
    result !== `/${targetPath}`
  ) {
    if (result === '/') {
      result = `/${targetPath}/`;
    } else {
      result = `/${targetPath}${result}`;
    }
  }

  // Reconstruct with root base path
  return `${rootBasePath}${result}`;
}
