import { defineRouteMiddleware } from "@astrojs/starlight/route-data";

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
});
