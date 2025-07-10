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
              label: "Websocket Introduction",
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
                  label: "Generics Introduction",
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
                {
                  label: "Generics Constraints",
                  slug: "advanced-typescript/generics/generics-constraints",
                },
                {
                  label: "Common Patterns",
                  slug: "advanced-typescript/generics/common-patterns",
                },
              ],
            },
            {
              label: "Utility Types",
              items: [
                {
                  label: "Utility Introduction",
                  slug: "advanced-typescript/utility/introduction",
                },
                {
                  label: "Partial",
                  slug: "advanced-typescript/utility/modifying-properties-partial",
                },
                {
                  label: "Required",
                  slug: "advanced-typescript/utility/modifying-properties-required",
                },
                {
                  label: "Readonly",
                  slug: "advanced-typescript/utility/modifying-properties-readonly",
                },
                {
                  label: "Pick & Omit",
                  slug: "advanced-typescript/utility/pick-omit",
                },
                {
                  label: "Record",
                  slug: "advanced-typescript/utility/record",
                },
                {
                  label: "Exclude, Extract & NonNullable",
                  slug: "advanced-typescript/utility/exclude-extract-nonnullable",
                },
                {
                  label: "Parameters, ReturnType & Awaited",
                  slug: "advanced-typescript/utility/parameters-returntype-awaited",
                },
                {
                  label: "Summary (Cheat Sheet)",
                  slug: "advanced-typescript/utility/utility-cheat-sheet",
                },
              ],
            },
            {
              label: "Satisfies Keyword",
              items: [
                {
                  label: "Before Satisfies",
                  slug: "advanced-typescript/satisfies/before-satisfies",
                },
                {
                  label: "Problem with Type annotation and 'as' keyword",
                  slug: "advanced-typescript/satisfies/solving-types",
                },
                {
                  label: "Satisfies Introduction",
                  slug: "advanced-typescript/satisfies/satisfies-introduction",
                },
                {
                  label: "Satisfies Comparison",
                  slug: "advanced-typescript/satisfies/satisfies-comparison",
                },
                {
                  label: "Practical Use Cases",
                  slug: "advanced-typescript/satisfies/satisfies-practical-use-cases",
                },
              ],
            },
            {
              label: "Bringing it all together",
              items: [
                {
                  label: "Generics + Utility Types",
                  slug: "advanced-typescript/all-together/generics-utility",
                },
                {
                  label: "Mini Project",
                  slug: "advanced-typescript/all-together/mini-project",
                },
                {
                  label: "Common Pitfalls & Best Practices",
                  slug: "advanced-typescript/all-together/advanced-tips-pitfalls",
                },
              ],
            },
          ],
        },
        {
          label: "Git Version Control",
          // autogenerate: { directory: "websocket" },
          items: [
            {
              label: "Git Introduction",
              items: [
                {
                  label: "Why Git?",
                  slug: "git-course/introduction/why-git",
                },
                {
                  label: "Installation & Identity",
                  slug: "git-course/introduction/installation-identity",
                },
                {
                  label: "The Three Arenas",
                  slug: "git-course/introduction/three-arena",
                },
                {
                  label: "Commit Messages & Git History",
                  slug: "git-course/introduction/commit-messages",
                },
              ],
            },
            {
              label: "Branches",
              items: [
                {
                  label: "Branches Introduction",
                  slug: "git-course/branches/branches-introduction",
                },
                {
                  label: "Merging Branches",
                  slug: "git-course/branches/merge",
                },
                {
                  label: "Solving Merge Conficts",
                  slug: "git-course/branches/solving-conflicts",
                },
                {
                  label: "Deleting Branches",
                  slug: "git-course/branches/deleting-branches",
                },
              ],
            },
            {
              label: "Remote Repository",
              items: [
                {
                  label: "Remote Repository Introduction",
                  slug: "git-course/remote-repository/remote-intro",
                },
                {
                  label: "Linking Local and Remote",
                  slug: "git-course/remote-repository/connect-remote",
                },
                {
                  label: "Pushing",
                  slug: "git-course/remote-repository/pushing",
                },
                {
                  label: "Pulling",
                  slug: "git-course/remote-repository/pulling",
                },
                {
                  label: "Cloning",
                  slug: "git-course/remote-repository/cloning",
                },
              ],
            },
            {
              label: "Git Workflow",
              items: [
                {
                  label: "Git Workflow Introduction",
                  slug: "git-course/collaboration/workflow",
                },
                {
                  label: "Pull Requests (PRs)",
                  slug: "git-course/collaboration/pull-requests",
                },
                {
                  label: "Discussion & Improvment",
                  slug: "git-course/collaboration/discussion",
                },
                {
                  label: "Merging a Pull Request",
                  slug: "git-course/collaboration/merging",
                },
              ],
            },
            {
              label: "Advanced Techniques",
              items: [
                {
                  label: "Quick Fixes",
                  slug: "git-course/advanced-techniques/quick-fixes",
                },
                {
                  label: "Resetting(Soft, Mixed & Hard)",
                  slug: "git-course/advanced-techniques/resetting",
                },
                {
                  label: "Reverting Published Commits",
                  slug: "git-course/advanced-techniques/reverting",
                },
                {
                  label: "Stashing",
                  slug: "git-course/advanced-techniques/stashing",
                },
                {
                  label: "Rebasing",
                  slug: "git-course/advanced-techniques/rebasing",
                },
                {
                  label: "Rebase Vs Merge",
                  slug: "git-course/advanced-techniques/rebase-vs-merge",
                },
                {
                  label: "Tagging",
                  slug: "git-course/advanced-techniques/tagging",
                },
                {
                  label: "Reflog",
                  slug: "git-course/advanced-techniques/reflog",
                },
              ],
            },
          ],
        },
        {
          label: "Web Performance: Web Vitals and More",
          items: [
            {
              label: "Introduction",
              items: [
                {
                  label: "Why Web Performance",
                  slug: "web-performance/introduction/why-web-performance",
                },
                {
                  label: "The Business Case for Performance",
                  slug: "web-performance/introduction/business-cases",
                },
              ],
            },
            {
              label: "Measuring Web Performance",
              items: [
                {
                  label: "Key Performance Metrics",
                  slug: "web-performance/measuring-performance/metrics",
                },
                {
                  label: "Essential Tools",
                  slug: "web-performance/measuring-performance/essential-tools",
                },
              ],
            },
            {
              label: "Mastering Core Web Vitals",
              items: [
                {
                  label: "LCP",
                  slug: "web-performance/core-vitals/lcp",
                },
                {
                  label: "FID & INP",
                  slug: "web-performance/core-vitals/fid-and-inp",
                },
                {
                  label: "CLS",
                  slug: "web-performance/core-vitals/cls",
                },
                {
                  label: "Optimizing",
                  slug: "web-performance/core-vitals/optimizing",
                },
              ],
            },
            {
              label: "Image & Asset Optimization",
              items: [
                {
                  label: "Image Optimization",
                  slug: "web-performance/image-and-asset/image-optimization",
                },
                {
                  label: "Video Optimization",
                  slug: "web-performance/image-and-asset/video-optimization",
                },
                {
                  label: "Font Optimization",
                  slug: "web-performance/image-and-asset/font-optimization",
                },
              ],
            },
            {
              label: "Javascript & CSS Optimization",
              items: [
                {
                  label: "Javascript Optimization",
                  slug: "web-performance/js-and-css/js-optimization",
                },
                {
                  label: "CSS Optimization",
                  slug: "web-performance/js-and-css/css-optimization",
                },
                {
                  label: "How Browsers Show Pages",
                  slug: "web-performance/js-and-css/how-browsers-show-pages",
                },
              ],
            },
            {
              label: "Server-Side & Delivery - Caching, CDNS",
              items: [
                {
                  label: "Browser Caching",
                  slug: "web-performance/server-side/browser-caching",
                },
                {
                  label: "Content Delivery Network",
                  slug: "web-performance/server-side/cdn",
                },
                {
                  label: "Server-Side Optimizations",
                  slug: "web-performance/server-side/server-side",
                },
              ],
            },
            {
              label: "Advanced Performance Techniques & Future Trends",
              items: [
                {
                  label: "Rendering Architectures",
                  slug: "web-performance/advanced-techniques/rendering-architectures",
                },
                {
                  label: "Predictive Loading",
                  slug: "web-performance/advanced-techniques/predictive-loading",
                },
                {
                  label: "Future of Web Performance",
                  slug: "web-performance/advanced-techniques/future",
                },
              ],
            },
            {
              label: "Course Summary",
              slug: "web-performance/summary",
            },
          ],
        },
        {
          label: "Software Architecture",
          items: [
            {
              label: "Foundations",
              items: [
                {
                  label: "Foundations of Software Architecture",
                  slug: "software-architecture/foundations/foundations",
                },
                {
                  label: "The Goals of Architecture",
                  slug: "software-architecture/foundations/goals",
                },
              ],
            },
            {
              label: "Monolithic Architecture",
              items: [
                {
                  label: "Monolithic Architecture",
                  slug: "software-architecture/monolith/monolithic",
                },
                {
                  label: "Layered Architecture",
                  slug: "software-architecture/monolith/layered",
                },
                {
                  label: "Monolith Pain Point",
                  slug: "software-architecture/monolith/pain-points",
                },
              ],
            },
            {
              label: "SOA & Microservices",
              items: [
                {
                  label: "Distributed Systems & SOA",
                  slug: "software-architecture/microservices/soa",
                },
                {
                  label: "Microservices Architecture",
                  slug: "software-architecture/microservices/microservices",
                },
                {
                  label: "Challenges of Microservices",
                  slug: "software-architecture/microservices/challenges",
                },
              ],
            },
            {
              label: "Designing Communication",
              items: [
                {
                  label: "Synchronous Communication",
                  slug: "software-architecture/communications/synchronous",
                },
                {
                  label: "Data Architecture in Distributed Systems",
                  slug: "software-architecture/communications/data-distributed",
                },
                {
                  label: "Choosing the Right Database",
                  slug: "software-architecture/communications/database",
                },
              ],
            },
            {
              label: "Asynchronous Architectures",
              items: [
                {
                  label: "Asynchronous Communication",
                  slug: "software-architecture/async/asynchronous",
                },
                {
                  label: "Architectural Patterns",
                  slug: "software-architecture/async/patterns",
                },
                {
                  label: "Advanced Patterns",
                  slug: "software-architecture/async/advanced",
                },
              ],
            },
            {
              label: "The Architect's Craft",
              items: [
                {
                  label: "Trade-Off & Making Decisions",
                  slug: "software-architecture/craft/decisions",
                },
              ],
            },
          ],
        },
        {
          label: "Relational Database",
          items: [
            {
              label: "Introduction",
              items: [
                {
                  label: "Welcome to Database!",
                  slug: "relational-database/introduction/welcome-to-database",
                },
                {
                  label: "Types of Databases",
                  slug: "relational-database/introduction/types-of-databases",
                },
              ],
            },
            {
              label: "Terminology",
              items: [
                {
                  label: "Terminology",
                  slug: "relational-database/terminology/terminology",
                },
                {
                  label: "Data Values and Null",
                  slug: "relational-database/terminology/value-related-terms",
                },
                {
                  label: "Table",
                  slug: "relational-database/terminology/structure-related-terms/table",
                },
                {
                  label: "Field",
                  slug: "relational-database/terminology/structure-related-terms/field",
                },
                {
                  label: "Record",
                  slug: "relational-database/terminology/structure-related-terms/record",
                },
                {
                  label: "Candidate Key",
                  slug: "relational-database/terminology/structure-related-terms/candidate-key",
                },

                {
                  label: "Primary Key",
                  slug: "relational-database/terminology/structure-related-terms/primary-key",
                },
                {
                  label: "Foreign Key",
                  slug: "relational-database/terminology/structure-related-terms/foreign-key",
                },
                {
                  label: "Alternate Key and Non-Keys",
                  slug: "relational-database/terminology/structure-related-terms/alternate-key",
                },
                {
                  label: "Relationships",
                  slug: "relational-database/terminology/structure-related-terms/relationships",
                },
              ],
            },
            {
              label: "Normalization",
              items: [
                {
                  label: "Normalization",
                  slug: "relational-database/normalization/normalization",
                },
                {
                  label: "First Normal Form",
                  slug: "relational-database/normalization/first-normal-form",
                },
                {
                  label: "Second Normal Form",
                  slug: "relational-database/normalization/second-normal-form",
                },
                {
                  label: "Third Normal Form",
                  slug: "relational-database/normalization/third-normal-form",
                },
                {
                  label: "Boyce-Codd Normal Form",
                  slug: "relational-database/normalization/bcnf",
                },

                {
                  label: "Fourth Normal Form",
                  slug: "relational-database/normalization/fourth-normal-form",
                },
                {
                  label: "Fifth Normal Form",
                  slug: "relational-database/normalization/fifth-normal-form",
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
        "@/*": fileURLToPath(new URL("./src/*", import.meta.url)),
      },
    },
  },

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
