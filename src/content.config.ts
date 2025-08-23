import { defineCollection, z } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

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
};
