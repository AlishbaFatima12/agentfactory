import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, ChevronDown } from "lucide-react";

export function LocaleDropdown() {
  const { siteConfig, i18n } = useDocusaurusContext();
  const location = useLocation();

  const currentLocale = i18n.currentLocale;
  const defaultLocale = i18n.defaultLocale;
  const baseUrl = siteConfig.baseUrl; // e.g. "/agent-factory-book/" or "/"

  // Build locale URL by manually constructing the path
  // Docusaurus locale routing: default locale has no prefix, others get /locale/ prefix
  const getLocaleUrl = (targetLocale: string): string => {
    const pathname = location.pathname; // e.g. "/agent-factory-book/docs/some-page"

    // Strip baseUrl from pathname to get the page-relative path
    // e.g. "/agent-factory-book/docs/some-page" → "docs/some-page"
    // or   "/agent-factory-book/ur/docs/some-page" → "ur/docs/some-page"
    let pagePath = pathname.startsWith(baseUrl)
      ? pathname.slice(baseUrl.length)
      : pathname;

    // Detect locale from URL (don't rely on i18n.currentLocale — it may not
    // reflect the URL locale on static deployments like GitHub Pages)
    const nonDefaultLocales = i18n.locales.filter((l) => l !== defaultLocale);
    for (const locale of nonDefaultLocales) {
      const prefix = locale + '/';
      if (pagePath.startsWith(prefix) || pagePath === locale) {
        pagePath = pagePath.slice(prefix.length);
        break;
      }
    }

    // Build new URL: baseUrl + (locale prefix if non-default) + pagePath
    const localePrefix = targetLocale !== defaultLocale ? targetLocale + '/' : '';
    const newPath = baseUrl + localePrefix + pagePath;

    return newPath + location.search + location.hash;
  };

  const currentLocaleConfig = i18n.localeConfigs[currentLocale];
  const currentLabel = currentLocaleConfig?.label || 'English';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="gap-2 px-2 py-1 text-blue-500 hover:text-blue-600 hover:bg-blue-500/10" title="Change language">
          <Globe className="w-4 h-4" />
          <span className="text-sm font-medium">{currentLabel}</span>
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {i18n.locales.map((locale) => {
          const config = i18n.localeConfigs[locale];
          const isActive = locale === currentLocale;
          const localeUrl = getLocaleUrl(locale);
          return (
            <DropdownMenuItem
              key={locale}
              asChild
              className={isActive ? 'bg-accent' : ''}
            >
              <a href={localeUrl} className="flex items-center justify-between w-full cursor-pointer">
                <span>{config?.label || locale}</span>
                {isActive && <span>✓</span>}
              </a>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
