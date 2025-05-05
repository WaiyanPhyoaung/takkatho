// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "url";
import starlight from "@astrojs/starlight";
import starlightThemeNova from "starlight-theme-nova";
import react from "@astrojs/react";
// import vercelStatic from "@astrojs/vercel/static";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    starlight({
      plugins: [starlightThemeNova()],
      expressiveCode: true,
      title: "Takkatho",
      logo: {
        replacesTitle: true,
        light: "/public/favicon.svg",
        dark: "/public/favicon.svg",
        alt: "Takkatho University",
      },
      customCss: ["./src/styles/global.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/WaiyanPhyoaung/takkatho",
        },
      ],
      routeMiddleware: "./src/routeMiddleware.ts",
      sidebar: [
        {
          label: "WebSocket",
          // autogenerate: { directory: "websocket" },
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Introduction",
              items: [
                {
                  label: "What is WebSocket?",
                  slug: "websocket/introduction/what-is-websocket",
                },
                {
                  label: "TCP connection",
                  slug: "websocket/introduction/tcp-connection",
                },
                {
                  label: "TCP Three-Way Handshake",
                  slug: "websocket/introduction/tcp-handshake",
                },
              ],
            },
            {
              label: "About HTTP",
              items: [
                {
                  label: "HTTP history and limitations",
                  slug: "websocket/http/http-history-and-limitations",
                },
                {
                  label: "HTTP version history",
                  slug: "websocket/http/http-versions",
                },
                {
                  label: "HTTP Real-Time",
                  slug: "websocket/http/http-realtime",
                },
              ],
            },
            {
              label: "About WebSocket",
              items: [
                {
                  label: "Birth of WebSocket",
                  slug: "websocket/about-websocket/birth-websocket",
                },
                {
                  label: "Http upgrade handshake",
                  slug: "websocket/about-websocket/http-upgrade-handshake",
                },
                {
                  label: "WebSocket Messaging",
                  slug: "websocket/about-websocket/websocket-messaging",
                },
                {
                  label: "Two sides of WebSocket",
                  slug: "websocket/about-websocket/two-sides-websocket",
                },
              ],
            },
            {
              label: "Real World Example",
              items: [
                {
                  label: "Simple Chat App - Client",
                  slug: "websocket/real-world-application/chat-app-client",
                },
                {
                  label: "Simple Chat App - Server",
                  slug: "websocket/real-world-application/chat-app-server",
                },
              ],
            },
            {
              label: "Latest Updates & Alternatives",
              slug: "websocket/latest-and-alternatives",
            },
          ],
        },
        {
          label: "Advanced-Typescript",
          items: [
            {
              label: "Why is needed?",
              items: [
                {
                  label: "why advanced typescript?",
                  slug: "advanced-typescript/why-is-advanced-ts-needed/why-advanced-typescript",
                },
                {
                  label: "Basic Typescript's Help",
                  slug: "advanced-typescript/why-is-advanced-ts-needed/basic-typescript",
                },
                {
                  label: "New Challenges: Getting More Complex",
                  slug: "advanced-typescript/why-is-advanced-ts-needed/getting-complex",
                },
                {
                  label: "More powerful Ways",
                  slug: "advanced-typescript/why-is-advanced-ts-needed/more-powerful-ways",
                },
              ],
            },
            {
              label: "Generics",
              items: [
                {
                  label: "Introduction",
                  slug: "advanced-typescript/generics/introduction",
                },
                {
                  label: "Explicitly and Inference",
                  slug: "advanced-typescript/generics/explicitly-and-inference",
                },
                {
                  label: "Usages of Generics",
                  slug: "advanced-typescript/generics/usage-of-generics",
                },
              ],
            },
          ],
        },
        // {
        // 	label: 'Reference',
        // 	autogenerate: { directory: 'reference' },
        // },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@components": fileURLToPath(
          new URL("./src/components", import.meta.url)
        ),
        "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
        "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
        "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
      },
    },
  },

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
