import { defineCollection, z } from "astro:content";
import { docsLoader, i18nLoader } from "@astrojs/starlight/loaders";
import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";

// Enhanced schema with SEO keywords
const enhancedDocsSchema = docsSchema({
  extend: z.object({
    keywords: z.array(z.string()).optional(),
  })
});

export const collections = {
  docs: defineCollection({ 
    loader: docsLoader(), 
    schema: enhancedDocsSchema 
  }),
  // Interface strings for the "my" locale. src/content/i18n/my.json is empty
  // on purpose: the burmeseUiStrings plugin (src/lib/starlight-burmese-ui.mjs)
  // supplies Starlight's English strings, and any key added to my.json
  // overrides just that string, e.g. { "search.label": "ရှာရန်" }.
  i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
