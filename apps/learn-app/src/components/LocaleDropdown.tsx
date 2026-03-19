import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useLocation } from "@docusaurus/router";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Check, Languages } from "lucide-react";
import { getLocaleUrl } from "../utils/getLocaleUrl";

const LOCALE_META: Record<string, { englishName: string }> = {
  en: { englishName: "English" },
  ur: { englishName: "Urdu" },
  "zh-Hans": { englishName: "Simplified Chinese" },
};

export function LocaleDropdown() {
  const { siteConfig, i18n } = useDocusaurusContext();
  const location = useLocation();

  const defaultLocale = i18n.defaultLocale;
  const currentLocale = i18n.currentLocale;
  const currentLocaleConfig = i18n.localeConfigs[currentLocale];
  const nativeLabel = currentLocaleConfig?.label || "English";
  const currentMeta = LOCALE_META[currentLocale] ?? { englishName: "English" };

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
    const search = typeof window !== "undefined" ? window.location.search : "";
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    return url + search + hash;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          dir="ltr"
          className="gap-2 px-2.5 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
          title="Change language"
          aria-label="Change language"
        >
          <Languages className="w-4 h-4 opacity-70" />
          <span className="font-medium">
            {currentMeta.englishName}
            {currentMeta.englishName !== nativeLabel && (
              <span className="text-muted-foreground font-normal">
                {" "}
                ({nativeLabel})
              </span>
            )}
          </span>
          <ChevronDown className="w-3.5 h-3.5 opacity-60" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 p-1">
        {i18n.locales.map((locale) => {
          const config = i18n.localeConfigs[locale];
          const localeMeta = LOCALE_META[locale];
          const isActive = locale === currentLocale;
          const localeUrl = buildLocaleUrl(locale);
          const nativeName = config?.label || locale;
          const englishName = localeMeta?.englishName ?? nativeName;

          return (
            <DropdownMenuItem
              key={locale}
              asChild
              className={isActive ? "bg-accent" : ""}
            >
              <a
                href={localeUrl}
                className="flex items-center gap-2.5 px-2 py-2 w-full cursor-pointer rounded-sm"
              >
                <span className="flex-1 text-sm font-medium">
                  {englishName}
                </span>
                {englishName !== nativeName && (
                  <span
                    className="text-xs text-muted-foreground font-normal"
                    dir={config?.direction || "ltr"}
                  >
                    {nativeName}
                  </span>
                )}
                {isActive && (
                  <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                )}
              </a>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
