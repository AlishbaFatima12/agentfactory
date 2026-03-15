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
import { getLocaleUrl } from '../utils/getLocaleUrl';

export function LocaleDropdown() {
  const { siteConfig, i18n } = useDocusaurusContext();
  const location = useLocation();

  const defaultLocale = i18n.defaultLocale;
  const currentLocale = i18n.currentLocale;
  const currentLocaleConfig = i18n.localeConfigs[currentLocale];
  const currentLabel = currentLocaleConfig?.label || 'English';

  const buildLocaleUrl = (targetLocale: string): string => {
    const url = getLocaleUrl({
      pathname: location.pathname,
      currentLocale,
      targetLocale,
      defaultLocale,
      localeConfigs: i18n.localeConfigs,
      baseUrl: siteConfig.baseUrl,
    });

    // search/hash are only available client-side
    const search = typeof window !== 'undefined' ? window.location.search : '';
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    return url + search + hash;
  };

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
          const localeUrl = buildLocaleUrl(locale);
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
