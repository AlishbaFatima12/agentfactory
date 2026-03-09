import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
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

  const defaultLocale = i18n.defaultLocale;

  // Docusaurus sets siteConfig.baseUrl per locale at build time:
  //   English build: baseUrl = "/agent-factory-book/"
  //   Urdu build:    baseUrl = "/agent-factory-book/ur/"
  // So we need a locale-independent base to construct cross-locale URLs.
  const rawBaseUrl = siteConfig.baseUrl; // e.g. "/agent-factory-book/ur/"

  // Strip any locale suffix from baseUrl to get the true site root
  // "/agent-factory-book/ur/" → "/agent-factory-book/"
  // "/agent-factory-book/"    → "/agent-factory-book/"
  let siteRoot = rawBaseUrl;
  for (const locale of i18n.locales) {
    if (locale === defaultLocale) continue;
    const suffix = locale + '/';
    if (siteRoot.endsWith(suffix)) {
      siteRoot = siteRoot.slice(0, -suffix.length);
      break;
    }
  }

  const getLocaleUrl = (targetLocale: string): string => {
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
    const search = typeof window !== 'undefined' ? window.location.search : '';
    const hash = typeof window !== 'undefined' ? window.location.hash : '';

    // Strip the full baseUrl (which includes locale) to get the page-only path
    // e.g. "/agent-factory-book/ur/docs/page" with baseUrl "/agent-factory-book/ur/"
    //      → pagePath = "docs/page"
    let pagePath = pathname;
    if (pagePath.startsWith(rawBaseUrl)) {
      pagePath = pagePath.slice(rawBaseUrl.length);
    } else if (pagePath.startsWith(siteRoot)) {
      // Fallback: strip site root and then any locale prefix
      pagePath = pagePath.slice(siteRoot.length);
      for (const locale of i18n.locales) {
        if (locale === defaultLocale) continue;
        if (pagePath === locale || pagePath === locale + '/') {
          pagePath = '';
          break;
        }
        if (pagePath.startsWith(locale + '/')) {
          pagePath = pagePath.slice(locale.length + 1);
          break;
        }
      }
    }

    // Build: siteRoot + locale prefix (if non-default) + page path
    const localePrefix = targetLocale !== defaultLocale ? targetLocale + '/' : '';
    return siteRoot + localePrefix + pagePath + search + hash;
  };

  const currentLocale = i18n.currentLocale;
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
