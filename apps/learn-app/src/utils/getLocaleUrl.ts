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
  const currentPath = localeConfigs[currentLocale]?.path ?? currentLocale;
  const targetPath = localeConfigs[targetLocale]?.path ?? targetLocale;

  // Remove trailing slash from baseUrl for consistent processing
  const basePath = baseUrl.replace(/\/$/, '');

  // Extract the part of pathname after the base path
  let pathAfterBase = pathname;
  if (basePath && pathname.startsWith(basePath)) {
    pathAfterBase = pathname.slice(basePath.length) || '/';
  }

  let result = pathAfterBase;

  // Strip current locale prefix if not default locale
  if (currentLocale !== defaultLocale) {
    const prefix = `/${currentPath}/`;
    if (result.startsWith(prefix)) {
      result = '/' + result.slice(prefix.length);
    } else if (result === `/${currentPath}`) {
      result = '/';
    }
  }

  // Add target locale prefix (with double-prefix guard)
  if (
    targetLocale !== defaultLocale &&
    !result.startsWith(`/${targetPath}/`) &&
    result !== `/${targetPath}`
  ) {
    result = `/${targetPath}${result}`;
  }

  // Reconstruct with base path
  return basePath ? `${basePath}${result}` : result;
}
