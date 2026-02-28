import { escape } from 'html-escaper';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import * as z from 'zod';
import { z as z$1 } from 'zod';
import { r as removeBase, i as isRemotePath, p as prependForwardSlash } from './path_Bl04Vi8h.mjs';
import { V as VALID_INPUT_FORMATS } from './consts_BmVDRGlB.mjs';
import { i as AstroError, L as LiveContentConfigError, A as AstroUserError, U as UnknownContentCollectionError, a as createComponent, R as RenderUndefinedEntryError, u as unescapeHTML, b as renderTemplate, j as renderUniqueStylesheet, k as renderScriptElement, l as createHeadAndContent, r as renderComponent } from './astro/server_Dso1QYyF.mjs';
import 'piccolore';
import * as devalue from 'devalue';
import i18next from 'i18next';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";
const CONTENT_LAYER_TYPE = "content_layer";
const LIVE_CONTENT_TYPE = "live";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

function getImporterFilename() {
  const stackLine = new Error().stack?.split("\n").find(
    (line) => !line.includes("defineCollection") && !line.includes("defineLiveCollection") && !line.includes("getImporterFilename") && !line.startsWith("Error")
  );
  if (!stackLine) {
    return void 0;
  }
  const match = /\/((?:src|chunks)\/.*?):\d+:\d+/.exec(stackLine);
  return match?.[1] ?? void 0;
}
function defineCollection$1(config) {
  const importerFilename = getImporterFilename();
  if (importerFilename?.includes("live.config")) {
    throw new AstroError({
      ...LiveContentConfigError,
      message: LiveContentConfigError.message(
        "Collections in a live config file must use `defineLiveCollection`.",
        importerFilename
      )
    });
  }
  if ("loader" in config) {
    if (config.type && config.type !== CONTENT_LAYER_TYPE) {
      throw new AstroUserError(
        `Collections that use the Content Layer API must have a \`loader\` defined and no \`type\` set. Check your collection definitions in ${importerFilename ?? "your content config file"}.`
      );
    }
    if (typeof config.loader === "object" && typeof config.loader.load !== "function" && ("loadEntry" in config.loader || "loadCollection" in config.loader)) {
      throw new AstroUserError(
        `Live content collections must be defined in "src/live.config.ts" file. Check your collection definitions in "${importerFilename ?? "your content config file"}" to ensure you are not using a live loader.`
      );
    }
    config.type = CONTENT_LAYER_TYPE;
  }
  if (!config.type) config.type = "content";
  return config;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_n6Pq5yIz.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://takkatho.dev", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
z$1.object({
  tags: z$1.array(z$1.string()).optional(),
  lastModified: z$1.date().optional()
});
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection,
  liveCollections
}) {
  return async function getCollection(collection, filter) {
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveCollection() instead of getCollection().`
      });
    }
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_BRcY-ijW.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames,
  liveCollections
}) {
  return async function getEntry(collectionOrLookupObject, lookup) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!lookup)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = lookup;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    if (collection in liveCollections) {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `Collection "${collection}" is a live collection. Use getLiveEntry() instead of getEntry().`
      });
    }
    if (typeof lookupId === "object") {
      throw new AstroError({
        ...UnknownContentCollectionError,
        message: `The entry identifier must be a string. Received object.`
      });
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('./content-assets_BRcY-ijW.mjs');
      entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      if (entry2.legacyId) {
        return emulateLegacyEntry({ ...entry2, collection });
      }
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(
        `The collection ${JSON.stringify(collection)} does not exist. Please ensure it is defined in your content config.`
      );
      return void 0;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_BRcY-ijW.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await import('./_astro_assets_BIClmwXi.mjs').then(n => n._);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      let image;
      if (URL.canParse(decodedImagePath.src)) {
        image = await getImage(decodedImagePath);
      } else {
        const id = imageSrcToImportId(decodedImagePath.src, fileName);
        const imported = imageAssetMap.get(id);
        if (!id || imageObjects.has(id) || !imported) {
          continue;
        }
        image = await getImage({ ...decodedImagePath, src: imported });
      }
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute,
      // This attribute is used by the toolbar audit
      ...Object.assign(__vite_import_meta_env__, { _: process.env._ }).DEV ? { "data-image-component": "true" } : {}
    }).map(([key, value]) => value ? `${key}="${escape(value)}"` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_x_byquLw.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}
function defineCollection(config) {
  if (config.type === "live") {
    throw new AstroError({
      ...LiveContentConfigError,
      message: LiveContentConfigError.message(
        "Collections with type `live` must be defined in a `src/live.config.ts` file."
      )
    });
  }
  return defineCollection$1(config);
}

// astro-head-inject

const liveCollections = {};

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
	liveCollections,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
	liveCollections,
});

const starlightConfig = {"description":"လေ့လာပါ မြန်မာဘာသာဖြင့် programming သင်ခန်းစာများ။ TypeScript, WebSocket, Git, Web Performance, Software Architecture နှင့် Database များကို ကျွမ်းကျင်အောင် သင်ယူပါ။ Myanmar developers များအတွက် အထူးပြုလုပ်ထားသည့် ခေတ်မီ learning platform။","logo":{"dark":"public/favicon.svg","light":"public/favicon.svg","alt":"Takkatho University","replacesTitle":true},"social":[{"icon":"github","label":"GitHub","href":"https://github.com/WaiyanPhyoaung/takkatho"}],"tableOfContents":{"minHeadingLevel":2,"maxHeadingLevel":3},"editLink":{},"sidebar":[{"label":"AI Proficiency","translations":{},"collapsed":false,"items":[{"label":"Introduction & Tools","translations":{},"collapsed":false,"items":[{"label":"AI for Developers","translations":{},"slug":"ai-proficiency/foundations/introduction","attrs":{}},{"label":"The AI Toolkit","translations":{},"slug":"ai-proficiency/tools/introduction","attrs":{}}]},{"label":"Core Skills","translations":{},"collapsed":false,"items":[{"label":"Prompt Engineering for Code","translations":{},"slug":"ai-proficiency/core-skills/prompt-engineering","attrs":{}},{"label":"Debugging & Refactoring","translations":{},"slug":"ai-proficiency/core-skills/debugging","attrs":{}},{"label":"Generating Code","translations":{},"slug":"ai-proficiency/core-skills/generating-code","attrs":{}},{"label":"Docs & Explanation","translations":{},"slug":"ai-proficiency/core-skills/documentation","attrs":{}}]},{"label":"Best Practices","translations":{},"collapsed":false,"items":[{"label":"AI-Assisted Testing","translations":{},"slug":"ai-proficiency/testing/introduction","attrs":{}},{"label":"Security & Privacy","translations":{},"slug":"ai-proficiency/responsible-ai/introduction","attrs":{}},{"label":"Productivity Hacks","translations":{},"slug":"ai-proficiency/productivity/introduction","attrs":{}},{"label":"Learning with AI","translations":{},"slug":"ai-proficiency/learning/introduction","attrs":{}}]},{"label":"Conclusion","translations":{},"collapsed":false,"items":[{"label":"Real World Use Cases","translations":{},"slug":"ai-proficiency/capstone/introduction","attrs":{}},{"label":"The Future Developer","translations":{},"slug":"ai-proficiency/future/introduction","attrs":{}}]}]},{"label":"Python","translations":{},"collapsed":false,"items":[{"label":"Introduction","translations":{},"collapsed":false,"items":[{"label":"Welcome","translations":{},"slug":"python","attrs":{}}]},{"label":"Module 1: Variables & Data Types","translations":{},"collapsed":false,"items":[{"label":"Variables & Data Types","translations":{},"slug":"python/module-1","attrs":{}}]},{"label":"Module 2: Control Flow","translations":{},"collapsed":false,"items":[{"label":"If/Else & Loops","translations":{},"slug":"python/module-2","attrs":{}}]},{"label":"Module 3: Functions","translations":{},"collapsed":false,"items":[{"label":"Functions","translations":{},"slug":"python/module-3","attrs":{}}]},{"label":"Module 4: Data Structures","translations":{},"collapsed":false,"items":[{"label":"Lists, Dicts, Tuples, Sets","translations":{},"slug":"python/module-4","attrs":{}}]},{"label":"Module 5: OOP","translations":{},"collapsed":false,"items":[{"label":"Object-Oriented Programming","translations":{},"slug":"python/module-5","attrs":{}}]},{"label":"Module 6: File & Error Handling","translations":{},"collapsed":false,"items":[{"label":"File & Error Handling","translations":{},"slug":"python/module-6","attrs":{}}]},{"label":"Module 7: Modules & Packages","translations":{},"collapsed":false,"items":[{"label":"Modules & Packages","translations":{},"slug":"python/module-7","attrs":{}}]},{"label":"Module 8: Mini Project","translations":{},"collapsed":false,"items":[{"label":"Number Guessing Game","translations":{},"slug":"python/module-8","attrs":{}}]}]},{"label":"Java","translations":{},"collapsed":false,"items":[{"label":"Introduction","translations":{},"collapsed":false,"items":[{"label":"Welcome","translations":{},"slug":"java","attrs":{}}]},{"label":"Module 1: Syntax & Data Types","translations":{},"collapsed":false,"items":[{"label":"Syntax & Data Types","translations":{},"slug":"java/module-1","attrs":{}}]},{"label":"Module 2: Control Flow","translations":{},"collapsed":false,"items":[{"label":"If/Else & Loops","translations":{},"slug":"java/module-2","attrs":{}}]},{"label":"Module 3: Methods","translations":{},"collapsed":false,"items":[{"label":"Methods","translations":{},"slug":"java/module-3","attrs":{}}]},{"label":"Module 4: OOP","translations":{},"collapsed":false,"items":[{"label":"Object-Oriented Programming","translations":{},"slug":"java/module-4","attrs":{}}]},{"label":"Module 5: Collections","translations":{},"collapsed":false,"items":[{"label":"Collections Framework","translations":{},"slug":"java/module-5","attrs":{}}]},{"label":"Module 6: Exceptions & Files","translations":{},"collapsed":false,"items":[{"label":"Exceptions & File Handling","translations":{},"slug":"java/module-6","attrs":{}}]},{"label":"Module 7: Mini Project","translations":{},"collapsed":false,"items":[{"label":"Student Management System","translations":{},"slug":"java/module-7","attrs":{}}]}]},{"label":"Node.js","translations":{},"collapsed":false,"items":[{"label":"Introduction","translations":{},"collapsed":false,"items":[{"label":"Welcome","translations":{},"slug":"nodejs","attrs":{}}]},{"label":"Module 1: Basics & Modules","translations":{},"collapsed":false,"items":[{"label":"Node.js Basics & Modules","translations":{},"slug":"nodejs/module-1","attrs":{}}]},{"label":"Module 2: File System","translations":{},"collapsed":false,"items":[{"label":"File System & Path","translations":{},"slug":"nodejs/module-2","attrs":{}}]},{"label":"Module 3: Async Programming","translations":{},"collapsed":false,"items":[{"label":"Asynchronous Programming","translations":{},"slug":"nodejs/module-3","attrs":{}}]},{"label":"Module 4: NPM","translations":{},"collapsed":false,"items":[{"label":"NPM & Package Management","translations":{},"slug":"nodejs/module-4","attrs":{}}]},{"label":"Module 5: Web Server","translations":{},"collapsed":false,"items":[{"label":"Building a Web Server","translations":{},"slug":"nodejs/module-5","attrs":{}}]},{"label":"Module 6: Express.js","translations":{},"collapsed":false,"items":[{"label":"Express.js Basics","translations":{},"slug":"nodejs/module-6","attrs":{}}]},{"label":"Module 7: Mini Project","translations":{},"collapsed":false,"items":[{"label":"Simple REST API","translations":{},"slug":"nodejs/module-7","attrs":{}}]}]},{"label":"TypeScript","translations":{},"collapsed":false,"items":[{"label":"Introduction","translations":{},"collapsed":false,"items":[{"label":"Welcome","translations":{},"slug":"typescript","attrs":{}}]},{"label":"Module 1: Basic Types","translations":{},"collapsed":false,"items":[{"label":"Basic Types","translations":{},"slug":"typescript/module-1","attrs":{}}]},{"label":"Module 2: Functions","translations":{},"collapsed":false,"items":[{"label":"Functions","translations":{},"slug":"typescript/module-2","attrs":{}}]},{"label":"Module 3: Objects & Interfaces","translations":{},"collapsed":false,"items":[{"label":"Objects & Interfaces","translations":{},"slug":"typescript/module-3","attrs":{}}]},{"label":"Module 4: Union & Intersection","translations":{},"collapsed":false,"items":[{"label":"Union & Intersection Types","translations":{},"slug":"typescript/module-4","attrs":{}}]},{"label":"Module 5: Enums & Tuples","translations":{},"collapsed":false,"items":[{"label":"Enums & Tuples","translations":{},"slug":"typescript/module-5","attrs":{}}]},{"label":"Module 6: Classes & OOP","translations":{},"collapsed":false,"items":[{"label":"Classes & OOP","translations":{},"slug":"typescript/module-6","attrs":{}}]},{"label":"Module 7: Generics","translations":{},"collapsed":false,"items":[{"label":"Generics","translations":{},"slug":"typescript/module-7","attrs":{}}]},{"label":"Module 8: Mini Project","translations":{},"collapsed":false,"items":[{"label":"Todo List Logic","translations":{},"slug":"typescript/module-8","attrs":{}}]}]},{"label":"Golang","translations":{},"collapsed":false,"items":[{"label":"Introduction","translations":{},"collapsed":false,"items":[{"label":"Welcome","translations":{},"slug":"golang","attrs":{}}]},{"label":"Module 1: Setup","translations":{},"collapsed":false,"items":[{"label":"Introduction & Setup","translations":{},"slug":"golang/module-1","attrs":{}}]},{"label":"Module 2: Basics","translations":{},"collapsed":false,"items":[{"label":"Variables, Types & Functions","translations":{},"slug":"golang/module-2","attrs":{}}]},{"label":"Module 3: Control Structures","translations":{},"collapsed":false,"items":[{"label":"If, For & Switch","translations":{},"slug":"golang/module-3","attrs":{}}]},{"label":"Module 4: Data Structures","translations":{},"collapsed":false,"items":[{"label":"Arrays, Slices & Maps","translations":{},"slug":"golang/module-4","attrs":{}}]},{"label":"Module 5: Pointers & Structs","translations":{},"collapsed":false,"items":[{"label":"Pointers & Structs","translations":{},"slug":"golang/module-5","attrs":{}}]},{"label":"Module 6: Interfaces & Errors","translations":{},"collapsed":false,"items":[{"label":"Interfaces & Error Handling","translations":{},"slug":"golang/module-6","attrs":{}}]},{"label":"Module 7: Concurrency","translations":{},"collapsed":false,"items":[{"label":"Goroutines & Channels","translations":{},"slug":"golang/module-7","attrs":{}}]},{"label":"Module 8: Standard Library","translations":{},"collapsed":false,"items":[{"label":"Packages & HTTP","translations":{},"slug":"golang/module-8","attrs":{}}]},{"label":"Module 9: Mini Project","translations":{},"collapsed":false,"items":[{"label":"Bookstore REST API","translations":{},"slug":"golang/module-9","attrs":{}}]}]},{"label":"Data Structures & Algorithms","translations":{},"collapsed":false,"items":[{"label":"Introduction","translations":{},"collapsed":false,"items":[{"label":"Welcome","translations":{},"slug":"dsa","attrs":{}}]},{"label":"Module 1: Foundations","translations":{},"collapsed":false,"items":[{"label":"The Big O & Memory","translations":{},"slug":"dsa/module-1/foundations","attrs":{}}]},{"label":"Module 2: Linear Data Structures","translations":{},"collapsed":false,"items":[{"label":"Arrays","translations":{},"slug":"dsa/module-2/arrays","attrs":{}},{"label":"Strings","translations":{},"slug":"dsa/module-2/strings","attrs":{}},{"label":"Linked Lists","translations":{},"slug":"dsa/module-2/linked-lists","attrs":{}}]},{"label":"Module 3: LIFO & FIFO","translations":{},"collapsed":false,"items":[{"label":"Stacks","translations":{},"slug":"dsa/module-3/stacks","attrs":{}},{"label":"Queues","translations":{},"slug":"dsa/module-3/queues","attrs":{}},{"label":"Hash Maps","translations":{},"slug":"dsa/module-3/hash-maps","attrs":{}}]},{"label":"Module 4: Recursion & Sorting","translations":{},"collapsed":false,"items":[{"label":"Recursion","translations":{},"slug":"dsa/module-4/recursion","attrs":{}},{"label":"Sorting Algorithms","translations":{},"slug":"dsa/module-4/sorting","attrs":{}}]},{"label":"Module 5: Trees & Graphs","translations":{},"collapsed":false,"items":[{"label":"Trees & BST","translations":{},"slug":"dsa/module-5/trees","attrs":{}},{"label":"Heaps","translations":{},"slug":"dsa/module-5/heaps","attrs":{}},{"label":"Graphs","translations":{},"slug":"dsa/module-5/graphs","attrs":{}}]},{"label":"Module 6: Advanced Problem Solving","translations":{},"collapsed":false,"items":[{"label":"Dynamic Programming","translations":{},"slug":"dsa/module-6/dynamic-programming","attrs":{}},{"label":"Greedy Algorithms","translations":{},"slug":"dsa/module-6/greedy","attrs":{}},{"label":"Backtracking","translations":{},"slug":"dsa/module-6/backtracking","attrs":{}}]}]},{"label":"WebSocket","translations":{},"collapsed":false,"items":[{"label":"Websocket Introduction","translations":{},"collapsed":false,"items":[{"label":"What is WebSocket?","translations":{},"slug":"websocket/introduction/what-is-websocket","attrs":{}},{"label":"TCP connection","translations":{},"slug":"websocket/introduction/tcp-connection","attrs":{}},{"label":"TCP Three-Way Handshake","translations":{},"slug":"websocket/introduction/tcp-handshake","attrs":{}}]},{"label":"About HTTP","translations":{},"collapsed":false,"items":[{"label":"HTTP history and limitations","translations":{},"slug":"websocket/http/http-history-and-limitations","attrs":{}},{"label":"HTTP version history","translations":{},"slug":"websocket/http/http-versions","attrs":{}},{"label":"HTTP Real-Time","translations":{},"slug":"websocket/http/http-realtime","attrs":{}}]},{"label":"About WebSocket","translations":{},"collapsed":false,"items":[{"label":"Birth of WebSocket","translations":{},"slug":"websocket/about-websocket/birth-websocket","attrs":{}},{"label":"Http upgrade handshake","translations":{},"slug":"websocket/about-websocket/http-upgrade-handshake","attrs":{}},{"label":"WebSocket Messaging","translations":{},"slug":"websocket/about-websocket/websocket-messaging","attrs":{}},{"label":"Two sides of WebSocket","translations":{},"slug":"websocket/about-websocket/two-sides-websocket","attrs":{}}]},{"label":"Real World Example","translations":{},"collapsed":false,"items":[{"label":"Simple Chat App - Client","translations":{},"slug":"websocket/real-world-application/chat-app-client","attrs":{}},{"label":"Simple Chat App - Server","translations":{},"slug":"websocket/real-world-application/chat-app-server","attrs":{}}]},{"label":"Latest Updates & Alternatives","translations":{},"slug":"websocket/latest-and-alternatives","attrs":{}}]},{"label":"Advanced-Typescript","translations":{},"collapsed":false,"items":[{"label":"Why is needed?","translations":{},"collapsed":false,"items":[{"label":"why advanced typescript?","translations":{},"slug":"advanced-typescript/why-is-advanced-ts-needed/why-advanced-typescript","attrs":{}},{"label":"Basic Typescript's Help","translations":{},"slug":"advanced-typescript/why-is-advanced-ts-needed/basic-typescript","attrs":{}},{"label":"New Challenges: Getting More Complex","translations":{},"slug":"advanced-typescript/why-is-advanced-ts-needed/getting-complex","attrs":{}},{"label":"More powerful Ways","translations":{},"slug":"advanced-typescript/why-is-advanced-ts-needed/more-powerful-ways","attrs":{}}]},{"label":"Generics","translations":{},"collapsed":false,"items":[{"label":"Generics Introduction","translations":{},"slug":"advanced-typescript/generics/introduction","attrs":{}},{"label":"Explicitly and Inference","translations":{},"slug":"advanced-typescript/generics/explicitly-and-inference","attrs":{}},{"label":"Usages of Generics","translations":{},"slug":"advanced-typescript/generics/usage-of-generics","attrs":{}},{"label":"Generics Constraints","translations":{},"slug":"advanced-typescript/generics/generics-constraints","attrs":{}},{"label":"Common Patterns","translations":{},"slug":"advanced-typescript/generics/common-patterns","attrs":{}}]},{"label":"Utility Types","translations":{},"collapsed":false,"items":[{"label":"Utility Introduction","translations":{},"slug":"advanced-typescript/utility/introduction","attrs":{}},{"label":"Partial","translations":{},"slug":"advanced-typescript/utility/modifying-properties-partial","attrs":{}},{"label":"Required","translations":{},"slug":"advanced-typescript/utility/modifying-properties-required","attrs":{}},{"label":"Readonly","translations":{},"slug":"advanced-typescript/utility/modifying-properties-readonly","attrs":{}},{"label":"Pick & Omit","translations":{},"slug":"advanced-typescript/utility/pick-omit","attrs":{}},{"label":"Record","translations":{},"slug":"advanced-typescript/utility/record","attrs":{}},{"label":"Exclude, Extract & NonNullable","translations":{},"slug":"advanced-typescript/utility/exclude-extract-nonnullable","attrs":{}},{"label":"Parameters, ReturnType & Awaited","translations":{},"slug":"advanced-typescript/utility/parameters-returntype-awaited","attrs":{}},{"label":"Summary (Cheat Sheet)","translations":{},"slug":"advanced-typescript/utility/utility-cheat-sheet","attrs":{}}]},{"label":"Satisfies Keyword","translations":{},"collapsed":false,"items":[{"label":"Before Satisfies","translations":{},"slug":"advanced-typescript/satisfies/before-satisfies","attrs":{}},{"label":"Problem with Type annotation and 'as' keyword","translations":{},"slug":"advanced-typescript/satisfies/solving-types","attrs":{}},{"label":"Satisfies Introduction","translations":{},"slug":"advanced-typescript/satisfies/satisfies-introduction","attrs":{}},{"label":"Satisfies Comparison","translations":{},"slug":"advanced-typescript/satisfies/satisfies-comparison","attrs":{}},{"label":"Practical Use Cases","translations":{},"slug":"advanced-typescript/satisfies/satisfies-practical-use-cases","attrs":{}}]},{"label":"Bringing it all together","translations":{},"collapsed":false,"items":[{"label":"Generics + Utility Types","translations":{},"slug":"advanced-typescript/all-together/generics-utility","attrs":{}},{"label":"Mini Project","translations":{},"slug":"advanced-typescript/all-together/mini-project","attrs":{}},{"label":"Common Pitfalls & Best Practices","translations":{},"slug":"advanced-typescript/all-together/advanced-tips-pitfalls","attrs":{}}]}]},{"label":"Docker for Developers","translations":{},"collapsed":false,"items":[{"label":"Introduction","translations":{},"collapsed":false,"items":[{"label":"What is Docker?","translations":{},"slug":"docker/introduction/what-is-docker","attrs":{}}]},{"label":"Core Concepts","translations":{},"collapsed":false,"items":[{"label":"Images & Containers","translations":{},"slug":"docker/core-concepts/images-and-containers","attrs":{}}]},{"label":"Building","translations":{},"collapsed":false,"items":[{"label":"Writing Dockerfile","translations":{},"slug":"docker/dockerfile/writing-dockerfile","attrs":{}}]},{"label":"Orchestration","translations":{},"collapsed":false,"items":[{"label":"Docker Compose Basics","translations":{},"slug":"docker/docker-compose/basics","attrs":{}}]},{"label":"Summary","translations":{},"collapsed":false,"items":[{"label":"Cheat Sheet","translations":{},"slug":"docker/summary/cheatsheet","attrs":{}}]}]},{"label":"Git Version Control","translations":{},"collapsed":false,"items":[{"label":"Git Introduction","translations":{},"collapsed":false,"items":[{"label":"Why Git?","translations":{},"slug":"git-course/introduction/why-git","attrs":{}},{"label":"Installation & Identity","translations":{},"slug":"git-course/introduction/installation-identity","attrs":{}},{"label":"The Three Arenas","translations":{},"slug":"git-course/introduction/three-arena","attrs":{}},{"label":"Commit Messages & Git History","translations":{},"slug":"git-course/introduction/commit-messages","attrs":{}}]},{"label":"Branches","translations":{},"collapsed":false,"items":[{"label":"Branches Introduction","translations":{},"slug":"git-course/branches/branches-introduction","attrs":{}},{"label":"Merging Branches","translations":{},"slug":"git-course/branches/merge","attrs":{}},{"label":"Solving Merge Conficts","translations":{},"slug":"git-course/branches/solving-conflicts","attrs":{}},{"label":"Deleting Branches","translations":{},"slug":"git-course/branches/deleting-branches","attrs":{}}]},{"label":"Remote Repository","translations":{},"collapsed":false,"items":[{"label":"Remote Repository Introduction","translations":{},"slug":"git-course/remote-repository/remote-intro","attrs":{}},{"label":"Linking Local and Remote","translations":{},"slug":"git-course/remote-repository/connect-remote","attrs":{}},{"label":"Pushing","translations":{},"slug":"git-course/remote-repository/pushing","attrs":{}},{"label":"Pulling","translations":{},"slug":"git-course/remote-repository/pulling","attrs":{}},{"label":"Cloning","translations":{},"slug":"git-course/remote-repository/cloning","attrs":{}}]},{"label":"Git Workflow","translations":{},"collapsed":false,"items":[{"label":"Git Workflow Introduction","translations":{},"slug":"git-course/collaboration/workflow","attrs":{}},{"label":"Pull Requests (PRs)","translations":{},"slug":"git-course/collaboration/pull-requests","attrs":{}},{"label":"Discussion & Improvment","translations":{},"slug":"git-course/collaboration/discussion","attrs":{}},{"label":"Merging a Pull Request","translations":{},"slug":"git-course/collaboration/merging","attrs":{}}]},{"label":"Advanced Techniques","translations":{},"collapsed":false,"items":[{"label":"Quick Fixes","translations":{},"slug":"git-course/advanced-techniques/quick-fixes","attrs":{}},{"label":"Resetting(Soft, Mixed & Hard)","translations":{},"slug":"git-course/advanced-techniques/resetting","attrs":{}},{"label":"Reverting Published Commits","translations":{},"slug":"git-course/advanced-techniques/reverting","attrs":{}},{"label":"Stashing","translations":{},"slug":"git-course/advanced-techniques/stashing","attrs":{}},{"label":"Rebasing","translations":{},"slug":"git-course/advanced-techniques/rebasing","attrs":{}},{"label":"Rebase Vs Merge","translations":{},"slug":"git-course/advanced-techniques/rebase-vs-merge","attrs":{}},{"label":"Tagging","translations":{},"slug":"git-course/advanced-techniques/tagging","attrs":{}},{"label":"Reflog","translations":{},"slug":"git-course/advanced-techniques/reflog","attrs":{}}]}]},{"label":"Command Line Interface (CLI)","translations":{},"collapsed":false,"items":[{"label":"Introduction","translations":{},"collapsed":false,"items":[{"label":"What is CLI?","translations":{},"slug":"cli/introduction/what-is-cli","attrs":{}}]},{"label":"Commands","translations":{},"collapsed":false,"items":[{"label":"Navigation","translations":{},"slug":"cli/commands/navigation","attrs":{}},{"label":"File Management","translations":{},"slug":"cli/commands/file-management","attrs":{}},{"label":"Reading Files","translations":{},"slug":"cli/commands/reading-files","attrs":{}},{"label":"Searching & Filtering","translations":{},"slug":"cli/commands/searching-filtering","attrs":{}},{"label":"System Info & Others","translations":{},"slug":"cli/commands/system-info","attrs":{}}]},{"label":"Summary","translations":{},"collapsed":false,"items":[{"label":"Cheat Sheet","translations":{},"slug":"cli/summary/cheatsheet","attrs":{}}]}]},{"label":"Vim Motions (Mastering Keyboard)","translations":{},"collapsed":false,"items":[{"label":"Introduction","translations":{},"collapsed":false,"items":[{"label":"What is Vim?","translations":{},"slug":"vim-motions/introduction/what-is-vim","attrs":{}}]},{"label":"Basic Navigation","translations":{},"collapsed":false,"items":[{"label":"HJKL & Words","translations":{},"slug":"vim-motions/basic-motions/hjkl-and-words","attrs":{}}]},{"label":"Advanced Navigation","translations":{},"collapsed":false,"items":[{"label":"Search & File Nav","translations":{},"slug":"vim-motions/advanced-motions/search-and-nav","attrs":{}}]},{"label":"Editing Code","translations":{},"collapsed":false,"items":[{"label":"Operators & Text Objects","translations":{},"slug":"vim-motions/editing/operators-text-objects","attrs":{}}]},{"label":"Summary","translations":{},"collapsed":false,"items":[{"label":"Cheat Sheet","translations":{},"slug":"vim-motions/summary/cheatsheet","attrs":{}}]}]},{"label":"Responsive Web Design (Modern)","translations":{},"collapsed":false,"items":[{"label":"Introduction","translations":{},"collapsed":false,"items":[{"label":"What is RWD?","translations":{},"slug":"responsive-design/introduction/what-is-rwd","attrs":{}}]},{"label":"Core Fundamentals","translations":{},"collapsed":false,"items":[{"label":"Modern Media Queries","translations":{},"slug":"responsive-design/core-fundamentals/modern-media-queries","attrs":{}}]},{"label":"Modern Layouts","translations":{},"collapsed":false,"items":[{"label":"Flex & Grid Composition","translations":{},"slug":"responsive-design/modern-layouts/grid-flex-composition","attrs":{}}]},{"label":"Advanced Techniques","translations":{},"collapsed":false,"items":[{"label":"Fluid Typography","translations":{},"slug":"responsive-design/advanced-techniques/fluid-typography","attrs":{}},{"label":"Container Queries","translations":{},"slug":"responsive-design/advanced-techniques/container-queries","attrs":{}},{"label":"Responsive Media","translations":{},"slug":"responsive-design/advanced-techniques/responsive-media","attrs":{}}]},{"label":"Summary","translations":{},"collapsed":false,"items":[{"label":"Best Practices","translations":{},"slug":"responsive-design/summary/best-practices","attrs":{}}]}]},{"label":"Web Performance: Web Vitals and More","translations":{},"collapsed":false,"items":[{"label":"Introduction","translations":{},"collapsed":false,"items":[{"label":"Why Web Performance","translations":{},"slug":"web-performance/introduction/why-web-performance","attrs":{}},{"label":"The Business Case for Performance","translations":{},"slug":"web-performance/introduction/business-cases","attrs":{}}]},{"label":"Measuring Web Performance","translations":{},"collapsed":false,"items":[{"label":"Key Performance Metrics","translations":{},"slug":"web-performance/measuring-performance/metrics","attrs":{}},{"label":"Essential Tools","translations":{},"slug":"web-performance/measuring-performance/essential-tools","attrs":{}}]},{"label":"Mastering Core Web Vitals","translations":{},"collapsed":false,"items":[{"label":"LCP","translations":{},"slug":"web-performance/core-vitals/lcp","attrs":{}},{"label":"FID & INP","translations":{},"slug":"web-performance/core-vitals/fid-and-inp","attrs":{}},{"label":"CLS","translations":{},"slug":"web-performance/core-vitals/cls","attrs":{}},{"label":"Optimizing","translations":{},"slug":"web-performance/core-vitals/optimizing","attrs":{}}]},{"label":"Image & Asset Optimization","translations":{},"collapsed":false,"items":[{"label":"Image Optimization","translations":{},"slug":"web-performance/image-and-asset/image-optimization","attrs":{}},{"label":"Video Optimization","translations":{},"slug":"web-performance/image-and-asset/video-optimization","attrs":{}},{"label":"Font Optimization","translations":{},"slug":"web-performance/image-and-asset/font-optimization","attrs":{}}]},{"label":"Javascript & CSS Optimization","translations":{},"collapsed":false,"items":[{"label":"Javascript Optimization","translations":{},"slug":"web-performance/js-and-css/js-optimization","attrs":{}},{"label":"CSS Optimization","translations":{},"slug":"web-performance/js-and-css/css-optimization","attrs":{}},{"label":"How Browsers Show Pages","translations":{},"slug":"web-performance/js-and-css/how-browsers-show-pages","attrs":{}}]},{"label":"Server-Side & Delivery - Caching, CDNS","translations":{},"collapsed":false,"items":[{"label":"Browser Caching","translations":{},"slug":"web-performance/server-side/browser-caching","attrs":{}},{"label":"Content Delivery Network","translations":{},"slug":"web-performance/server-side/cdn","attrs":{}},{"label":"Server-Side Optimizations","translations":{},"slug":"web-performance/server-side/server-side","attrs":{}}]},{"label":"Advanced Performance Techniques & Future Trends","translations":{},"collapsed":false,"items":[{"label":"Rendering Architectures","translations":{},"slug":"web-performance/advanced-techniques/rendering-architectures","attrs":{}},{"label":"Predictive Loading","translations":{},"slug":"web-performance/advanced-techniques/predictive-loading","attrs":{}},{"label":"Future of Web Performance","translations":{},"slug":"web-performance/advanced-techniques/future","attrs":{}}]},{"label":"Course Summary","translations":{},"slug":"web-performance/summary","attrs":{}}]},{"label":"Software Architecture","translations":{},"collapsed":false,"items":[{"label":"Foundations","translations":{},"collapsed":false,"items":[{"label":"Foundations of Software Architecture","translations":{},"slug":"software-architecture/foundations/foundations","attrs":{}},{"label":"The Goals of Architecture","translations":{},"slug":"software-architecture/foundations/goals","attrs":{}}]},{"label":"Monolithic Architecture","translations":{},"collapsed":false,"items":[{"label":"Monolithic Architecture","translations":{},"slug":"software-architecture/monolith/monolithic","attrs":{}},{"label":"Layered Architecture","translations":{},"slug":"software-architecture/monolith/layered","attrs":{}},{"label":"Monolith Pain Point","translations":{},"slug":"software-architecture/monolith/pain-points","attrs":{}}]},{"label":"SOA & Microservices","translations":{},"collapsed":false,"items":[{"label":"Distributed Systems & SOA","translations":{},"slug":"software-architecture/microservices/soa","attrs":{}},{"label":"Microservices Architecture","translations":{},"slug":"software-architecture/microservices/microservices","attrs":{}},{"label":"Challenges of Microservices","translations":{},"slug":"software-architecture/microservices/challenges","attrs":{}}]},{"label":"Designing Communication","translations":{},"collapsed":false,"items":[{"label":"Synchronous Communication","translations":{},"slug":"software-architecture/communications/synchronous","attrs":{}},{"label":"Data Architecture in Distributed Systems","translations":{},"slug":"software-architecture/communications/data-distributed","attrs":{}},{"label":"Choosing the Right Database","translations":{},"slug":"software-architecture/communications/database","attrs":{}}]},{"label":"Asynchronous Architectures","translations":{},"collapsed":false,"items":[{"label":"Asynchronous Communication","translations":{},"slug":"software-architecture/async/asynchronous","attrs":{}},{"label":"Architectural Patterns","translations":{},"slug":"software-architecture/async/patterns","attrs":{}},{"label":"Advanced Patterns","translations":{},"slug":"software-architecture/async/advanced","attrs":{}}]},{"label":"The Architect's Craft","translations":{},"collapsed":false,"items":[{"label":"Trade-Off & Making Decisions","translations":{},"slug":"software-architecture/craft/decisions","attrs":{}},{"label":"C4 Model","translations":{},"slug":"software-architecture/craft/c4","attrs":{}},{"label":"Architectural Decision Records (ADRs)","translations":{},"slug":"software-architecture/craft/adr","attrs":{}},{"label":"Evaluating Architecture & Architectural Fitness Functions","translations":{},"slug":"software-architecture/craft/evaluation","attrs":{}}]},{"label":"Practical Architecture","translations":{},"collapsed":false,"items":[{"label":"Designing a \"Ride-Sharing App\"","translations":{},"slug":"software-architecture/practical/design","attrs":{}},{"label":"High-Level Design & Pattern Selection","translations":{},"slug":"software-architecture/practical/pattern","attrs":{}},{"label":"Detailed Design & Key Decisions","translations":{},"slug":"software-architecture/practical/decisions","attrs":{}}]},{"label":"The Future of Architecture","translations":{},"collapsed":false,"items":[{"label":"Current & Future Trends","translations":{},"slug":"software-architecture/future/current","attrs":{}},{"label":"Software Architect's Role","translations":{},"slug":"software-architecture/future/role","attrs":{}},{"label":"Course Recap","translations":{},"slug":"software-architecture/future/recap","attrs":{}}]}]},{"label":"Relational Database","translations":{},"collapsed":false,"items":[{"label":"Introduction","translations":{},"collapsed":false,"items":[{"label":"Welcome to Database","translations":{},"slug":"relational-database/introduction/welcome-to-database","attrs":{}},{"label":"Types of Databases","translations":{},"slug":"relational-database/introduction/types-of-databases","attrs":{}},{"label":"Relational Database","translations":{},"slug":"relational-database/introduction/relational-database","attrs":{}}]},{"label":"Terminology","translations":{},"collapsed":false,"items":[{"label":"Terminology","translations":{},"slug":"relational-database/terminology/terminology","attrs":{}},{"label":"Data Values and Null","translations":{},"slug":"relational-database/terminology/value-related-terms","attrs":{}},{"label":"Table","translations":{},"slug":"relational-database/terminology/structure-related-terms/table","attrs":{}},{"label":"Field","translations":{},"slug":"relational-database/terminology/structure-related-terms/field","attrs":{}},{"label":"Record","translations":{},"slug":"relational-database/terminology/structure-related-terms/record","attrs":{}},{"label":"Candidate Key","translations":{},"slug":"relational-database/terminology/structure-related-terms/candidate-key","attrs":{}},{"label":"Primary Key","translations":{},"slug":"relational-database/terminology/structure-related-terms/primary-key","attrs":{}},{"label":"Foreign Key","translations":{},"slug":"relational-database/terminology/structure-related-terms/foreign-key","attrs":{}},{"label":"Alternate Key and Non-Keys","translations":{},"slug":"relational-database/terminology/structure-related-terms/alternate-key","attrs":{}},{"label":"Relationships","translations":{},"slug":"relational-database/terminology/structure-related-terms/relationships","attrs":{}}]},{"label":"Normalization","translations":{},"collapsed":false,"items":[{"label":"Normalization","translations":{},"slug":"relational-database/normalization/normalization","attrs":{}},{"label":"First Normal Form","translations":{},"slug":"relational-database/normalization/first-normal-form","attrs":{}},{"label":"Second Normal Form","translations":{},"slug":"relational-database/normalization/second-normal-form","attrs":{}},{"label":"Third Normal Form","translations":{},"slug":"relational-database/normalization/third-normal-form","attrs":{}},{"label":"Boyce-Codd Normal Form","translations":{},"slug":"relational-database/normalization/bcnf","attrs":{}},{"label":"Fourth Normal Form","translations":{},"slug":"relational-database/normalization/fourth-normal-form","attrs":{}},{"label":"Fifth Normal Form","translations":{},"slug":"relational-database/normalization/fifth-normal-form","attrs":{}}]},{"label":"SQL","translations":{},"collapsed":false,"items":[{"label":"SQL","translations":{},"slug":"relational-database/sql/what-is-sql","attrs":{}},{"label":"SQL Basic Types","translations":{},"slug":"relational-database/sql/sql-types","attrs":{}},{"label":"Querying Data","translations":{},"slug":"relational-database/sql/querying-data","attrs":{}},{"label":"Filtering and Sorting Data","translations":{},"slug":"relational-database/sql/filter-and-sort-data","attrs":{}},{"label":"Joining Tables","translations":{},"slug":"relational-database/sql/join-tables","attrs":{}},{"label":"Data Aggregation and Grouping","translations":{},"slug":"relational-database/sql/aggregate-and-group","attrs":{}},{"label":"Subqueries and CTEs","translations":{},"slug":"relational-database/sql/subqueries-cte","attrs":{}},{"label":"Data Manipulation Language (DML)","translations":{},"slug":"relational-database/sql/modifying-data","attrs":{}},{"label":"Data Definition Language (DDL)","translations":{},"slug":"relational-database/sql/ddl","attrs":{}},{"label":"Advanced Topics","translations":{},"slug":"relational-database/sql/advanced-topic","attrs":{}}]}]},{"label":"Frontend Architecture Patterns","translations":{},"collapsed":false,"items":[{"label":"Introduction","translations":{},"collapsed":false,"items":[{"label":"What is Frontend Architecture?","translations":{},"slug":"fe-architecture/introduction/welcome","attrs":{}}]},{"label":"Monolithic Architecture","translations":{},"collapsed":false,"items":[{"label":"What is Monolithic Architecture?","translations":{},"slug":"fe-architecture/monolithic/monolithic","attrs":{}},{"label":"Advantages & Disadvantages","translations":{},"slug":"fe-architecture/monolithic/advantages","attrs":{}},{"label":"Monolithic in Modern Frameworks","translations":{},"slug":"fe-architecture/monolithic/modern","attrs":{}}]},{"label":"Component-Based Architecture","translations":{},"collapsed":false,"items":[{"label":"Component-Based Architecture","translations":{},"slug":"fe-architecture/component/component-based","attrs":{}},{"label":"Advantages & Disadvantages","translations":{},"slug":"fe-architecture/component/advantages","attrs":{}}]},{"label":"MV* Architecture (MVC, MVVM, MVP)","translations":{},"collapsed":false,"items":[{"label":"Introduction to MV*","translations":{},"slug":"fe-architecture/mv-star/intro","attrs":{}},{"label":"Comparison","translations":{},"slug":"fe-architecture/mv-star/patterns-comparison","attrs":{}}]},{"label":"Flux/Redux Architecture","translations":{},"collapsed":false,"items":[{"label":"Flux Architecture","translations":{},"slug":"fe-architecture/redux/flux","attrs":{}},{"label":"Benefits","translations":{},"slug":"fe-architecture/redux/benefits","attrs":{}}]},{"label":"Micro-Frontend Architecture","translations":{},"collapsed":false,"items":[{"label":"Micro-Frontend Architecture","translations":{},"slug":"fe-architecture/micro-frontend/intro","attrs":{}},{"label":"Benefits","translations":{},"slug":"fe-architecture/micro-frontend/benefits","attrs":{}}]},{"label":"Modular Architecture","translations":{},"collapsed":false,"items":[{"label":"Modular Architecture","translations":{},"slug":"fe-architecture/modular/intro","attrs":{}},{"label":"Benefits","translations":{},"slug":"fe-architecture/modular/benefits","attrs":{}}]},{"label":"Rendering Strategies (CSR, SSR, SSG, ISR)","translations":{},"collapsed":false,"items":[{"label":"CSR, SSR, SSG, ISR","translations":{},"slug":"fe-architecture/rendering/intro","attrs":{}},{"label":"Comparison","translations":{},"slug":"fe-architecture/rendering/comparison","attrs":{}}]},{"label":"Conclusion & Future Trends","translations":{},"collapsed":false,"items":[{"label":"Conclusion","translations":{},"slug":"fe-architecture/conclusion/conclusion","attrs":{}}]}]},{"label":"HTML","translations":{},"collapsed":false,"items":[{"label":"HTML Introduction","translations":{},"collapsed":false,"items":[{"label":"What is HTML?","translations":{},"slug":"html/introduction/welcome-to-html","attrs":{}},{"label":"Setting up Your Editor","translations":{},"slug":"html/introduction/editor","attrs":{}}]},{"label":"Basic HTML Structure","translations":{},"collapsed":false,"items":[{"label":"Simple HTML Document","translations":{},"slug":"html/structure/simple","attrs":{}},{"label":"The <head> Section","translations":{},"slug":"html/structure/head","attrs":{}},{"label":"The <body> Section","translations":{},"slug":"html/structure/body","attrs":{}}]},{"label":"Text & Formatting","translations":{},"collapsed":false,"items":[{"label":"Headings & Paragraphs","translations":{},"slug":"html/texts/headings","attrs":{}},{"label":"Line Breaks, Horizontal Rules & Text Formatting","translations":{},"slug":"html/texts/line","attrs":{}},{"label":"Lists","translations":{},"slug":"html/texts/lists","attrs":{}}]},{"label":"Links & Navigation","translations":{},"collapsed":false,"items":[{"label":"Links","translations":{},"slug":"html/links/links","attrs":{}},{"label":"Images as Links","translations":{},"slug":"html/links/images","attrs":{}}]},{"label":"Images & Media","translations":{},"collapsed":false,"items":[{"label":"Images","translations":{},"slug":"html/media/images","attrs":{}},{"label":"Videos & Audios","translations":{},"slug":"html/media/videos","attrs":{}}]},{"label":"Table","translations":{},"collapsed":false,"items":[{"label":"Table Introduction","translations":{},"slug":"html/table/table-intro","attrs":{}},{"label":"Merging Cells","translations":{},"slug":"html/table/merging-cells","attrs":{}}]},{"label":"Forms & Input","translations":{},"collapsed":false,"items":[{"label":"Form Introduction","translations":{},"slug":"html/form/form-intro","attrs":{}},{"label":"Dropdowns & Options","translations":{},"slug":"html/form/dropdown","attrs":{}}]},{"label":"Semantic HTML","translations":{},"collapsed":false,"items":[{"label":"Semantic HTML Introduction","translations":{},"slug":"html/semantic/intro","attrs":{}},{"label":"Benefits of Semantic HTML","translations":{},"slug":"html/semantic/benefits","attrs":{}}]},{"label":"HTML Attributes & Best Practices","translations":{},"collapsed":false,"items":[{"label":"Attributes","translations":{},"slug":"html/attributes/intro","attrs":{}},{"label":"HTML Best Practices","translations":{},"slug":"html/attributes/best-practices","attrs":{}}]},{"label":"HTML 5 Features","translations":{},"collapsed":false,"items":[{"label":"New Input Types","translations":{},"slug":"html/html5/input","attrs":{}},{"label":"Other Elements","translations":{},"slug":"html/html5/other","attrs":{}}]},{"label":"Putting It All Together","translations":{},"collapsed":false,"items":[{"label":"Structure of a Webpage","translations":{},"slug":"html/together/structure","attrs":{}}]},{"label":"Next Steps","translations":{},"collapsed":false,"items":[{"label":"Next Steps","translations":{},"slug":"html/next/steps","attrs":{}}]}]},{"label":"CSS","translations":{},"collapsed":false,"items":[{"label":"Introduction","translations":{},"collapsed":false,"items":[{"label":"What is CSS?","translations":{},"slug":"css/introduction/welcome","attrs":{}},{"label":"Selectors","translations":{},"slug":"css/introduction/selectors","attrs":{}}]},{"label":"Visuals","translations":{},"collapsed":false,"items":[{"label":"Colors & Backgrounds","translations":{},"slug":"css/visuals/colors","attrs":{}},{"label":"Fonts & Text","translations":{},"slug":"css/visuals/fonts","attrs":{}}]},{"label":"Box Model","translations":{},"collapsed":false,"items":[{"label":"The Box Model","translations":{},"slug":"css/box-model/box-model","attrs":{}},{"label":"Margin & Padding","translations":{},"slug":"css/box-model/spacing","attrs":{}},{"label":"Borders","translations":{},"slug":"css/box-model/borders","attrs":{}}]},{"label":"Layout","translations":{},"collapsed":false,"items":[{"label":"Display Property","translations":{},"slug":"css/layout/display","attrs":{}},{"label":"Flexbox","translations":{},"slug":"css/layout/flexbox","attrs":{}},{"label":"CSS Grid","translations":{},"slug":"css/layout/grid","attrs":{}}]},{"label":"Responsive Design","translations":{},"collapsed":false,"items":[{"label":"Media Queries","translations":{},"slug":"css/responsive/media-queries","attrs":{}}]},{"label":"Positioning","translations":{},"collapsed":false,"items":[{"label":"Position Property","translations":{},"slug":"css/positioning/position","attrs":{}},{"label":"Z-Index","translations":{},"slug":"css/positioning/z-index","attrs":{}}]},{"label":"Effects","translations":{},"collapsed":false,"items":[{"label":"Shadows","translations":{},"slug":"css/effects/shadows","attrs":{}},{"label":"Gradients","translations":{},"slug":"css/effects/gradients","attrs":{}}]},{"label":"Interactivity","translations":{},"collapsed":false,"items":[{"label":"Transitions","translations":{},"slug":"css/interactivity/transitions","attrs":{}},{"label":"Transforms","translations":{},"slug":"css/interactivity/transforms","attrs":{}},{"label":"Animations","translations":{},"slug":"css/interactivity/animations","attrs":{}}]},{"label":"Advanced Selectors","translations":{},"collapsed":false,"items":[{"label":"Pseudo-classes","translations":{},"slug":"css/advanced-selectors/pseudo-classes","attrs":{}},{"label":"Pseudo-elements","translations":{},"slug":"css/advanced-selectors/pseudo-elements","attrs":{}}]},{"label":"Modern Practices","translations":{},"collapsed":false,"items":[{"label":"CSS Variables","translations":{},"slug":"css/modern-practices/variables","attrs":{}},{"label":"CSS Units","translations":{},"slug":"css/modern-practices/units","attrs":{}}]},{"label":"Next Steps","translations":{},"collapsed":false,"items":[{"label":"What is Next?","translations":{},"slug":"css/next/steps","attrs":{}}]}]},{"label":"JavaScript","translations":{},"collapsed":false,"items":[{"label":"Introduction & Setup","translations":{},"collapsed":false,"items":[{"label":"What This Course Covers","translations":{},"slug":"javascript/introduction/intro","attrs":{}},{"label":"Tools & Environment Setup","translations":{},"slug":"javascript/introduction/setup","attrs":{}}]},{"label":"Fundamentals","translations":{},"collapsed":false,"items":[{"label":"What Is JavaScript?","translations":{},"slug":"javascript/fundamentals/what-is-js","attrs":{}},{"label":"Variables & Data Types","translations":{},"slug":"javascript/fundamentals/variables","attrs":{}},{"label":"Operators","translations":{},"slug":"javascript/fundamentals/operators","attrs":{}},{"label":"Strings & Numbers","translations":{},"slug":"javascript/fundamentals/strings-numbers","attrs":{}},{"label":"Interactive Section","translations":{},"slug":"javascript/fundamentals/interactive","attrs":{}}]},{"label":"Control Flow","translations":{},"collapsed":false,"items":[{"label":"Conditional Statements","translations":{},"slug":"javascript/control-flow/conditionals","attrs":{}},{"label":"Switch Statements","translations":{},"slug":"javascript/control-flow/switch","attrs":{}},{"label":"Loops","translations":{},"slug":"javascript/control-flow/loops","attrs":{}},{"label":"Interactive Section","translations":{},"slug":"javascript/control-flow/interactive","attrs":{}}]},{"label":"Arrays & Objects","translations":{},"collapsed":false,"items":[{"label":"Arrays","translations":{},"slug":"javascript/arrays-objects/arrays","attrs":{}},{"label":"Objects","translations":{},"slug":"javascript/arrays-objects/objects","attrs":{}},{"label":"Arrays of Objects","translations":{},"slug":"javascript/arrays-objects/arrays-of-objects","attrs":{}},{"label":"Interactive Section","translations":{},"slug":"javascript/arrays-objects/interactive","attrs":{}}]},{"label":"Functions","translations":{},"collapsed":false,"items":[{"label":"What Are Functions?","translations":{},"slug":"javascript/functions/intro","attrs":{}},{"label":"Parameters & Return Values","translations":{},"slug":"javascript/functions/parameters","attrs":{}},{"label":"Arrow Functions","translations":{},"slug":"javascript/functions/arrow-functions","attrs":{}},{"label":"Interactive Section","translations":{},"slug":"javascript/functions/interactive","attrs":{}}]},{"label":"Introduction to the DOM","translations":{},"collapsed":false,"items":[{"label":"What Is the DOM?","translations":{},"slug":"javascript/dom-intro/what-is-dom","attrs":{}},{"label":"Selecting Elements","translations":{},"slug":"javascript/dom-intro/selecting","attrs":{}},{"label":"Interactive Section","translations":{},"slug":"javascript/dom-intro/interactive","attrs":{}}]},{"label":"DOM Manipulation Basics","translations":{},"collapsed":false,"items":[{"label":"Changing Content","translations":{},"slug":"javascript/dom-manipulation/content","attrs":{}},{"label":"Changing Styles","translations":{},"slug":"javascript/dom-manipulation/styles","attrs":{}},{"label":"Working with Attributes","translations":{},"slug":"javascript/dom-manipulation/attributes","attrs":{}},{"label":"Interactive Section","translations":{},"slug":"javascript/dom-manipulation/interactive","attrs":{}}]},{"label":"Events & Event Handling","translations":{},"collapsed":false,"items":[{"label":"What Are Events?","translations":{},"slug":"javascript/events/intro","attrs":{}},{"label":"Event Listeners","translations":{},"slug":"javascript/events/listeners","attrs":{}},{"label":"Event Flow","translations":{},"slug":"javascript/events/flow","attrs":{}},{"label":"Interactive Section","translations":{},"slug":"javascript/events/interactive","attrs":{}}]},{"label":"DOM Projects (Hands-On)","translations":{},"collapsed":false,"items":[{"label":"Project 1: Interactive Counter","translations":{},"slug":"javascript/projects/counter","attrs":{}},{"label":"Project 2: To-Do List","translations":{},"slug":"javascript/projects/todo-list","attrs":{}},{"label":"Project 3: Theme Switcher","translations":{},"slug":"javascript/projects/theme-switcher","attrs":{}}]},{"label":"Best Practices & Next Steps","translations":{},"collapsed":false,"items":[{"label":"Writing Clean JavaScript","translations":{},"slug":"javascript/best-practices/clean-code","attrs":{}},{"label":"Debugging Basics","translations":{},"slug":"javascript/best-practices/debugging","attrs":{}},{"label":"What to Learn Next","translations":{},"slug":"javascript/best-practices/next-steps","attrs":{}}]}]}],"head":[{"tag":"link","attrs":{"rel":"icon","type":"image/svg+xml","href":"/favicon.svg"}},{"tag":"link","attrs":{"rel":"icon","type":"image/png","sizes":"32x32","href":"/favicon-32x32.png"}},{"tag":"link","attrs":{"rel":"icon","type":"image/png","sizes":"16x16","href":"/favicon-16x16.png"}},{"tag":"link","attrs":{"rel":"apple-touch-icon","sizes":"180x180","href":"/apple-touch-icon.png"}},{"tag":"link","attrs":{"rel":"manifest","href":"/site.webmanifest"}},{"tag":"link","attrs":{"rel":"mask-icon","href":"/safari-pinned-tab.svg","color":"#4f46e5"}},{"tag":"meta","attrs":{"name":"theme-color","content":"#111827"}},{"tag":"meta","attrs":{"name":"msapplication-TileColor","content":"#111827"}},{"tag":"meta","attrs":{"name":"msapplication-config","content":"/browserconfig.xml"}},{"tag":"meta","attrs":{"name":"application-name","content":"Takkatho"}},{"tag":"meta","attrs":{"name":"mobile-web-app-capable","content":"yes"}},{"tag":"meta","attrs":{"name":"apple-mobile-web-app-title","content":"Takkatho"}},{"tag":"meta","attrs":{"name":"keywords","content":"Myanmar programming, မြန်မာ programming, TypeScript Myanmar, WebSocket Myanmar, Git Myanmar, Database Myanmar, Software Architecture Myanmar, Web Performance Myanmar, မြန်မာ developer, programming course Myanmar, tech education Myanmar, coding Myanmar"}},{"tag":"meta","attrs":{"name":"author","content":"Takkatho Team"}},{"tag":"meta","attrs":{"name":"robots","content":"index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"}},{"tag":"meta","attrs":{"name":"googlebot","content":"index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large"}},{"tag":"meta","attrs":{"property":"og:type","content":"website"}},{"tag":"meta","attrs":{"property":"og:site_name","content":"Takkatho"}},{"tag":"meta","attrs":{"property":"og:image","content":"https://takkatho.dev/og-image.png"}},{"tag":"meta","attrs":{"property":"og:image:width","content":"1200"}},{"tag":"meta","attrs":{"property":"og:image:height","content":"630"}},{"tag":"meta","attrs":{"property":"og:image:alt","content":"Takkatho - Myanmar Programming Learning Platform"}},{"tag":"meta","attrs":{"property":"og:locale","content":"my_MM"}},{"tag":"meta","attrs":{"property":"og:locale:alternate","content":"en_US"}},{"tag":"meta","attrs":{"name":"twitter:card","content":"summary_large_image"}},{"tag":"meta","attrs":{"name":"twitter:creator","content":"@takkatho_mm"}},{"tag":"meta","attrs":{"name":"language","content":"Myanmar"}},{"tag":"meta","attrs":{"name":"geo.region","content":"MM"}},{"tag":"meta","attrs":{"name":"geo.country","content":"Myanmar"}},{"tag":"meta","attrs":{"name":"educational-level","content":"intermediate"}},{"tag":"meta","attrs":{"name":"audience","content":"developers,students,programmers"}},{"tag":"meta","attrs":{"name":"content-language","content":"my"}},{"tag":"script","attrs":{"type":"application/ld+json"},"content":"{\"@context\":\"https://schema.org\",\"@type\":\"EducationalOrganization\",\"name\":\"Takkatho\",\"alternateName\":\"တက္ကသိုလ်\",\"description\":\"Myanmar Programming Learning Platform - မြန်မာဘာသာဖြင့် programming သင်ခန်းစာများ\",\"url\":\"https://takkatho.dev\",\"logo\":\"https://takkatho.dev/android-chrome-512x512.png\",\"image\":\"https://takkatho.dev/og-image.png\",\"sameAs\":[\"https://github.com/WaiyanPhyoaung/takkatho\"],\"address\":{\"@type\":\"PostalAddress\",\"addressCountry\":\"Myanmar\"},\"areaServed\":{\"@type\":\"Country\",\"name\":\"Myanmar\"},\"teaches\":[\"Advanced TypeScript\",\"WebSocket Technology\",\"Git Version Control\",\"Web Performance\",\"Software Architecture\",\"Relational Database\",\"HTML & CSS\",\"JavaScript\"],\"courseMode\":\"online\",\"availableLanguage\":[{\"@type\":\"Language\",\"name\":\"Myanmar\",\"alternateName\":\"Burmese\"},{\"@type\":\"Language\",\"name\":\"English\"}],\"offers\":{\"@type\":\"Offer\",\"price\":\"0\",\"priceCurrency\":\"USD\",\"availability\":\"https://schema.org/InStock\"},\"educationalCredentialAwarded\":\"Certificate of Completion\",\"provider\":{\"@type\":\"Organization\",\"name\":\"Takkatho\",\"url\":\"https://takkatho.dev\"},\"potentialAction\":{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https://takkatho.dev/courses?q={search_term_string}\"},\"query-input\":\"required name=search_term_string\"},\"numberOfEmployees\":\"1-5\",\"foundingDate\":\"2024\",\"keywords\":\"Myanmar programming, TypeScript, WebSocket, Git, Database, Software Architecture, Web Performance, မြန်မာ programming\"}"},{"tag":"script","attrs":{"type":"application/ld+json"},"content":"{\"@context\":\"https://schema.org\",\"@type\":\"ItemList\",\"name\":\"Programming Courses\",\"description\":\"Free programming courses in Myanmar language\",\"url\":\"https://takkatho.dev/courses\",\"numberOfItems\":7,\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"item\":{\"@type\":\"Course\",\"name\":\"Advanced TypeScript\",\"description\":\"Master advanced TypeScript concepts including generics, utility types, and satisfies keyword\",\"url\":\"https://takkatho.dev/advanced-typescript/\",\"provider\":{\"@type\":\"Organization\",\"name\":\"Takkatho\"},\"courseMode\":\"online\",\"educationalLevel\":\"intermediate\"}},{\"@type\":\"ListItem\",\"position\":2,\"item\":{\"@type\":\"Course\",\"name\":\"WebSocket Technology\",\"description\":\"Learn real-time web communication with WebSocket protocol\",\"url\":\"https://takkatho.dev/websocket/\",\"provider\":{\"@type\":\"Organization\",\"name\":\"Takkatho\"},\"courseMode\":\"online\",\"educationalLevel\":\"intermediate\"}},{\"@type\":\"ListItem\",\"position\":3,\"item\":{\"@type\":\"Course\",\"name\":\"Git Version Control\",\"description\":\"Complete Git course from basics to advanced techniques\",\"url\":\"https://takkatho.dev/git-course/\",\"provider\":{\"@type\":\"Organization\",\"name\":\"Takkatho\"},\"courseMode\":\"online\",\"educationalLevel\":\"beginner\"}},{\"@type\":\"ListItem\",\"position\":4,\"item\":{\"@type\":\"Course\",\"name\":\"Web Performance\",\"description\":\"Optimize web performance with Core Web Vitals and modern techniques\",\"url\":\"https://takkatho.dev/web-performance/\",\"provider\":{\"@type\":\"Organization\",\"name\":\"Takkatho\"},\"courseMode\":\"online\",\"educationalLevel\":\"intermediate\"}},{\"@type\":\"ListItem\",\"position\":5,\"item\":{\"@type\":\"Course\",\"name\":\"Software Architecture\",\"description\":\"Learn software architecture patterns and design principles\",\"url\":\"https://takkatho.dev/software-architecture/\",\"provider\":{\"@type\":\"Organization\",\"name\":\"Takkatho\"},\"courseMode\":\"online\",\"educationalLevel\":\"advanced\"}}]}"},{"tag":"script","attrs":{"type":"application/ld+json"},"content":"{\"@context\":\"https://schema.org\",\"@type\":\"WebSite\",\"name\":\"Takkatho - Myanmar Programming Learning Platform\",\"alternateName\":\"တက္ကသိုလ်\",\"description\":\"လေ့လာပါ မြန်မာဘာသာဖြင့် programming သင်ခန်းစာများ။ TypeScript, WebSocket, Git, Web Performance, Software Architecture နှင့် Database များကို ကျွမ်းကျင်အောင် သင်ယူပါ။\",\"url\":\"https://takkatho.dev\",\"inLanguage\":[\"my\",\"en\"],\"potentialAction\":[{\"@type\":\"SearchAction\",\"target\":{\"@type\":\"EntryPoint\",\"urlTemplate\":\"https://takkatho.dev/courses?q={search_term_string}\"},\"query-input\":\"required name=search_term_string\"}],\"publisher\":{\"@type\":\"Organization\",\"name\":\"Takkatho\",\"url\":\"https://takkatho.dev\",\"logo\":\"https://takkatho.dev/android-chrome-512x512.png\"},\"mainEntity\":{\"@type\":\"ItemList\",\"name\":\"Popular Programming Courses\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"url\":\"https://takkatho.dev/advanced-typescript/\",\"name\":\"Advanced TypeScript Course\"},{\"@type\":\"ListItem\",\"position\":2,\"url\":\"https://takkatho.dev/websocket/\",\"name\":\"WebSocket Technology Course\"},{\"@type\":\"ListItem\",\"position\":3,\"url\":\"https://takkatho.dev/git-course/\",\"name\":\"Git Version Control Course\"},{\"@type\":\"ListItem\",\"position\":4,\"url\":\"https://takkatho.dev/web-performance/\",\"name\":\"Web Performance Course\"}]}}"},{"tag":"script","attrs":{"type":"application/ld+json"},"content":"{\"@context\":\"https://schema.org\",\"@type\":\"BreadcrumbList\",\"itemListElement\":[{\"@type\":\"ListItem\",\"position\":1,\"name\":\"Home\",\"item\":\"https://takkatho.dev\"},{\"@type\":\"ListItem\",\"position\":2,\"name\":\"Programming Courses\",\"item\":\"https://takkatho.dev/courses\"}]}"}],"lastUpdated":false,"pagination":true,"favicon":{"href":"/favicon.svg","type":"image/svg+xml"},"titleDelimiter":"|","credits":false,"title":{"en":"တက္ကသိုလ် (Takkatho) - Myanmar Programming Learning Platform"},"isMultilingual":false,"defaultLocale":{"label":"English","lang":"en","dir":"ltr"}};

const project = {"build":{"format":"directory"},"root":"file:///Users/waiyanphyoaung/code/waiyanphyoaung/","srcDir":"file:///Users/waiyanphyoaung/code/waiyanphyoaung/src/","trailingSlash":"ignore"};

const pluginTranslations = {};

function builtinI18nSchema() {
  return starlightI18nSchema().required().strict().merge(pagefindI18nSchema()).merge(expressiveCodeI18nSchema());
}
function starlightI18nSchema() {
  return z.object({
    "skipLink.label": z.string().describe(
      "Text displayed in the accessible “Skip link” when a keyboard user first tabs into a page."
    ),
    "search.label": z.string().describe("Text displayed in the search bar."),
    "search.ctrlKey": z.string().describe(
      "Visible representation of the Control key potentially used in the shortcut key to open the search modal."
    ),
    "search.cancelLabel": z.string().describe("Text for the “Cancel” button that closes the search modal."),
    "search.devWarning": z.string().describe("Warning displayed when opening the Search in a dev environment."),
    "themeSelect.accessibleLabel": z.string().describe("Accessible label for the theme selection dropdown."),
    "themeSelect.dark": z.string().describe("Name of the dark color theme."),
    "themeSelect.light": z.string().describe("Name of the light color theme."),
    "themeSelect.auto": z.string().describe("Name of the automatic color theme that syncs with system preferences."),
    "languageSelect.accessibleLabel": z.string().describe("Accessible label for the language selection dropdown."),
    "menuButton.accessibleLabel": z.string().describe("Accessible label for the mobile menu button."),
    "sidebarNav.accessibleLabel": z.string().describe(
      "Accessible label for the main sidebar `<nav>` element to distinguish it from other `<nav>` landmarks on the page."
    ),
    "tableOfContents.onThisPage": z.string().describe("Title for the table of contents component."),
    "tableOfContents.overview": z.string().describe(
      "Label used for the first link in the table of contents, linking to the page title."
    ),
    "i18n.untranslatedContent": z.string().describe(
      "Notice informing users they are on a page that is not yet translated to their language."
    ),
    "page.editLink": z.string().describe("Text for the link to edit a page."),
    "page.lastUpdated": z.string().describe("Text displayed in front of the last updated date in the page footer."),
    "page.previousLink": z.string().describe("Label shown on the “previous page” pagination arrow in the page footer."),
    "page.nextLink": z.string().describe("Label shown on the “next page” pagination arrow in the page footer."),
    "page.draft": z.string().describe(
      "Development-only notice informing users they are on a page that is a draft which will not be included in production builds."
    ),
    "404.text": z.string().describe("Text shown on Starlight’s default 404 page"),
    "aside.tip": z.string().describe("Text shown on the tip aside variant"),
    "aside.note": z.string().describe("Text shown on the note aside variant"),
    "aside.caution": z.string().describe("Text shown on the warning aside variant"),
    "aside.danger": z.string().describe("Text shown on the danger aside variant"),
    "fileTree.directory": z.string().describe("Label for the directory icon in the file tree component."),
    "builtWithStarlight.label": z.string().describe(
      "Label for the “Built with Starlight” badge optionally displayed in the site footer."
    ),
    "heading.anchorLabel": z.string().describe("Label for anchor links in Markdown content.")
  }).partial();
}
function pagefindI18nSchema() {
  return z.object({
    "pagefind.clear_search": z.string().describe(
      'Pagefind UI translation. English default value: `"Clear"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.load_more": z.string().describe(
      'Pagefind UI translation. English default value: `"Load more results"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.search_label": z.string().describe(
      'Pagefind UI translation. English default value: `"Search this site"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.filters_label": z.string().describe(
      'Pagefind UI translation. English default value: `"Filters"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.zero_results": z.string().describe(
      'Pagefind UI translation. English default value: `"No results for [SEARCH_TERM]"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.many_results": z.string().describe(
      'Pagefind UI translation. English default value: `"[COUNT] results for [SEARCH_TERM]"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.one_result": z.string().describe(
      'Pagefind UI translation. English default value: `"[COUNT] result for [SEARCH_TERM]"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.alt_search": z.string().describe(
      'Pagefind UI translation. English default value: `"No results for [SEARCH_TERM]. Showing results for [DIFFERENT_TERM] instead"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.search_suggestion": z.string().describe(
      'Pagefind UI translation. English default value: `"No results for [SEARCH_TERM]. Try one of the following searches:"`. See https://pagefind.app/docs/ui/#translations'
    ),
    "pagefind.searching": z.string().describe(
      'Pagefind UI translation. English default value: `"Searching for [SEARCH_TERM]..."`. See https://pagefind.app/docs/ui/#translations'
    )
  }).partial();
}
function expressiveCodeI18nSchema() {
  return z.object({
    "expressiveCode.copyButtonCopied": z.string().describe('Expressive Code UI translation. English default value: `"Copied!"`'),
    "expressiveCode.copyButtonTooltip": z.string().describe('Expressive Code UI translation. English default value: `"Copy to clipboard"`'),
    "expressiveCode.terminalWindowFallbackTitle": z.string().describe('Expressive Code UI translation. English default value: `"Terminal window"`')
  }).partial();
}

const cs = {
  "skipLink.label": "Přeskočit na obsah",
  "search.label": "Hledat",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "Zrušit",
  "search.devWarning": "Vyhledávání je dostupné pouze v produkčních sestaveních. \nZkuste sestavit a zobrazit náhled webu a otestovat jej lokálně.",
  "themeSelect.accessibleLabel": "Vyberte motiv",
  "themeSelect.dark": "Tmavý",
  "themeSelect.light": "Světlý",
  "themeSelect.auto": "Auto",
  "languageSelect.accessibleLabel": "Vyberte jazyk",
  "menuButton.accessibleLabel": "Nabídka",
  "sidebarNav.accessibleLabel": "Hlavní",
  "tableOfContents.onThisPage": "Na této stránce",
  "tableOfContents.overview": "Přehled",
  "i18n.untranslatedContent": "Tento obsah zatím není dostupný ve vašem jazyce.",
  "page.editLink": "Upravit stránku",
  "page.lastUpdated": "Poslední aktualizace:",
  "page.previousLink": "Předchozí",
  "page.nextLink": "Další",
  "page.draft": "Tento obsah je koncept a nebude zahrnutý v produkčním sestavení.",
  "404.text": "Stránka nenalezena. Zkontrolujte adresu nebo zkuste použít vyhledávač",
  "aside.note": "Poznámka",
  "aside.tip": "Tip",
  "aside.caution": "Upozornění",
  "aside.danger": "Nebezpečí",
  "fileTree.directory": "Adresář",
  "builtWithStarlight.label": "Postavené s Starlight",
  "expressiveCode.copyButtonCopied": "Zkopírováno!",
  "expressiveCode.copyButtonTooltip": "Kopíruj do schránky",
  "expressiveCode.terminalWindowFallbackTitle": "Terminál",
  "pagefind.clear_search": "Vyčistit",
  "pagefind.load_more": "Načíst další výsledky",
  "pagefind.search_label": "Vyhledat stránku",
  "pagefind.filters_label": "Filtry",
  "pagefind.zero_results": "Žádný výsledek pro: [SEARCH_TERM]",
  "pagefind.many_results": "počet výsledků: [COUNT] pro: [SEARCH_TERM]",
  "pagefind.one_result": "[COUNT] výsledek pro: [SEARCH_TERM]",
  "pagefind.alt_search": "Žádné výsledky pro [SEARCH_TERM]. Namísto toho zobrazuji výsledky pro: [DIFFERENT_TERM]",
  "pagefind.search_suggestion": "Žádný výsledek pro [SEARCH_TERM]. Zkus nějaké z těchto hledání:",
  "pagefind.searching": "Hledám [SEARCH_TERM]...",
  "heading.anchorLabel": "Section titled “{{title}}”",
};

const en = {
  "skipLink.label": "Skip to content",
  "search.label": "Search",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "Cancel",
  "search.devWarning": "Search is only available in production builds. \nTry building and previewing the site to test it out locally.",
  "themeSelect.accessibleLabel": "Select theme",
  "themeSelect.dark": "Dark",
  "themeSelect.light": "Light",
  "themeSelect.auto": "Auto",
  "languageSelect.accessibleLabel": "Select language",
  "menuButton.accessibleLabel": "Menu",
  "sidebarNav.accessibleLabel": "Main",
  "tableOfContents.onThisPage": "On this page",
  "tableOfContents.overview": "Overview",
  "i18n.untranslatedContent": "This content is not available in your language yet.",
  "page.editLink": "Edit page",
  "page.lastUpdated": "Last updated:",
  "page.previousLink": "Previous",
  "page.nextLink": "Next",
  "page.draft": "This content is a draft and will not be included in production builds.",
  "404.text": "Page not found. Check the URL or try using the search bar.",
  "aside.note": "Note",
  "aside.tip": "Tip",
  "aside.caution": "Caution",
  "aside.danger": "Danger",
  "fileTree.directory": "Directory",
  "builtWithStarlight.label": "Built with Starlight",
  "heading.anchorLabel": "Section titled “{{title}}”",
};

const es = {
  "skipLink.label": "Ir al contenido",
  "search.label": "Buscar",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "Cancelar",
  "search.devWarning": "La búsqueda solo está disponible en las versiones de producción.  \nIntenta construir y previsualizar el sitio para probarlo localmente.",
  "themeSelect.accessibleLabel": "Seleccionar tema",
  "themeSelect.dark": "Oscuro",
  "themeSelect.light": "Claro",
  "themeSelect.auto": "Automático",
  "languageSelect.accessibleLabel": "Seleccionar idioma",
  "menuButton.accessibleLabel": "Menú",
  "sidebarNav.accessibleLabel": "Primario",
  "tableOfContents.onThisPage": "En esta página",
  "tableOfContents.overview": "Sinopsis",
  "i18n.untranslatedContent": "Esta página aún no está disponible en tu idioma.",
  "page.editLink": "Edita esta página",
  "page.lastUpdated": "Última actualización:",
  "page.previousLink": "Página anterior",
  "page.nextLink": "Siguiente página",
  "page.draft": "Este contenido es un borrador y no se incluirá en las versiones de producción.",
  "404.text": "Página no encontrada. Verifica la URL o intenta usar la barra de búsqueda.",
  "aside.note": "Nota",
  "aside.tip": "Consejo",
  "aside.caution": "Precaución",
  "aside.danger": "Peligro",
  "expressiveCode.copyButtonCopied": "¡Copiado!",
  "expressiveCode.copyButtonTooltip": "Copiar al portapapeles",
  "expressiveCode.terminalWindowFallbackTitle": "Ventana de terminal",
  "fileTree.directory": "Directorio",
  "builtWithStarlight.label": "Hecho con Starlight",
  "pagefind.clear_search": "Limpiar",
  "pagefind.load_more": "Cargar más resultados",
  "pagefind.search_label": "Buscar página",
  "pagefind.filters_label": "Filtros",
  "pagefind.zero_results": "Ningún resultado para: [SEARCH_TERM]",
  "pagefind.many_results": "[COUNT] resultados para: [SEARCH_TERM]",
  "pagefind.one_result": "[COUNT] resultado para: [SEARCH_TERM]",
  "pagefind.alt_search": "Ningún resultado para [SEARCH_TERM]. Mostrando resultados para: [DIFFERENT_TERM]",
  "pagefind.search_suggestion": "Ningún resultado para [SEARCH_TERM]. Prueba alguna de estas búsquedas:",
  "pagefind.searching": "Buscando [SEARCH_TERM]...",
  "heading.anchorLabel": "Sección titulada «{{title}}»",
};

const ca = {
  "skipLink.label": "Saltar al contingut",
  "search.label": "Cercar",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "Cancel·lar",
  "search.devWarning": "La cerca només està disponible a les versions de producció.  \nProva de construir i previsualitzar el lloc per provar-ho localment.",
  "themeSelect.accessibleLabel": "Seleccionar tema",
  "themeSelect.dark": "Fosc",
  "themeSelect.light": "Clar",
  "themeSelect.auto": "Automàtic",
  "languageSelect.accessibleLabel": "Seleccionar idioma",
  "menuButton.accessibleLabel": "Menú",
  "sidebarNav.accessibleLabel": "Primari",
  "tableOfContents.onThisPage": "En aquesta pàgina",
  "tableOfContents.overview": "Sinopsi",
  "i18n.untranslatedContent": "Aquesta pàgina encara no està disponible en el teu idioma.",
  "page.editLink": "Edita aquesta pàgina",
  "page.lastUpdated": "Última actualització:",
  "page.previousLink": "Pàgina anterior",
  "page.nextLink": "Pàgina següent",
  "page.draft": "Aquest contingut és un esborrany i no s'inclourà en les versions de producció.",
  "404.text": "Pàgina no trobada. Comprova la URL o intenta utilitzar la barra de cerca.",
  "aside.note": "Nota",
  "aside.tip": "Consell",
  "aside.caution": "Precaució",
  "aside.danger": "Perill",
  "expressiveCode.copyButtonCopied": "Copiat!",
  "expressiveCode.copyButtonTooltip": "Copiar al porta-retalls",
  "expressiveCode.terminalWindowFallbackTitle": "Finestra del terminal",
  "fileTree.directory": "Directori",
  "builtWithStarlight.label": "Fet amb Starlight",
  "pagefind.clear_search": "Netejar",
  "pagefind.load_more": "Carregar més resultats",
  "pagefind.search_label": "Cercar pàgina",
  "pagefind.filters_label": "Filtres",
  "pagefind.zero_results": "Cap resultat per a: [SEARCH_TERM]",
  "pagefind.many_results": "[COUNT] resultats per a: [SEARCH_TERM]",
  "pagefind.one_result": "[COUNT] resultat per a: [SEARCH_TERM]",
  "pagefind.alt_search": "Cap resultat per a [SEARCH_TERM]. Mostrant resultats per a: [DIFFERENT_TERM]",
  "pagefind.search_suggestion": "Cap resultat per a [SEARCH_TERM]. Prova alguna d’aquestes cerques:",
  "pagefind.searching": "Cercant [SEARCH_TERM]...",
  "heading.anchorLabel": "Section titled “{{title}}”",
};

const de = {
  "skipLink.label": "Zum Inhalt springen",
  "search.label": "Suchen",
  "search.ctrlKey": "Strg",
  "search.cancelLabel": "Abbrechen",
  "search.devWarning": "Die Suche ist nur in Produktions-Builds verfügbar. \nVersuche, die Website zu bauen und in der Vorschau anzusehen, um sie lokal zu testen.",
  "themeSelect.accessibleLabel": "Farbschema wählen",
  "themeSelect.dark": "Dunkel",
  "themeSelect.light": "Hell",
  "themeSelect.auto": "System",
  "languageSelect.accessibleLabel": "Sprache wählen",
  "menuButton.accessibleLabel": "Menü",
  "sidebarNav.accessibleLabel": "Hauptnavigation",
  "tableOfContents.onThisPage": "Auf dieser Seite",
  "tableOfContents.overview": "Überblick",
  "i18n.untranslatedContent": "Dieser Inhalt ist noch nicht in deiner Sprache verfügbar.",
  "page.editLink": "Seite bearbeiten",
  "page.lastUpdated": "Zuletzt aktualisiert:",
  "page.previousLink": "Vorherige Seite",
  "page.nextLink": "Nächste Seite",
  "page.draft": "Dieser Inhalt ist ein Entwurf und wird nicht in den Produktions-Builds enthalten sein.",
  "404.text": "Seite nicht gefunden. Überprüfe die URL oder nutze die Suchleiste.",
  "aside.note": "Hinweis",
  "aside.tip": "Tipp",
  "aside.caution": "Achtung",
  "aside.danger": "Gefahr",
  "fileTree.directory": "Ordner",
  "builtWithStarlight.label": "Erstellt mit Starlight",
  "heading.anchorLabel": "Abschnitt betitelt „{{title}}“",
};

const ja = {
  "skipLink.label": "コンテンツにスキップ",
  "search.label": "検索",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "キャンセル",
  "search.devWarning": "検索はプロダクションビルドでのみ利用可能です。\nローカルでテストするには、サイトをビルドしてプレビューしてください。",
  "themeSelect.accessibleLabel": "テーマの選択",
  "themeSelect.dark": "ダーク",
  "themeSelect.light": "ライト",
  "themeSelect.auto": "自動",
  "languageSelect.accessibleLabel": "言語の選択",
  "menuButton.accessibleLabel": "メニュー",
  "sidebarNav.accessibleLabel": "メイン",
  "tableOfContents.onThisPage": "目次",
  "tableOfContents.overview": "概要",
  "i18n.untranslatedContent": "このコンテンツはまだ日本語訳がありません。",
  "page.editLink": "ページを編集",
  "page.lastUpdated": "最終更新日:",
  "page.previousLink": "前へ",
  "page.nextLink": "次へ",
  "page.draft": "このコンテンツは下書きです。プロダクションビルドには含まれません。",
  "404.text": "ページが見つかりません。 URL を確認するか、検索バーを使用してみてください。",
  "aside.note": "ノート",
  "aside.tip": "ヒント",
  "aside.caution": "注意",
  "aside.danger": "危険",
  "fileTree.directory": "ディレクトリ",
  "builtWithStarlight.label": "Starlightで作成",
  "heading.anchorLabel": "Section titled “{{title}}”",
};

const pt = {
  "skipLink.label": "Pular para o conteúdo",
  "search.label": "Pesquisar",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "Cancelar",
  "search.devWarning": "A pesquisa está disponível apenas em builds em produção. \nTente fazer a build e pré-visualize o site para testar localmente.",
  "themeSelect.accessibleLabel": "Selecionar tema",
  "themeSelect.dark": "Escuro",
  "themeSelect.light": "Claro",
  "themeSelect.auto": "Auto",
  "languageSelect.accessibleLabel": "Selecionar língua",
  "menuButton.accessibleLabel": "Menu",
  "sidebarNav.accessibleLabel": "Principal",
  "tableOfContents.onThisPage": "Nesta página",
  "tableOfContents.overview": "Visão geral",
  "i18n.untranslatedContent": "Este conteúdo não está disponível em sua língua ainda.",
  "page.editLink": "Editar página",
  "page.lastUpdated": "Última atualização:",
  "page.previousLink": "Anterior",
  "page.nextLink": "Próximo",
  "page.draft": "Esse conteúdo é um rascunho e não será incluído em builds de produção.",
  "404.text": "Página não encontrada. Verifique o URL ou tente usar a barra de pesquisa.",
  "aside.note": "Nota",
  "aside.tip": "Dica",
  "aside.caution": "Cuidado",
  "aside.danger": "Perigo",
  "fileTree.directory": "Directory",
  "builtWithStarlight.label": "Feito com Starlight",
  "heading.anchorLabel": "Seção intitulada “{{title}}”",
};

const fa = {
  "skipLink.label": "رفتن به محتوا",
  "search.label": "جستجو",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "لغو",
  "search.devWarning": "جستجو تنها در نسخه‌های تولیدی در دسترس است. \nسعی کنید سایت را بسازید و پیش‌نمایش آن را به صورت محلی آزمایش کنید.",
  "themeSelect.accessibleLabel": "انتخاب پوسته",
  "themeSelect.dark": "تیره",
  "themeSelect.light": "روشن",
  "themeSelect.auto": "خودکار",
  "languageSelect.accessibleLabel": "انتخاب زبان",
  "menuButton.accessibleLabel": "منو",
  "sidebarNav.accessibleLabel": "اصلی",
  "tableOfContents.onThisPage": "در این صفحه",
  "tableOfContents.overview": "نگاه کلی",
  "i18n.untranslatedContent": "این محتوا هنوز به زبان شما در دسترس نیست.",
  "page.editLink": "ویرایش صفحه",
  "page.lastUpdated": "آخرین به‌روزرسانی:",
  "page.previousLink": "قبلی",
  "page.nextLink": "بعدی",
  "page.draft": "This content is a draft and will not be included in production builds.",
  "404.text": "صفحه یافت نشد. لطفاً URL را بررسی کنید یا از جستجو استفاده نمایید.",
  "aside.note": "یادداشت",
  "aside.tip": "نکته",
  "aside.caution": "احتیاط",
  "aside.danger": "خطر",
  "fileTree.directory": "فهرست",
  "builtWithStarlight.label": "Built with Starlight",
  "heading.anchorLabel": "Section titled “{{title}}”",
};

const fi = {
  "skipLink.label": "Siirry sisältöön",
  "search.label": "Haku",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "Peruuta",
  "search.devWarning": "Haku on käytettävissä vain tuotantoversioissa.\nKokeile kääntää ja esikatsella sivustoa paikallisesti testataksesi sitä.",
  "themeSelect.accessibleLabel": "Valitse teema",
  "themeSelect.dark": "Tumma",
  "themeSelect.light": "Vaalea",
  "themeSelect.auto": "Automaattinen",
  "languageSelect.accessibleLabel": "Valitse kieli",
  "menuButton.accessibleLabel": "Valikko",
  "sidebarNav.accessibleLabel": "Päävalikko",
  "tableOfContents.onThisPage": "Tällä sivulla",
  "tableOfContents.overview": "Yleiskatsaus",
  "i18n.untranslatedContent": "Tämä sisältö ei ole vielä saatavilla valitsemallasi kielellä.",
  "page.editLink": "Muokkaa sivua",
  "page.lastUpdated": "Viimeksi päivitetty:",
  "page.previousLink": "Edellinen",
  "page.nextLink": "Seuraava",
  "page.draft": "Tämä sisältö on luonnos eikä sitä sisällytetä tuotantoversioon.",
  "404.text": "Sivua ei löytynyt. Tarkista URL-osoite tai käytä hakupalkkia.",
  "aside.note": "Huomio",
  "aside.tip": "Vinkki",
  "aside.caution": "Varoitus",
  "aside.danger": "Vaara",
  "fileTree.directory": "Hakemisto",
  "builtWithStarlight.label": "Rakennettu Starlightilla",
  "heading.anchorLabel": "Osio nimeltä “{{title}}”",
};

const fr = {
  "skipLink.label": "Aller au contenu",
  "search.label": "Rechercher",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "Annuler",
  "search.devWarning": "La recherche est disponible uniquement en mode production. \nEssayez de construire puis de prévisualiser votre site pour tester la recherche localement.",
  "themeSelect.accessibleLabel": "Selectionner le thème",
  "themeSelect.dark": "Sombre",
  "themeSelect.light": "Clair",
  "themeSelect.auto": "Auto",
  "languageSelect.accessibleLabel": "Selectionner la langue",
  "menuButton.accessibleLabel": "Menu",
  "sidebarNav.accessibleLabel": "principale",
  "tableOfContents.onThisPage": "Sur cette page",
  "tableOfContents.overview": "Vue d’ensemble",
  "i18n.untranslatedContent": "Ce contenu n’est pas encore disponible dans votre langue.",
  "page.editLink": "Modifier cette page",
  "page.lastUpdated": "Dernière mise à jour :",
  "page.previousLink": "Précédent",
  "page.nextLink": "Suivant",
  "page.draft": "Ce contenu est une ébauche et ne sera pas inclus dans la version de production.",
  "404.text": "Page non trouvée. Vérifiez l’URL ou essayez d’utiliser la barre de recherche.",
  "aside.note": "Note",
  "aside.tip": "Astuce",
  "aside.caution": "Attention",
  "aside.danger": "Danger",
  "expressiveCode.copyButtonCopied": "Copié !",
  "expressiveCode.copyButtonTooltip": "Copier dans le presse-papiers",
  "expressiveCode.terminalWindowFallbackTitle": "Fenêtre de terminal",
  "fileTree.directory": "Répertoire",
  "builtWithStarlight.label": "Créé avec Starlight",
  "heading.anchorLabel": "Section intitulée « {{title}} »",
};

const gl = {
  "skipLink.label": "Ir ao contido",
  "search.label": "Busca",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "Deixar",
  "search.devWarning": "A busca só está dispoñible nas versións de producción. \nTrata de construir e ollear o sitio para probalo localmente.",
  "themeSelect.accessibleLabel": "Selecciona tema",
  "themeSelect.dark": "Escuro",
  "themeSelect.light": "Claro",
  "themeSelect.auto": "Auto",
  "languageSelect.accessibleLabel": "Seleciona linguaxe",
  "menuButton.accessibleLabel": "Menú",
  "sidebarNav.accessibleLabel": "Principal",
  "tableOfContents.onThisPage": "Nesta páxina",
  "tableOfContents.overview": "Sinopse",
  "i18n.untranslatedContent": "Este contido aínda non está dispoñible no teu idioma.",
  "page.editLink": "Editar páxina",
  "page.lastUpdated": "Última actualización:",
  "page.previousLink": "Anterior",
  "page.nextLink": "Seguinte",
  "page.draft": "Este contido é un borrador e non se incluirá nas versións de producción.",
  "404.text": "Páxina non atopada. Comproba a URL ou intenta usar a barra de busca.",
  "aside.note": "Nota",
  "aside.tip": "Consello",
  "aside.caution": "Precaución",
  "aside.danger": "Perigo",
  "expressiveCode.copyButtonCopied": "¡Copiado!",
  "expressiveCode.copyButtonTooltip": "Copiar ao portapapeis",
  "expressiveCode.terminalWindowFallbackTitle": "Fiestra do terminal",
  "fileTree.directory": "Directorio",
  "builtWithStarlight.label": "Feito con Starlight",
  "pagefind.clear_search": "Limpar",
  "pagefind.load_more": "Cargar máis resultados",
  "pagefind.search_label": "Buscar páxina",
  "pagefind.filters_label": "Filtros",
  "pagefind.zero_results": "Ningún resultado para: [SEARCH_TERM]",
  "pagefind.many_results": "[COUNT] resultados para: [SEARCH_TERM]",
  "pagefind.one_result": "[COUNT] resultado para: [SEARCH_TERM]",
  "pagefind.alt_search": "Ningún resultado para [SEARCH_TERM]. Amósanse resultados para: [DIFFERENT_TERM]",
  "pagefind.search_suggestion": "Ningún resultado para [SEARCH_TERM]. Proba algunha destas buscas:",
  "pagefind.searching": "Buscando [SEARCH_TERM]...",
  "heading.anchorLabel": "Sección titulada «{{title}}»",
};

const he = {
  "skipLink.label": "דלגו לתוכן",
  "search.label": "חיפוש",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "ביטול",
  "search.devWarning": "החיפוש זמין רק בסביבת ייצור. \nנסו לבנות ולהציג תצוגה מקדימה של האתר כדי לבדוק אותו באופן מקומי.",
  "themeSelect.accessibleLabel": "בחרו פרופיל צבע",
  "themeSelect.dark": "כהה",
  "themeSelect.light": "בהיר",
  "themeSelect.auto": "מערכת",
  "languageSelect.accessibleLabel": "בחרו שפה",
  "menuButton.accessibleLabel": "תפריט",
  "sidebarNav.accessibleLabel": "ראשי",
  "tableOfContents.onThisPage": "בדף זה",
  "tableOfContents.overview": "סקירה כללית",
  "i18n.untranslatedContent": "תוכן זה אינו זמין עדיין בשפה שלך.",
  "page.editLink": "ערכו דף",
  "page.lastUpdated": "עדכון אחרון:",
  "page.previousLink": "הקודם",
  "page.nextLink": "הבא",
  "page.draft": "This content is a draft and will not be included in production builds.",
  "404.text": "הדף לא נמצא. אנא בדקו את כתובת האתר או נסו להשתמש בסרגל החיפוש.",
  "aside.note": "Note",
  "aside.tip": "Tip",
  "aside.caution": "Caution",
  "aside.danger": "Danger",
  "fileTree.directory": "Directory",
  "builtWithStarlight.label": "Built with Starlight",
  "heading.anchorLabel": "Section titled “{{title}}”",
};

const id = {
  "skipLink.label": "Lewati ke konten",
  "search.label": "Pencarian",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "Batal",
  "search.devWarning": "Pencarian hanya tersedia pada build produksi. \nLakukan proses build dan pratinjau situs Anda sebelum mencoba di lingkungan lokal.",
  "themeSelect.accessibleLabel": "Pilih tema",
  "themeSelect.dark": "Gelap",
  "themeSelect.light": "Terang",
  "themeSelect.auto": "Otomatis",
  "languageSelect.accessibleLabel": "Pilih Bahasa",
  "menuButton.accessibleLabel": "Menu",
  "sidebarNav.accessibleLabel": "Utama",
  "tableOfContents.onThisPage": "Di halaman ini",
  "tableOfContents.overview": "Ringkasan",
  "i18n.untranslatedContent": "Konten ini belum tersedia dalam bahasa Anda.",
  "page.editLink": "Edit halaman",
  "page.lastUpdated": "Terakhir diperbaharui:",
  "page.previousLink": "Sebelumnya",
  "page.nextLink": "Selanjutnya",
  "page.draft": "This content is a draft and will not be included in production builds.",
  "404.text": "Halaman tidak ditemukan. Cek kembali kolom URL atau gunakan fitur pencarian.",
  "aside.note": "Catatan",
  "aside.tip": "Tips",
  "aside.caution": "Perhatian",
  "aside.danger": "Bahaya",
  "fileTree.directory": "Directory",
  "builtWithStarlight.label": "Built with Starlight",
  "heading.anchorLabel": "Section titled “{{title}}”",
};

const it = {
  "skipLink.label": "Salta ai contenuti",
  "search.label": "Cerca",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "Cancella",
  "search.devWarning": "La ricerca è disponibile solo nelle build di produzione. \nProvare ad eseguire il processo di build e visualizzare la preview del sito per testarlo localmente.",
  "themeSelect.accessibleLabel": "Seleziona tema",
  "themeSelect.dark": "Scuro",
  "themeSelect.light": "Chiaro",
  "themeSelect.auto": "Auto",
  "languageSelect.accessibleLabel": "Seleziona lingua",
  "menuButton.accessibleLabel": "Menu",
  "sidebarNav.accessibleLabel": "Principale",
  "tableOfContents.onThisPage": "In questa pagina",
  "tableOfContents.overview": "Panoramica",
  "i18n.untranslatedContent": "Questi contenuti non sono ancora disponibili nella tua lingua.",
  "page.editLink": "Modifica pagina",
  "page.lastUpdated": "Ultimo aggiornamento:",
  "page.previousLink": "Indietro",
  "page.nextLink": "Avanti",
  "page.draft": "This content is a draft and will not be included in production builds.",
  "404.text": "Pagina non trovata. Verifica l'URL o prova a utilizzare la barra di ricerca.",
  "aside.note": "Nota",
  "aside.tip": "Consiglio",
  "aside.caution": "Attenzione",
  "aside.danger": "Pericolo",
  "fileTree.directory": "Directory",
  "builtWithStarlight.label": "Built with Starlight",
  "heading.anchorLabel": "Sezione intitolata “{{title}}”",
};

const nl = {
  "skipLink.label": "Ga naar inhoud",
  "search.label": "Zoeken",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "Annuleren",
  "search.devWarning": "Zoeken is alleen beschikbaar tijdens productie. \nProbeer om de site te builden en er een preview van te bekijken om lokaal te testen.",
  "themeSelect.accessibleLabel": "Selecteer thema",
  "themeSelect.dark": "Donker",
  "themeSelect.light": "Licht",
  "themeSelect.auto": "Auto",
  "languageSelect.accessibleLabel": "Selecteer taal",
  "menuButton.accessibleLabel": "Menu",
  "sidebarNav.accessibleLabel": "Hoofdnavigatie",
  "tableOfContents.onThisPage": "Op deze pagina",
  "tableOfContents.overview": "Overzicht",
  "i18n.untranslatedContent": "Deze inhoud is nog niet vertaald.",
  "page.editLink": "Bewerk pagina",
  "page.lastUpdated": "Laatst bewerkt:",
  "page.previousLink": "Vorige",
  "page.nextLink": "Volgende",
  "page.draft": "This content is a draft and will not be included in production builds.",
  "404.text": "Pagina niet gevonden. Controleer de URL of probeer de zoekbalk.",
  "aside.note": "Opmerking",
  "aside.tip": "Tip",
  "aside.caution": "Opgepast",
  "aside.danger": "Gevaar",
  "fileTree.directory": "Directory",
  "builtWithStarlight.label": "Built with Starlight",
  "heading.anchorLabel": "Section titled “{{title}}”",
};

const da = {
  "skipLink.label": "Gå til indhold",
  "search.label": "Søg",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "Annuller",
  "search.devWarning": "Søgning er kun tilgængeligt i produktions versioner. \nPrøv at bygge siden og forhåndsvis den for at teste det lokalt.",
  "themeSelect.accessibleLabel": "Vælg tema",
  "themeSelect.dark": "Mørk",
  "themeSelect.light": "Lys",
  "themeSelect.auto": "Auto",
  "languageSelect.accessibleLabel": "Vælg sprog",
  "menuButton.accessibleLabel": "Menu",
  "sidebarNav.accessibleLabel": "Hovednavigation",
  "tableOfContents.onThisPage": "På denne side",
  "tableOfContents.overview": "Oversigt",
  "i18n.untranslatedContent": "Dette indhold er ikke tilgængeligt i dit sprog endnu.",
  "page.editLink": "Rediger siden",
  "page.lastUpdated": "Sidst opdateret:",
  "page.previousLink": "Forrige",
  "page.nextLink": "Næste",
  "page.draft": "Indholdet er en kladde og vil ikke blive inkluderet i produktions versioner.",
  "404.text": "Siden er ikke fundet. Tjek din URL eller prøv søgelinjen.",
  "aside.note": "Note",
  "aside.tip": "Tip",
  "aside.caution": "Bemærk",
  "aside.danger": "Advarsel",
  "fileTree.directory": "Mappe",
  "builtWithStarlight.label": "Bygget med Starlight",
  "heading.anchorLabel": "Sektion kaldt “{{title}}”",
};

const tr = {
  "skipLink.label": "İçeriğe geç",
  "search.label": "Ara",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "İptal",
  "search.devWarning": "Arama yalnızca üretim derlemelerinde kullanılabilir. \nYerel bilgisayarınızda test etmek için siteyi derleyin ve önizleme yapın.",
  "themeSelect.accessibleLabel": "Tema seç",
  "themeSelect.dark": "Koyu",
  "themeSelect.light": "Açık",
  "themeSelect.auto": "Otomatik",
  "languageSelect.accessibleLabel": "Dil seçin",
  "menuButton.accessibleLabel": "Menü",
  "sidebarNav.accessibleLabel": "Ana",
  "tableOfContents.onThisPage": "Sayfa içeriği",
  "tableOfContents.overview": "Genel bakış",
  "i18n.untranslatedContent": "Bu içerik henüz dilinizde mevcut değil.",
  "page.editLink": "Sayfayı düzenle",
  "page.lastUpdated": "Son güncelleme:",
  "page.previousLink": "Önceki",
  "page.nextLink": "Sonraki",
  "page.draft": "Bu içerik taslaktır ve canlı sürümde bulunmayacaktır.",
  "404.text": "Sayfa bulunamadı. URL'i kontrol edin ya da arama çubuğunu kullanmayı deneyin.",
  "aside.note": "Not",
  "aside.tip": "İpucu",
  "aside.caution": "Dikkat",
  "aside.danger": "Tehlike",
  "fileTree.directory": "Dizin",
  "builtWithStarlight.label": "Built with Starlight",
  "heading.anchorLabel": "Section titled “{{title}}”",
};

const ar = {
  "skipLink.label": "تخطَّ إلى المحتوى",
  "search.label": "ابحث",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "إلغاء",
  "search.devWarning": "البحث متوفر فقط في بنيات اﻹنتاج. \n جرب بناء المشروع ومعاينته على جهازك",
  "themeSelect.accessibleLabel": "اختر سمة",
  "themeSelect.dark": "داكن",
  "themeSelect.light": "فاتح",
  "themeSelect.auto": "تلقائي",
  "languageSelect.accessibleLabel": "اختر لغة",
  "menuButton.accessibleLabel": "القائمة",
  "sidebarNav.accessibleLabel": "الرئيسية",
  "tableOfContents.onThisPage": "على هذه الصفحة",
  "tableOfContents.overview": "نظرة عامة",
  "i18n.untranslatedContent": "هذا المحتوى غير متوفر بلغتك بعد.",
  "page.editLink": "عدل الصفحة",
  "page.lastUpdated": "آخر تحديث:",
  "page.previousLink": "السابق",
  "page.nextLink": "التالي",
  "page.draft": "هذا المحتوى مجرد مسودة ولن يظهر في بنيات الإنتاج",
  "404.text": "الصفحة غير موجودة. تأكد من الرابط أو ابحث بإستعمال شريط البحث.",
  "aside.note": "ملاحظة",
  "aside.tip": "نصيحة",
  "aside.caution": "تنبيه",
  "aside.danger": "تحذير",
  "fileTree.directory": "Directory",
  "builtWithStarlight.label": "طوِّر بواسطة Starlight",
  "heading.anchorLabel": "Section titled “{{title}}”",
};

const nb = {
  "skipLink.label": "Gå til innholdet",
  "search.label": "Søk",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "Avbryt",
  "search.devWarning": "Søk er bare tilgjengelig i produksjonsbygg. \nPrøv å bygg siden og forhåndsvis den for å teste det lokalt.",
  "themeSelect.accessibleLabel": "Velg tema",
  "themeSelect.dark": "Mørk",
  "themeSelect.light": "Lys",
  "themeSelect.auto": "Auto",
  "languageSelect.accessibleLabel": "Velg språk",
  "menuButton.accessibleLabel": "Meny",
  "sidebarNav.accessibleLabel": "Hovednavigasjon",
  "tableOfContents.onThisPage": "På denne siden",
  "tableOfContents.overview": "Oversikt",
  "i18n.untranslatedContent": "Dette innholdet er ikke tilgjengelig på ditt språk.",
  "page.editLink": "Rediger side",
  "page.lastUpdated": "Sist oppdatert:",
  "page.previousLink": "Forrige",
  "page.nextLink": "Neste",
  "page.draft": "This content is a draft and will not be included in production builds.",
  "404.text": "Siden ble ikke funnet. Sjekk URL-en eller prøv å bruke søkefeltet.",
  "aside.note": "Merknad",
  "aside.tip": "Tips",
  "aside.caution": "Advarsel",
  "aside.danger": "Fare",
  "fileTree.directory": "Mappe",
  "builtWithStarlight.label": "Laget med Starlight",
  "heading.anchorLabel": "Section titled “{{title}}”",
};

const zh = {
  "skipLink.label": "跳转到内容",
  "search.label": "搜索",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "取消",
  "search.devWarning": "搜索仅适用于生产版本。\n尝试构建并预览网站以在本地测试。",
  "themeSelect.accessibleLabel": "选择主题",
  "themeSelect.dark": "深色",
  "themeSelect.light": "浅色",
  "themeSelect.auto": "自动",
  "languageSelect.accessibleLabel": "选择语言",
  "menuButton.accessibleLabel": "菜单",
  "sidebarNav.accessibleLabel": "主要",
  "tableOfContents.onThisPage": "本页内容",
  "tableOfContents.overview": "概述",
  "i18n.untranslatedContent": "此内容尚不支持你的语言。",
  "page.editLink": "编辑此页",
  "page.lastUpdated": "最近更新：",
  "page.previousLink": "上一页",
  "page.nextLink": "下一页",
  "page.draft": "此内容为草稿，不会包含在生产版本中。",
  "404.text": "页面未找到。检查 URL 或尝试使用搜索栏。",
  "aside.note": "注意",
  "aside.tip": "提示",
  "aside.caution": "警告",
  "aside.danger": "危险",
  "fileTree.directory": "文件夹",
  "builtWithStarlight.label": "基于 Starlight 构建",
  "heading.anchorLabel": "Section titled “{{title}}”",
};

const ko = {
  "skipLink.label": "콘텐츠로 이동",
  "search.label": "검색",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "취소",
  "search.devWarning": "검색 기능은 프로덕션 빌드에서만 작동합니다. \n로컬에서 테스트하려면 사이트를 빌드하고 미리 보기를 실행하세요.",
  "themeSelect.accessibleLabel": "테마 선택",
  "themeSelect.dark": "어두운 테마",
  "themeSelect.light": "밝은 테마",
  "themeSelect.auto": "자동",
  "languageSelect.accessibleLabel": "언어 선택",
  "menuButton.accessibleLabel": "메뉴",
  "sidebarNav.accessibleLabel": "메인",
  "tableOfContents.onThisPage": "목차",
  "tableOfContents.overview": "개요",
  "i18n.untranslatedContent": "이 콘텐츠는 아직 번역되지 않았습니다.",
  "page.editLink": "페이지 편집",
  "page.lastUpdated": "마지막 업데이트:",
  "page.previousLink": "이전 페이지",
  "page.nextLink": "다음 페이지",
  "page.draft": "이 콘텐츠는 아직 초안 상태이며, 최종 빌드에는 포함되지 않습니다.",
  "404.text": "페이지를 찾을 수 없습니다. URL을 다시 확인해보거나 검색을 사용해보세요.",
  "aside.note": "참고",
  "aside.tip": "팁",
  "aside.caution": "주의",
  "aside.danger": "위험",
  "fileTree.directory": "디렉터리",
  "builtWithStarlight.label": "이 웹사이트는 Starlight로 제작되었습니다.",
  "heading.anchorLabel": "섹션 제목: “{{title}}”",
};

const sv = {
  "skipLink.label": "Hoppa till innehåll",
  "search.label": "Sök",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "Avbryt",
  "search.devWarning": "Sökfunktionen är endast tillgänglig i produktionsbyggen. \nProva att bygga och förhandsvisa siten för att testa det lokalt.",
  "themeSelect.accessibleLabel": "Välj tema",
  "themeSelect.dark": "Mörkt",
  "themeSelect.light": "Ljust",
  "themeSelect.auto": "Auto",
  "languageSelect.accessibleLabel": "Välj språk",
  "menuButton.accessibleLabel": "Meny",
  "sidebarNav.accessibleLabel": "Huvudmeny",
  "tableOfContents.onThisPage": "På den här sidan",
  "tableOfContents.overview": "Översikt",
  "i18n.untranslatedContent": "Det här innehållet är inte tillgängligt på ditt språk än.",
  "page.editLink": "Redigera sida",
  "page.lastUpdated": "Senast uppdaterad:",
  "page.previousLink": "Föregående",
  "page.nextLink": "Nästa",
  "page.draft": "This content is a draft and will not be included in production builds.",
  "404.text": "Sidan hittades inte. Kontrollera URL:n eller testa att använda sökfältet.",
  "aside.note": "Note",
  "aside.tip": "Tip",
  "aside.caution": "Caution",
  "aside.danger": "Danger",
  "fileTree.directory": "Directory",
  "builtWithStarlight.label": "Built with Starlight",
  "heading.anchorLabel": "Section titled “{{title}}”",
};

const ro = {
  "skipLink.label": "Sari la conținut",
  "search.label": "Caută",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "Anulează",
  "search.devWarning": "Căutarea este disponibilă numai în versiunea de producție. \nÎncercă să construiești și să previzualizezi site-ul pentru a-l testa local.",
  "themeSelect.accessibleLabel": "Selectează tema",
  "themeSelect.dark": "Întunecată",
  "themeSelect.light": "Deschisă",
  "themeSelect.auto": "Auto",
  "languageSelect.accessibleLabel": "Selectează limba",
  "menuButton.accessibleLabel": "Meniu",
  "sidebarNav.accessibleLabel": "Principal",
  "tableOfContents.onThisPage": "Pe această pagină",
  "tableOfContents.overview": "Sinopsis",
  "i18n.untranslatedContent": "Acest conținut nu este încă disponibil în limba selectată.",
  "page.editLink": "Editează pagina",
  "page.lastUpdated": "Ultima actualizare:",
  "page.previousLink": "Pagina precendentă",
  "page.nextLink": "Pagina următoare",
  "page.draft": "This content is a draft and will not be included in production builds.",
  "404.text": "Pagina nu a fost găsită. Verifică adresa URL sau încercă să folosești bara de căutare.",
  "aside.note": "Mențiune",
  "aside.tip": "Sfat",
  "aside.caution": "Atenție",
  "aside.danger": "Pericol",
  "fileTree.directory": "Directory",
  "builtWithStarlight.label": "Built with Starlight",
  "heading.anchorLabel": "Section titled “{{title}}”",
};

const ru = {
  "skipLink.label": "Перейти к содержимому",
  "search.label": "Поиск",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "Отменить",
  "search.devWarning": "Поиск доступен только в продакшен-сборках. \nВыполните сборку и запустите превью, чтобы протестировать поиск локально.",
  "themeSelect.accessibleLabel": "Выберите тему",
  "themeSelect.dark": "Тёмная",
  "themeSelect.light": "Светлая",
  "themeSelect.auto": "Авто",
  "languageSelect.accessibleLabel": "Выберите язык",
  "menuButton.accessibleLabel": "Меню",
  "sidebarNav.accessibleLabel": "Основное",
  "tableOfContents.onThisPage": "На этой странице",
  "tableOfContents.overview": "Обзор",
  "i18n.untranslatedContent": "Это содержимое пока не доступно на вашем языке.",
  "page.editLink": "Редактировать страницу",
  "page.lastUpdated": "Последнее обновление:",
  "page.previousLink": "Предыдущая",
  "page.nextLink": "Следующая",
  "page.draft": "Этот контент является черновиком и не будет добавлен в продакшен-сборки.",
  "404.text": "Страница не найдена. Проверьте URL или используйте поиск по сайту.",
  "aside.note": "Заметка",
  "aside.tip": "Совет",
  "aside.caution": "Осторожно",
  "aside.danger": "Опасно",
  "fileTree.directory": "Директория",
  "expressiveCode.copyButtonCopied": "Скопировано!",
  "expressiveCode.copyButtonTooltip": "Копировать",
  "expressiveCode.terminalWindowFallbackTitle": "Окно терминала",
  "builtWithStarlight.label": "Сделано с помощью Starlight",
  "heading.anchorLabel": "Заголовок раздела «{{title}}»",
};

const vi = {
  "skipLink.label": "Bỏ qua để đến nội dung",
  "search.label": "Tìm kiếm",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "Hủy",
  "search.devWarning": "Chức năng tìm kiếm chỉ có sẵn trong các phiên bản thật.\nHãy thử xây dựng và xem trước trang web để kiểm tra.",
  "themeSelect.accessibleLabel": "Chọn giao diện",
  "themeSelect.dark": "Tối",
  "themeSelect.light": "Sáng",
  "themeSelect.auto": "Tự động",
  "languageSelect.accessibleLabel": "Chọn ngôn ngữ",
  "menuButton.accessibleLabel": "Menu",
  "sidebarNav.accessibleLabel": "Chính",
  "tableOfContents.onThisPage": "Trên trang này",
  "tableOfContents.overview": "Tổng quan",
  "i18n.untranslatedContent": "Nội dung này hiện chưa có sẵn bằng ngôn ngữ của bạn.",
  "page.editLink": "Chỉnh sửa trang",
  "page.lastUpdated": "Cập nhật lần cuối:",
  "page.previousLink": "Trước",
  "page.nextLink": "Tiếp",
  "page.draft": "Nội dung này là bản nháp và sẽ không được đưa vào các phiên bản thật.",
  "404.text": "Không tìm thấy trang. Hãy kiểm tra lại URL hoặc thử dùng thanh tìm kiếm.",
  "aside.note": "Ghi chú",
  "aside.tip": "Mẹo",
  "aside.caution": "Chú ý",
  "aside.danger": "Nguy hiểm",
  "fileTree.directory": "Thư mục",
  "builtWithStarlight.label": "Được xây dựng bằng Starlight",
  "heading.anchorLabel": "Phần tiêu đề “{{title}}”",
};

const uk = {
  "skipLink.label": "Перейти до вмісту",
  "search.label": "Пошук",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "Скасувати",
  "search.devWarning": "Пошук доступний лише у виробничих збірках. \nСпробуйте зібрати та переглянути сайт, щоби протестувати його локально",
  "themeSelect.accessibleLabel": "Обрати тему",
  "themeSelect.dark": "Темна",
  "themeSelect.light": "Світла",
  "themeSelect.auto": "Авто",
  "languageSelect.accessibleLabel": "Обрати мову",
  "menuButton.accessibleLabel": "Меню",
  "sidebarNav.accessibleLabel": "Головне",
  "tableOfContents.onThisPage": "На цій сторінці",
  "tableOfContents.overview": "Огляд",
  "i18n.untranslatedContent": "Цей контент ще не доступний вашою мовою.",
  "page.editLink": "Редагувати сторінку",
  "page.lastUpdated": "Останнє оновлення:",
  "page.previousLink": "Назад",
  "page.nextLink": "Далі",
  "page.draft": "Цей контент є чернеткою і не буде включений до виробничих збірок.",
  "404.text": "Сторінку не знайдено. Перевірте URL або спробуйте скористатися пошуком.",
  "aside.note": "Заувага",
  "aside.tip": "Порада",
  "aside.caution": "Обережно",
  "aside.danger": "Небезпечно",
  "fileTree.directory": "Каталог",
  "builtWithStarlight.label": "Створено з Starlight",
  "heading.anchorLabel": "Section titled “{{title}}”",
};

const hi = {
  "skipLink.label": "इसे छोड़कर कंटेंट पर जाएं",
  "search.label": "खोजें",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "रद्द करे",
  "search.devWarning": "खोज केवल उत्पादन बिल्ड में उपलब्ध है। \nस्थानीय स्तर पर परीक्षण करने के लिए साइट बनाए और उसका पूर्वावलोकन करने का प्रयास करें।",
  "themeSelect.accessibleLabel": "थीम चुनें",
  "themeSelect.dark": "अँधेरा",
  "themeSelect.light": "रोशनी",
  "themeSelect.auto": "स्वत",
  "languageSelect.accessibleLabel": "भाषा चुने",
  "menuButton.accessibleLabel": "मेन्यू",
  "sidebarNav.accessibleLabel": "मुख्य",
  "tableOfContents.onThisPage": "इस पृष्ठ पर",
  "tableOfContents.overview": "अवलोकन",
  "i18n.untranslatedContent": "यह कंटेंट अभी तक आपकी भाषा में उपलब्ध नहीं है।",
  "page.editLink": "पृष्ठ संपादित करें",
  "page.lastUpdated": "आखिरी अद्यतन:",
  "page.previousLink": "पिछला",
  "page.nextLink": "अगला",
  "page.draft": "This content is a draft and will not be included in production builds.",
  "404.text": "यह पृष्ठ नहीं मिला। URL जांचें या खोज बार का उपयोग करने का प्रयास करें।",
  "aside.note": "टिप्पणी",
  "aside.tip": "संकेत",
  "aside.caution": "सावधानी",
  "aside.danger": "खतरा",
  "fileTree.directory": "Directory",
  "builtWithStarlight.label": "Starlight द्वारा निर्मित",
  "heading.anchorLabel": "Section titled “{{title}}”",
};

const zhTW = {
  "skipLink.label": "跳到內容",
  "search.label": "搜尋",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "取消",
  "search.devWarning": "正式版本才能使用搜尋功能。\n如要在本地測試，請先建置並預覽網站。",
  "themeSelect.accessibleLabel": "選擇佈景主題",
  "themeSelect.dark": "深色",
  "themeSelect.light": "淺色",
  "themeSelect.auto": "自動",
  "languageSelect.accessibleLabel": "選擇語言",
  "menuButton.accessibleLabel": "選單",
  "sidebarNav.accessibleLabel": "主要",
  "tableOfContents.onThisPage": "本頁內容",
  "tableOfContents.overview": "概述",
  "i18n.untranslatedContent": "本頁內容尚未翻譯。",
  "page.editLink": "編輯頁面",
  "page.lastUpdated": "最後更新於：",
  "page.previousLink": "前一則",
  "page.nextLink": "下一則",
  "page.draft": "This content is a draft and will not be included in production builds.",
  "404.text": "找不到頁面。請檢查網址或改用搜尋功能。",
  "aside.note": "注意",
  "aside.tip": "提示",
  "aside.caution": "警告",
  "aside.danger": "危險",
  "fileTree.directory": "目錄",
  "builtWithStarlight.label": "Built with Starlight",
  "heading.anchorLabel": "Section titled “{{title}}”",
};

const pl = {
  "skipLink.label": "Przejdź do głównej zawartości",
  "search.label": "Szukaj",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "Anuluj",
  "search.devWarning": "Wyszukiwanie jest dostępne tylko w buildach produkcyjnych. \nSpróbuj zbudować i uruchomić aplikację, aby przetestować lokalnie.",
  "themeSelect.accessibleLabel": "Wybierz motyw",
  "themeSelect.dark": "Ciemny",
  "themeSelect.light": "Jasny",
  "themeSelect.auto": "Auto",
  "languageSelect.accessibleLabel": "Wybierz język",
  "menuButton.accessibleLabel": "Menu",
  "sidebarNav.accessibleLabel": "Główne",
  "tableOfContents.onThisPage": "Na tej stronie",
  "tableOfContents.overview": "Przegląd",
  "i18n.untranslatedContent": "Ta treść nie jest jeszcze dostępna w Twoim języku.",
  "page.editLink": "Edytuj stronę",
  "page.lastUpdated": "Ostatnia aktualizacja:",
  "page.previousLink": "Poprzednia strona",
  "page.nextLink": "Następna strona",
  "page.draft": "This content is a draft and will not be included in production builds.",
  "404.text": "Nie znaleziono. Sprawdź URL lub użyj wyszukiwarki.",
  "aside.note": "Notatka",
  "aside.tip": "Wskazówka",
  "aside.caution": "Uwaga",
  "aside.danger": "Ważne",
  "fileTree.directory": "Folder",
  "expressiveCode.copyButtonCopied": "Skopiowane!",
  "expressiveCode.copyButtonTooltip": "Skopiuj do schowka",
  "expressiveCode.terminalWindowFallbackTitle": "Okno terminala",
  "builtWithStarlight.label": "Built with Starlight",
  "heading.anchorLabel": "Dział zatytułowany „{{title}}”",
};

const sk = {
  "skipLink.label": "Preskočiť na obsah",
  "search.label": "Hľadať",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "Zrušiť",
  "search.devWarning": "Vyhľadávanie je dostupné len v produkčných zostaveniach. \nSkúste vytvoriť a zobraziť náhľad stránky lokálne.",
  "themeSelect.accessibleLabel": "Vyberte tému",
  "themeSelect.dark": "Tmavý",
  "themeSelect.light": "Svetlý",
  "themeSelect.auto": "Auto",
  "languageSelect.accessibleLabel": "Vyberte jazyk",
  "menuButton.accessibleLabel": "Menu",
  "sidebarNav.accessibleLabel": "Hlavný",
  "tableOfContents.onThisPage": "Na tejto stránke",
  "tableOfContents.overview": "Prehľad",
  "i18n.untranslatedContent": "Tento obsah zatiaľ nie je dostupný vo vašom jazyku.",
  "page.editLink": "Upraviť stránku",
  "page.lastUpdated": "Posledná aktualizácia:",
  "page.previousLink": "Predchádzajúce",
  "page.nextLink": "Nasledujúce",
  "page.draft": "Tento obsah je koncept a nebude zahrnutý do produkčných zostavení.",
  "404.text": "Stránka nenájdená. Skontrolujte URL alebo skúste použiť vyhľadávacie pole.",
  "aside.note": "Poznámka",
  "aside.tip": "Tip",
  "aside.caution": "Upozornenie",
  "aside.danger": "Nebezpečenstvo",
  "fileTree.directory": "Adresár",
  "builtWithStarlight.label": "Postavené so Starlight",
  "heading.anchorLabel": "Section titled “{{title}}”",
};

const lv = {
  "skipLink.label": "Pāriet uz saturu",
  "search.label": "Meklēt",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "Atcelt",
  "search.devWarning": "Meklēšana ir pieejama tikai ražošanas kompilācijās. \nMēģiniet kompilēt un priekšskatīt vietni, lai to pārbaudītu lokāli.",
  "themeSelect.accessibleLabel": "Izvēlieties tēmu",
  "themeSelect.dark": "Tumša",
  "themeSelect.light": "Gaiša",
  "themeSelect.auto": "Automātiska",
  "languageSelect.accessibleLabel": "Izvēlieties valodu",
  "menuButton.accessibleLabel": "Izvēlne",
  "sidebarNav.accessibleLabel": "Galvenā",
  "tableOfContents.onThisPage": "Šajā lapā",
  "tableOfContents.overview": "Pārskats",
  "i18n.untranslatedContent": "Šis saturs vēl nav pieejams jūsu valodā.",
  "page.editLink": "Rediģēt lapu",
  "page.lastUpdated": "Pēdējoreiz atjaunināts:",
  "page.previousLink": "Iepriekšējā",
  "page.nextLink": "Nākamā",
  "page.draft": "Šis saturs ir melnraksts un netiks iekļauts ražošanas kompilācijās.",
  "404.text": "Lapa nav atrasta. Pārbaudiet URL vai mēģiniet izmantot meklēšanas joslu.",
  "aside.note": "Piezīme",
  "aside.tip": "Padoms",
  "aside.caution": "Uzmanību",
  "aside.danger": "Bīstamība",
  "fileTree.directory": "Direktorija",
  "builtWithStarlight.label": "Veidots ar Starlight",
  "heading.anchorLabel": "Section titled “{{title}}”",
};

const hu = {
  "skipLink.label": "Tovább a tartalomhoz",
  "search.label": "Keresés",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "Mégsem",
  "search.devWarning": "A keresés csak a production build-ekben működik. \nPróbáld meg először buildelni, hogy kipróbálhasd.",
  "themeSelect.accessibleLabel": "Téma választás",
  "themeSelect.dark": "Sötét",
  "themeSelect.light": "Világos",
  "themeSelect.auto": "Auto",
  "languageSelect.accessibleLabel": "Nyelv választása",
  "menuButton.accessibleLabel": "Menü",
  "sidebarNav.accessibleLabel": "Fő",
  "tableOfContents.onThisPage": "Ezen az oldalon",
  "tableOfContents.overview": "Tartalom",
  "i18n.untranslatedContent": "Ez a tartalom még nem érhető el a jelenlegi nyelven.",
  "page.editLink": "Oldal szerkesztése",
  "page.lastUpdated": "Utoljára frissítve:",
  "page.previousLink": "Előző",
  "page.nextLink": "Következő",
  "page.draft": "Ez a tartalom még vázlat, így nem lesz benne a production build-ben.",
  "404.text": "Az oldal nem található. Nézd meg az URL-t vagy használd a keresőt.",
  "aside.note": "Megjegyzés",
  "aside.tip": "Tipp",
  "aside.caution": "Figyelem",
  "aside.danger": "Veszély",
  "fileTree.directory": "Könyvtár",
  "builtWithStarlight.label": "Starlight-tal készítve",
  "heading.anchorLabel": "Szekció neve “{{title}}”",
  "expressiveCode.copyButtonCopied": "Másolva!",
  "expressiveCode.copyButtonTooltip": "Másolás",
  "expressiveCode.terminalWindowFallbackTitle": "Terminál",
  "pagefind.clear_search": "Törlés",
  "pagefind.load_more": "Több találat betöltése",
  "pagefind.search_label": "Keresés ezen az oldalon",
  "pagefind.filters_label": "Szűrők",
  "pagefind.zero_results": "Erre a kifejezésre nincs találat: [SEARCH_TERM]",
  "pagefind.many_results": "[COUNT] találat erre: [SEARCH_TERM]",
  "pagefind.one_result": "[COUNT] találat erre: [SEARCH_TERM]",
  "pagefind.alt_search": "Erre a kifejezésre nincs találat: [SEARCH_TERM]. Találatok mutatása erre: [DIFFERENT_TERM]",
  "pagefind.search_suggestion": "Erre a kifejezésre nincs találat: [SEARCH_TERM]. Próbáld meg ezek közül az egyiket:",
  "pagefind.searching": "Keresés erre: [SEARCH_TERM]...",
};

const el = {
  "skipLink.label": "Μετάβαση στο περιεχόμενο",
  "search.label": "Αναζήτηση",
  "search.ctrlKey": "Ctrl",
  "search.cancelLabel": "Ακύρωση",
  "search.devWarning": "Η αναζήτηση είναι διαθέσιμη μόνο σε builds παραγωγής.\nΔοκίμασε να κάνεις build τον ιστότοπο και να τον προεπισκοπήσεις για να τον ελέγξεις τοπικά.",
  "themeSelect.accessibleLabel": "Επιλογή χρωματικού θέματος",
  "themeSelect.dark": "Σκοτεινό",
  "themeSelect.light": "Φωτεινό",
  "themeSelect.auto": "Σύστημα",
  "languageSelect.accessibleLabel": "Επιλογή γλώσσας",
  "menuButton.accessibleLabel": "Μενού",
  "sidebarNav.accessibleLabel": "Κύρια πλοήγηση",
  "tableOfContents.onThisPage": "Σε αυτή τη σελίδα",
  "tableOfContents.overview": "Επισκόπηση",
  "i18n.untranslatedContent": "Αυτό το περιεχόμενο δεν είναι ακόμη διαθέσιμο στη γλώσσα σου.",
  "page.editLink": "Επεξεργασία σελίδας",
  "page.lastUpdated": "Τελευταία ενημέρωση:",
  "page.previousLink": "Προηγούμενη σελίδα",
  "page.nextLink": "Επόμενη σελίδα",
  "page.draft": "Αυτό το περιεχόμενο είναι πρόχειρο και δεν θα περιλαμβάνεται στα builds παραγωγής.",
  "404.text": "Η σελίδα δεν βρέθηκε. Έλεγξε το URL ή χρησιμοποίησε τη γραμμή αναζήτησης.",
  "aside.note": "Σημείωση",
  "aside.tip": "Συμβουλή",
  "aside.caution": "Προσοχή",
  "aside.danger": "Κίνδυνος",
  "fileTree.directory": "Φάκελος",
  "builtWithStarlight.label": "Δημιουργήθηκε με το Starlight",
  "heading.anchorLabel": "Ενότητα με τίτλο «{{title}}»",
};

const { parse } = builtinI18nSchema();
const builtinTranslations = Object.fromEntries(
  Object.entries({
    cs,
    en,
    es,
    ca,
    de,
    ja,
    pt,
    fa,
    fi,
    fr,
    gl,
    he,
    id,
    it,
    nl,
    da,
    tr,
    ar,
    nb,
    zh,
    ko,
    sv,
    ro,
    ru,
    vi,
    uk,
    hi,
    "zh-TW": zhTW,
    pl,
    sk,
    lv,
    hu,
    el
  }).map(([key, dict]) => [key, parse(dict)])
);

const wellKnownRTL = ["ar", "fa", "he", "prs", "ps", "syc", "ug", "ur"];
const BuiltInDefaultLocale = { ...getLocaleInfo("en"), lang: "en" };
function getLocaleInfo(lang) {
  try {
    const locale = new Intl.Locale(lang);
    const label = new Intl.DisplayNames(locale, { type: "language" }).of(lang);
    if (!label || lang === label) throw new Error("Label not found.");
    return {
      label: label[0]?.toLocaleUpperCase(locale) + label.slice(1),
      dir: getLocaleDir(locale)
    };
  } catch {
    throw new AstroUserError(
      `Failed to get locale information for the '${lang}' locale.`,
      "Make sure to provide a valid BCP-47 tags (e.g. en, ar, or zh-CN)."
    );
  }
}
function getLocaleDir(locale) {
  if ("textInfo" in locale) {
    return locale.textInfo.direction;
  } else if ("getTextInfo" in locale) {
    return locale.getTextInfo().direction;
  }
  return wellKnownRTL.includes(locale.language) ? "rtl" : "ltr";
}
function pickLang(dictionary, lang) {
  return dictionary[lang];
}

const I18nextNamespace = "starlight";
async function createTranslationSystem(config, userTranslations, pluginTranslations = {}) {
  const defaultLocale = config.defaultLocale.lang || config.defaultLocale?.locale || BuiltInDefaultLocale.lang;
  const translations = {
    [defaultLocale]: buildResources(
      builtinTranslations[defaultLocale],
      builtinTranslations[stripLangRegion(defaultLocale)],
      pluginTranslations[defaultLocale],
      userTranslations[defaultLocale]
    )
  };
  if (config.locales) {
    for (const locale in config.locales) {
      const lang = localeToLang(locale, config.locales, config.defaultLocale);
      translations[lang] = buildResources(
        builtinTranslations[lang] || builtinTranslations[stripLangRegion(lang)],
        pluginTranslations[lang],
        userTranslations[lang]
      );
    }
  }
  const i18n = i18next.createInstance();
  await i18n.init({
    resources: translations,
    fallbackLng: config.defaultLocale.lang || config.defaultLocale?.locale || BuiltInDefaultLocale.lang
  });
  return (lang) => {
    lang ??= config.defaultLocale?.lang || BuiltInDefaultLocale.lang;
    const t = i18n.getFixedT(lang, I18nextNamespace);
    t.all = () => i18n.getResourceBundle(lang, I18nextNamespace);
    t.exists = (key, options) => i18n.exists(key, { lng: lang, ns: I18nextNamespace, ...options });
    t.dir = (dirLang = lang) => i18n.dir(dirLang);
    return t;
  };
}
function stripLangRegion(lang) {
  return lang.replace(/-[a-zA-Z]{2}/, "");
}
function localeToLang(locale, locales, defaultLocale) {
  const lang = locale ? locales?.[locale]?.lang : locales?.root?.lang;
  const defaultLang = defaultLocale?.lang || defaultLocale?.locale;
  return lang || defaultLang || BuiltInDefaultLocale.lang;
}
function buildResources(...dictionaries) {
  const dictionary = {};
  for (const dict of dictionaries) {
    for (const key in dict) {
      const value = dict[key];
      if (value) dictionary[key] = value;
    }
  }
  return { [I18nextNamespace]: dictionary };
}

function getCollectionPathFromRoot(collection, { root, srcDir }) {
  return (typeof srcDir === "string" ? srcDir : srcDir.pathname).replace(
    typeof root === "string" ? root : root.pathname,
    ""
  ) + "content/" + collection;
}

function ensureLeadingSlash(href) {
  if (href[0] !== "/") href = "/" + href;
  return href;
}
function ensureTrailingSlash(href) {
  if (href[href.length - 1] !== "/") href += "/";
  return href;
}
function stripLeadingSlash(href) {
  if (href[0] === "/") href = href.slice(1);
  return href;
}
function stripTrailingSlash(href) {
  if (href[href.length - 1] === "/") href = href.slice(0, -1);
  return href;
}
function stripLeadingAndTrailingSlashes(href) {
  href = stripLeadingSlash(href);
  href = stripTrailingSlash(href);
  return href;
}
function stripHtmlExtension(path) {
  const pathWithoutTrailingSlash = stripTrailingSlash(path);
  return pathWithoutTrailingSlash.endsWith(".html") ? pathWithoutTrailingSlash.slice(0, -5) : path;
}
function ensureHtmlExtension(path) {
  path = stripLeadingAndTrailingSlashes(path);
  if (!path.endsWith(".html")) {
    path = path ? path + ".html" : "/index.html";
  }
  return ensureLeadingSlash(path);
}
function stripExtension(path) {
  const periodIndex = path.lastIndexOf(".");
  return path.slice(0, periodIndex > -1 ? periodIndex : void 0);
}

const i18nCollectionPathFromRoot = getCollectionPathFromRoot("i18n", project);
async function loadTranslations() {
  const warn = console.warn;
  console.warn = () => {
  };
  const userTranslations = Object.fromEntries(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore — may be a type error in projects without an i18n collection
    (await getCollection("i18n")).map(({ id, data, filePath }) => {
      const lang = !filePath ? id : stripExtension(stripLeadingSlash(filePath.replace(i18nCollectionPathFromRoot, "")));
      return [lang, data];
    })
  );
  console.warn = warn;
  return userTranslations;
}
const useTranslations = await createTranslationSystem(
  starlightConfig,
  await loadTranslations(),
  pluginTranslations
);

export { BuiltInDefaultLocale as B, CONTENT_LAYER_TYPE as C, LIVE_CONTENT_TYPE as L, starlightConfig as a, stripTrailingSlash as b, stripLeadingSlash as c, stripHtmlExtension as d, ensureHtmlExtension as e, ensureTrailingSlash as f, getCollectionPathFromRoot as g, getCollection as h, pickLang as i, ensureLeadingSlash as j, stripExtension as k, getEntry as l, defineCollection as m, project as p, renderEntry as r, stripLeadingAndTrailingSlashes as s, useTranslations as u };
