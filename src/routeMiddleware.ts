import { defineRouteMiddleware } from "@astrojs/starlight/route-data";
import {
  needsDescription,
  openingProse,
  toDescription,
} from "./lib/lesson-description.mjs";

export const onRequest = defineRouteMiddleware((context) => {
  // Get the base path of the current URL
  // e.g. `/product-2/some-page/` returns `/product-2/`
  const currentBase =
    context.url.pathname.split("/").slice(0, 2).join("/") + "/";

  const { pagination } = context.locals.starlightRoute;

  // Helper to recursively check if any entry (group or link) matches the current base
  function groupHasLinkWithBase(entry: any, base: any) {
    if (entry.type === "link") {
      return entry.href && entry.href.startsWith(base);
    }
    if (entry.type === "group" && Array.isArray(entry.entries)) {
      return entry.entries.some((sub: any) => groupHasLinkWithBase(sub, base));
    }
    return false;
  }

  context.locals.starlightRoute.sidebar =
    context.locals.starlightRoute.sidebar.filter((entry) =>
      groupHasLinkWithBase(entry, currentBase)
    );

  // Remove pagination links across product categories.
  if (pagination.prev && !pagination.prev.href.startsWith(currentBase)) {
    pagination.prev = undefined;
  }
  if (pagination.next && !pagination.next.href.startsWith(currentBase)) {
    pagination.next = undefined;
  }

  // Lessons whose description just repeats the title get one built from their
  // opening paragraph (see src/lib/lesson-description.mjs). A description
  // written in the frontmatter always wins.
  const route = context.locals.starlightRoute;
  const { title, description } = route.entry.data;
  const body = (route.entry as { body?: unknown }).body;
  if (needsDescription(title, description) && typeof body === "string") {
    const generated = toDescription(openingProse(body));
    if (generated) {
      for (const tag of route.head) {
        const key = tag.attrs?.name ?? tag.attrs?.property;
        if (tag.tag === "meta" && (key === "description" || key === "og:description")) {
          tag.attrs = { ...tag.attrs, content: generated };
        }
      }
    }
  }
});
