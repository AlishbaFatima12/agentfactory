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
  const baseUrl = siteConfig.baseUrl; // e.g. "/agent-factory-book/" or "/"

  // Build locale URL from the browser's actual pathname (not React Router's)
  // This avoids issues where useLocation() strips the baseUrl
  const getLocaleUrl = (targetLocale: string): string => {
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '/';
    const search = typeof window !== 'undefined' ? window.location.search : '';
    const hash = typeof window !== 'undefined' ? window.location.hash : '';

    // Strip baseUrl to get relative path: "/agent-factory-book/ur/docs/page" → "ur/docs/page"
    let pagePath = pathname;
    if (pagePath.startsWith(baseUrl)) {
      pagePath = pagePath.slice(baseUrl.length);
    }

    // Strip ANY existing locale prefix from the path
    // e.g. "ur/docs/page" → "docs/page", "ur/" → "", "ur" → ""
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

    // Build: baseUrl + locale prefix (if non-default) + clean page path
    const prefix = targetLocale !== defaultLocale ? targetLocale + '/' : '';
    return baseUrl + prefix + pagePath + search + hash;
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
