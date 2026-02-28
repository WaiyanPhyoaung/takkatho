import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, d as renderSlot, m as maybeRenderHead } from './astro/server_Dso1QYyF.mjs';
import 'piccolore';
import { H as HeadConfigSchema, u as urlToSlug, s as slugToLocaleData, g as getSidebarFromConfig, a as getSidebar, b as getSiteTitle, c as getToC, d as getSiteTitleHref, e as getPrevNextLinks, f as getHead, h as attachRouteDataAndRunMiddleware, $ as $$Page } from './Page_yGREXzfe.mjs';
import * as z from 'zod';
import { s as stripLeadingAndTrailingSlashes, g as getCollectionPathFromRoot, p as project, a as starlightConfig } from './translations_D9phixvs.mjs';
import { I as I18nBadgeConfigSchema, B as BadgeConfigSchema, p as parseAsyncWithFriendlyErrors, a as parseWithFriendlyErrors } from './Code_WFUXKkih.mjs';
import { I as Icons } from './Icon_CK40Z_jw.mjs';
/* empty css                       */
import '../renderers.mjs';

const PrevNextLinkConfigSchema = () => z.union([
  z.boolean(),
  z.string(),
  z.object({
    /** The navigation link URL. */
    link: z.string().optional(),
    /** The navigation link text. */
    label: z.string().optional()
  }).strict()
]).optional();

const defaults = { minHeadingLevel: 2, maxHeadingLevel: 3 };
const TableOfContentsSchema = () => z.union([
  z.object({
    /** The level to start including headings at in the table of contents. Default: 2. */
    minHeadingLevel: z.number().int().min(1).max(6).optional().default(2),
    /** The level to stop including headings at in the table of contents. Default: 3. */
    maxHeadingLevel: z.number().int().min(1).max(6).optional().default(3)
  }),
  z.boolean().transform((enabled) => enabled ? defaults : false)
]).default(defaults).refine((toc) => toc ? toc.minHeadingLevel <= toc.maxHeadingLevel : true, {
  message: "minHeadingLevel must be less than or equal to maxHeadingLevel"
});

const iconNames = Object.keys(Icons);
const IconSchema = () => z.enum(iconNames);

const HeroSchema = ({ image }) => z.object({
  /**
   * The large title text to show. If not provided, will default to the top-level `title`.
   * Can include HTML.
   */
  title: z.string().optional(),
  /**
   * A short bit of text about your project.
   * Will be displayed in a smaller size below the title.
   */
  tagline: z.string().optional(),
  /** The image to use in the hero. You can provide either a relative `file` path or raw `html`. */
  image: z.union([
    z.object({
      /** Alt text for screenreaders and other assistive technologies describing your hero image. */
      alt: z.string().default(""),
      /** Relative path to an image file in your repo, e.g. `../../assets/hero.png`. */
      file: image()
    }),
    z.object({
      /** Alt text for screenreaders and other assistive technologies describing your hero image. */
      alt: z.string().default(""),
      /** Relative path to an image file in your repo to use in dark mode, e.g. `../../assets/hero-dark.png`. */
      dark: image(),
      /** Relative path to an image file in your repo to use in light mode, e.g. `../../assets/hero-light.png`. */
      light: image()
    }),
    z.object({
      /** Raw HTML string instead of an image file. Useful for inline SVGs or more complex hero content. */
      html: z.string()
    }).transform(({ html }) => ({ html, alt: "" }))
  ]).optional(),
  /** An array of call-to-action links displayed at the bottom of the hero. */
  actions: z.object({
    /** Text label displayed in the link. */
    text: z.string(),
    /** Value for the link’s `href` attribute, e.g. `/page` or `https://mysite.com`. */
    link: z.string(),
    /** Button style to use. One of `primary` (the default), `secondary`, or `minimal`. */
    variant: z.enum(["primary", "secondary", "minimal"]).default("primary"),
    /**
     * An optional icon to display alongside the link text.
     * Can be an inline `<svg>` or the name of one of Starlight’s built-in icons.
     */
    icon: z.union([IconSchema(), z.string().startsWith("<svg")]).transform((icon) => {
      const parsedIcon = IconSchema().safeParse(icon);
      return parsedIcon.success ? { type: "icon", name: parsedIcon.data } : { type: "raw", html: icon };
    }).optional(),
    /** HTML attributes to add to the link */
    attrs: z.record(z.union([z.string(), z.number(), z.boolean()])).optional()
  }).array().default([])
});

const SidebarBaseSchema = z.object({
  /** The visible label for this item in the sidebar. */
  label: z.string(),
  /** Translations of the `label` for each supported language. */
  translations: z.record(z.string()).default({}),
  /** Adds a badge to the item */
  badge: I18nBadgeConfigSchema()
});
const SidebarGroupSchema = SidebarBaseSchema.extend({
  /**
   * Explicitly prevent custom attributes on groups as the final type for supported sidebar item
   * is a non-discriminated union where TypeScript will not perform excess property checks.
   * This means that a user could define a sidebar group with custom attributes, not getting a
   * TypeScript error, and only have it fail at runtime.
   * @see https://github.com/microsoft/TypeScript/issues/20863
   */
  attrs: z.never().optional(),
  /** Whether this item should be collapsed by default. */
  collapsed: z.boolean().default(false)
});
const linkHTMLAttributesSchema = z.record(
  z.union([z.string(), z.number(), z.boolean(), z.undefined(), z.null()])
);
const SidebarLinkItemHTMLAttributesSchema = () => linkHTMLAttributesSchema.default({});
const SidebarLinkItemSchema = SidebarBaseSchema.extend({
  /** The link to this item’s content. Can be a relative link to local files or the full URL of an external page. */
  link: z.string(),
  /** HTML attributes to add to the link item. */
  attrs: SidebarLinkItemHTMLAttributesSchema()
}).strict();
const AutoSidebarGroupSchema = SidebarGroupSchema.extend({
  /** Enable autogenerating a sidebar category from a specific docs directory. */
  autogenerate: z.object({
    /** The directory to generate sidebar items for. */
    directory: z.string().transform(stripLeadingAndTrailingSlashes),
    /**
     * Whether the autogenerated subgroups should be collapsed by default.
     * Defaults to the `AutoSidebarGroup` `collapsed` value.
     */
    collapsed: z.boolean().optional(),
    /** HTML attributes to add to the autogenerated link items. */
    attrs: SidebarLinkItemHTMLAttributesSchema()
    // TODO: not supported by Docusaurus but would be good to have
    /** How many directories deep to include from this directory in the sidebar. Default: `Infinity`. */
    // depth: z.number().optional(),
  })
}).strict();
const ManualSidebarGroupSchema = SidebarGroupSchema.extend({
  /** Array of links and subcategories to display in this category. */
  items: z.lazy(
    () => z.union([
      SidebarLinkItemSchema,
      ManualSidebarGroupSchema,
      AutoSidebarGroupSchema,
      InternalSidebarLinkItemSchema,
      InternalSidebarLinkItemShorthandSchema
    ]).array()
  )
}).strict();
const InternalSidebarLinkItemSchema = SidebarBaseSchema.partial({ label: true }).extend({
  /** The link to this item’s content. Must be a slug of a Content Collection entry. */
  slug: z.string(),
  /** HTML attributes to add to the link item. */
  attrs: SidebarLinkItemHTMLAttributesSchema()
});
const InternalSidebarLinkItemShorthandSchema = z.string().transform((slug) => InternalSidebarLinkItemSchema.parse({ slug }));
const SidebarItemSchema = z.union([
  SidebarLinkItemSchema,
  ManualSidebarGroupSchema,
  AutoSidebarGroupSchema,
  InternalSidebarLinkItemSchema,
  InternalSidebarLinkItemShorthandSchema
]);

const StarlightFrontmatterSchema = (context) => z.object({
  /** The title of the current page. Required. */
  title: z.string(),
  /**
   * A short description of the current page’s content. Optional, but recommended.
   * A good description is 150–160 characters long and outlines the key content
   * of the page in a clear and engaging way.
   */
  description: z.string().optional(),
  /**
   * Custom URL where a reader can edit this page.
   * Overrides the `editLink.baseUrl` global config if set.
   *
   * Can also be set to `false` to disable showing an edit link on this page.
   */
  editUrl: z.union([z.string().url(), z.boolean()]).optional().default(true),
  /** Set custom `<head>` tags just for this page. */
  head: HeadConfigSchema({ source: "content" }),
  /** Override global table of contents configuration for this page. */
  tableOfContents: TableOfContentsSchema().optional(),
  /**
   * Set the layout style for this page.
   * Can be `'doc'` (the default) or `'splash'` for a wider layout without any sidebars.
   */
  template: z.enum(["doc", "splash"]).default("doc"),
  /** Display a hero section on this page. */
  hero: HeroSchema(context).optional(),
  /**
   * The last update date of the current page.
   * Overrides the `lastUpdated` global config or the date generated from the Git history.
   */
  lastUpdated: z.union([z.date(), z.boolean()]).optional(),
  /**
   * The previous navigation link configuration.
   * Overrides the `pagination` global config or the link text and/or URL.
   */
  prev: PrevNextLinkConfigSchema(),
  /**
   * The next navigation link configuration.
   * Overrides the `pagination` global config or the link text and/or URL.
   */
  next: PrevNextLinkConfigSchema(),
  sidebar: z.object({
    /**
     * The order of this page in the navigation.
     * Pages are sorted by this value in ascending order. Then by slug.
     * If not provided, pages will be sorted alphabetically by slug.
     * If two pages have the same order value, they will be sorted alphabetically by slug.
     */
    order: z.number().optional(),
    /**
     * The label for this page in the navigation.
     * Defaults to the page `title` if not set.
     */
    label: z.string().optional(),
    /**
     * Prevents this page from being included in autogenerated sidebar groups.
     */
    hidden: z.boolean().default(false),
    /**
     * Adds a badge to the sidebar link.
     * Can be a string or an object with a variant and text.
     * Variants include 'note', 'tip', 'caution', 'danger', 'success', and 'default'.
     * Passing only a string defaults to the 'default' variant which uses the site accent color.
     */
    badge: BadgeConfigSchema(),
    /** HTML attributes to add to the sidebar link. */
    attrs: SidebarLinkItemHTMLAttributesSchema()
  }).default({}),
  /** Display an announcement banner at the top of this page. */
  banner: z.object({
    /** The content of the banner. Supports HTML syntax. */
    content: z.string()
  }).optional(),
  /** Pagefind indexing for this page - set to false to disable. */
  pagefind: z.boolean().default(true),
  /**
   * Indicates that this page is a draft and will not be included in production builds.
   * Note that the page will still be available when running Astro in development mode.
   */
  draft: z.boolean().default(false)
});
function docsSchema(...args) {
  const [options = {}] = args;
  const { extend } = options;
  return (context) => {
    const UserSchema = typeof extend === "function" ? extend(context) : extend;
    return UserSchema ? StarlightFrontmatterSchema(context).and(UserSchema) : StarlightFrontmatterSchema(context);
  };
}

const StarlightPageFrontmatterSchema = async (context) => {
  const userDocsSchema = await getUserDocsSchema();
  const schema = typeof userDocsSchema === "function" ? userDocsSchema(context) : userDocsSchema;
  return schema.transform((frontmatter) => {
    const { editUrl, sidebar, ...others } = frontmatter;
    const pageEditUrl = editUrl === void 0 || editUrl === true ? false : editUrl;
    return { ...others, editUrl: pageEditUrl };
  });
};
const validateSidebarProp = (sidebarProp) => {
  return parseWithFriendlyErrors(
    SidebarItemSchema.array().optional(),
    sidebarProp,
    "Invalid sidebar prop passed to the `<StarlightPage/>` component."
  );
};
async function generateStarlightPageRouteData({
  props,
  context
}) {
  const { frontmatter, ...routeProps } = props;
  const { url } = context;
  const slug = urlToSlug(url);
  const pageFrontmatter = await getStarlightPageFrontmatter(frontmatter);
  const id = slug;
  const localeData = slugToLocaleData(slug);
  const sidebar = props.sidebar ? getSidebarFromConfig(validateSidebarProp(props.sidebar), url.pathname, localeData.locale) : getSidebar(url.pathname, localeData.locale);
  const headings = props.headings ?? [];
  const pageDocsEntry = {
    id,
    slug,
    body: "",
    collection: "docs",
    filePath: `${getCollectionPathFromRoot("docs", project)}/${stripLeadingAndTrailingSlashes(slug)}.md`,
    data: {
      ...pageFrontmatter,
      sidebar: {
        attrs: {},
        hidden: false
      }
    }
  };
  const entry = pageDocsEntry;
  const entryMeta = {
    dir: props.dir ?? localeData.dir,
    lang: props.lang ?? localeData.lang,
    locale: localeData.locale
  };
  const editUrl = pageFrontmatter.editUrl ? new URL(pageFrontmatter.editUrl) : void 0;
  const lastUpdated = pageFrontmatter.lastUpdated instanceof Date ? pageFrontmatter.lastUpdated : void 0;
  const pageProps = {
    ...routeProps,
    ...localeData,
    entry,
    headings,
    locale: localeData.locale};
  const siteTitle = getSiteTitle(localeData.lang);
  const routeData = {
    ...routeProps,
    ...localeData,
    id,
    editUrl,
    entry,
    entryMeta,
    hasSidebar: props.hasSidebar ?? entry.data.template !== "splash",
    head: getHead(pageProps, context, siteTitle),
    headings,
    lastUpdated,
    pagination: getPrevNextLinks(sidebar, starlightConfig.pagination, entry.data),
    sidebar,
    siteTitle,
    siteTitleHref: getSiteTitleHref(localeData.locale),
    slug,
    toc: getToC(pageProps)
  };
  return routeData;
}
async function getStarlightPageFrontmatter(frontmatter) {
  const schema = await StarlightPageFrontmatterSchema({
    image: (() => (
      // Mock validator for ImageMetadata.
      // https://github.com/withastro/astro/blob/cf993bc263b58502096f00d383266cd179f331af/packages/astro/src/assets/types.ts#L32
      // It uses a custom validation approach because imported SVGs have a type of `function` as
      // well as containing the metadata properties and this ensures we handle those correctly.
      z.custom(
        (value) => value && (typeof value === "function" || typeof value === "object") && "src" in value && "width" in value && "height" in value && "format" in value,
        "Invalid image passed to `<StarlightPage>` component. Expected imported `ImageMetadata` object."
      )
    ))
  });
  return parseAsyncWithFriendlyErrors(
    schema,
    frontmatter,
    "Invalid frontmatter props passed to the `<StarlightPage/>` component."
  );
}
async function getUserDocsSchema() {
  const userCollections = (await import('./collection-config_9xAF7xAd.mjs')).collections;
  return userCollections?.docs?.schema ?? docsSchema();
}

const $$Astro = createAstro("https://takkatho.dev");
const $$StarlightPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$StarlightPage;
  await attachRouteDataAndRunMiddleware(
    Astro2,
    await generateStarlightPageRouteData({ props: Astro2.props, context: Astro2 })
  );
  return renderTemplate`${renderComponent($$result, "Page", $$Page, {}, { "default": async ($$result2) => renderTemplate`${renderSlot($$result2, $$slots["default"])}` })}`;
}, "/Users/waiyanphyoaung/code/waiyanphyoaung/node_modules/@astrojs/starlight/components/StarlightPage.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "StarlightPage", $$StarlightPage, { "frontmatter": {
    title: "Not Found",
    tableOfContents: false
  }, "hasSidebar": false, "class": "astro-zetdm5md" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="not-found-container astro-zetdm5md"> <div class="not-found-content astro-zetdm5md"> <div class="error-icon astro-zetdm5md"> <img src="/src/assets/hero.svg" alt="404 Error" width="120" height="120" class="astro-zetdm5md"> </div> <h1 class="astro-zetdm5md">404 Not Found</h1> <p class="astro-zetdm5md">သင်ရှာဖွေနေသော စာမျက်နှာကို မတွေ့ပါ</p> <div class="action-buttons astro-zetdm5md"> <button onclick="history.back()" class="btn-primary astro-zetdm5md"> Go Back </button> </div> </div> </div> ` })} `;
}, "/Users/waiyanphyoaung/code/waiyanphyoaung/src/pages/404.astro", void 0);

const $$file = "/Users/waiyanphyoaung/code/waiyanphyoaung/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { docsSchema as d, page as p };
