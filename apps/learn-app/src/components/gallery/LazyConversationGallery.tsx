import React, { lazy, Suspense } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";
import type { ConversationGalleryProps } from "./types";

const ConversationGallery = lazy(() => import("./ConversationGallery"));

export default function LazyConversationGallery(
  props: ConversationGalleryProps,
) {
  return (
    <BrowserOnly fallback={<div style={{ minHeight: 80 }} />}>
      {() => (
        <Suspense
          fallback={<div style={{ minHeight: 80 }}>Loading gallery...</div>}
        >
          <ConversationGallery {...props} />
        </Suspense>
      )}
    </BrowserOnly>
  );
}
