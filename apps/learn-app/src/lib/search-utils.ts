/**
 * Search utilities using Orama search engine.
 *
 * The @orama/plugin-docusaurus-v3 plugin generates a gzipped search index
 * at build time. This module loads and searches it using Orama's API.
 */

import { create, load, search as oramaSearch } from "@orama/orama";
import { ungzip } from "pako";

export interface SearchResult {
  title: string;
  url: string;
  text?: string;
  type?: string;
  score?: number;
}

const MAX_RESULTS = 8;

// Orama index schema (must match DOCS_PRESET_SCHEMA from the plugin)
const SCHEMA = {
  title: "string" as const,
  content: "string" as const,
  path: "string" as const,
  section: "string" as const,
  category: "enum" as const,
  version: "enum" as const,
};

let oramaDb: any = null;
let loadPromise: Promise<any> | null = null;

/**
 * Load the Orama search index (gzipped JSON generated at build time).
 * Returns the Orama database instance, or null if unavailable.
 */
async function loadOramaIndex(): Promise<any> {
  if (oramaDb) return oramaDb;
  if (loadPromise) return loadPromise;

  loadPromise = (async () => {
    try {
      if (typeof window === "undefined") return null;

      // Detect base path from current URL
      const pathname = window.location.pathname;
      const pathSegments = pathname.split("/").filter(Boolean);
      const knownRoutes = ["docs", "blog", "search", "auth", "api", "code"];
      let basePath = "";
      if (pathSegments.length > 0 && !knownRoutes.includes(pathSegments[0])) {
        basePath = `/${pathSegments[0]}`;
      }

      // The Orama plugin writes the index as: orama-search-index-current.json.gz
      const indexUrl = `${window.location.origin}${basePath}/orama-search-index-current.json.gz`;
      const response = await fetch(indexUrl);
      if (!response.ok) return null;

      const buffer = await response.arrayBuffer();
      const deflatedString = ungzip(buffer, { to: "string" });
      const parsedData = JSON.parse(deflatedString);

      const db = create({ schema: { ...SCHEMA, version: "enum" } });
      load(db, parsedData);
      oramaDb = db;
      return db;
    } catch (error) {
      console.warn("[search] Failed to load Orama index:", error);
      return null;
    }
  })();

  return loadPromise;
}

/**
 * Perform a search query using the Orama index.
 *
 * @param query - The search query string
 * @returns Array of search results, sorted by relevance
 */
export async function searchContent(query: string): Promise<SearchResult[]> {
  if (!query.trim()) return [];

  const db = await loadOramaIndex();
  if (!db) return [];

  try {
    const results = await oramaSearch(db, {
      term: query,
      limit: MAX_RESULTS,
      threshold: 0, // return partial matches too
      boost: { title: 2 }, // boost title matches
    });

    return results.hits.map((hit: any) => ({
      title: hit.document.title || hit.document.section || "Untitled",
      url: hit.document.path || "",
      text: hit.document.section || "",
      type: hit.document.category || "doc",
      score: hit.score,
    }));
  } catch (error) {
    console.warn("[search] Orama search failed:", error);
    return [];
  }
}
