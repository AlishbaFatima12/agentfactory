import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useAlternatePageUtils } from '@docusaurus/theme-common/internal';
import { useHistorySelector } from '@docusaurus/theme-common';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, ChevronDown } from "lucide-react";

export function LocaleDropdown() {
  const { i18n } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();
  const search = useHistorySelector((history) => history.location.search);
  const hash = useHistorySelector((history) => history.location.hash);

  const currentLocale = i18n.currentLocale;

  // Match official Docusaurus pattern: construct locale URL with pathname:// prefix
  const getLocaleUrl = (locale: string) => {
    const url = alternatePageUtils.createUrl({
      locale,
      fullyQualified: false,
    });
    return `pathname://${url}${search}${hash}`;
  };

  // Resolve pathname:// protocol to actual path (same as Docusaurus internal link handling)
  const resolvePathname = (url: string) => {
    if (url.startsWith('pathname://')) {
      return url.replace('pathname://', '');
    }
    return url;
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
          const localeUrl = resolvePathname(getLocaleUrl(locale));
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
