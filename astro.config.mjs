// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwindcss from "@tailwindcss/vite";
import starlightThemeNova from "starlight-theme-nova";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeNova()],
      title: "Takkatho",
      customCss: ["./src/styles/global.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
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
  },
});
