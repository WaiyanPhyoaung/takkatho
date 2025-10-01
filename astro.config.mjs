// @ts-check
import { defineConfig } from "astro/config";
import { fileURLToPath } from "url";
import starlight from "@astrojs/starlight";
import starlightThemeNova from "starlight-theme-nova";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
// import vercelStatic from "@astrojs/vercel/static";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://takkatho.dev",
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      entryLimit: 10000,
    }),
    react(),
    starlight({
      plugins: [starlightThemeNova()],
      expressiveCode: true,
      title: "တက္ကသိုလ် (Takkatho) - Myanmar Programming Learning Platform",
      description:
        "လေ့လာပါ မြန်မာဘာသာဖြင့် programming သင်ခန်းစာများ။ TypeScript, WebSocket, Git, Web Performance, Software Architecture နှင့် Database များကို ကျွမ်းကျင်အောင် သင်ယူပါ။ Myanmar developers များအတွက် အထူးပြုလုပ်ထားသည့် ခေတ်မီ learning platform။",
      logo: {
        replacesTitle: true,
        light: "public/favicon.svg",
        dark: "public/favicon.svg",
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
      head: [
        // Favicons & PWA assets (helps Google show your icon in search results)
        {
          tag: "link",
          attrs: {
            rel: "icon",
            type: "image/svg+xml",
            href: "/favicon.svg",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/apple-touch-icon.png",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "manifest",
            href: "/site.webmanifest",
          },
        },
        {
          tag: "link",
          attrs: {
            rel: "mask-icon",
            href: "/safari-pinned-tab.svg",
            color: "#4f46e5",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "theme-color",
            content: "#111827",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "msapplication-TileColor",
            content: "#111827",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "msapplication-config",
            content: "/browserconfig.xml",
          },
        },
        // Additional meta for rich snippets
        {
          tag: "meta",
          attrs: {
            name: "application-name",
            content: "Takkatho",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "mobile-web-app-capable",
            content: "yes",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "apple-mobile-web-app-title",
            content: "Takkatho",
          },
        },
        // Enhanced SEO meta tags for rich search results
        {
          tag: "meta",
          attrs: {
            name: "keywords",
            content:
              "Myanmar programming, မြန်မာ programming, TypeScript Myanmar, WebSocket Myanmar, Git Myanmar, Database Myanmar, Software Architecture Myanmar, Web Performance Myanmar, မြန်မာ developer, programming course Myanmar, tech education Myanmar, coding Myanmar",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "author",
            content: "Takkatho Team",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "robots",
            content:
              "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "googlebot",
            content:
              "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:type",
            content: "website",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:site_name",
            content: "Takkatho",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: "https://takkatho.dev/og-image.png",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image:width",
            content: "1200",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image:height",
            content: "630",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image:alt",
            content: "Takkatho - Myanmar Programming Learning Platform",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:locale",
            content: "my_MM",
          },
        },
        {
          tag: "meta",
          attrs: {
            property: "og:locale:alternate",
            content: "en_US",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:card",
            content: "summary_large_image",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:creator",
            content: "@takkatho_mm",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "language",
            content: "Myanmar",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "geo.region",
            content: "MM",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "geo.country",
            content: "Myanmar",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "educational-level",
            content: "intermediate",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "audience",
            content: "developers,students,programmers",
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "content-language",
            content: "my",
          },
        },
        // JSON-LD structured data for rich search results
        {
          tag: "script",
          attrs: {
            type: "application/ld+json",
          },
          content: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "Takkatho",
            alternateName: "တက္ကသိုလ်",
            description:
              "Myanmar Programming Learning Platform - မြန်မာဘာသာဖြင့် programming သင်ခန်းစာများ",
            url: "https://takkatho.dev",
            logo: "https://takkatho.dev/android-chrome-512x512.png",
            image: "https://takkatho.dev/og-image.png",
            sameAs: ["https://github.com/WaiyanPhyoaung/takkatho"],
            address: {
              "@type": "PostalAddress",
              addressCountry: "Myanmar",
            },
            areaServed: {
              "@type": "Country",
              name: "Myanmar",
            },
            teaches: [
              "Advanced TypeScript",
              "WebSocket Technology",
              "Git Version Control",
              "Web Performance",
              "Software Architecture",
              "Relational Database",
              "HTML & CSS",
              "JavaScript",
            ],
            courseMode: "online",
            availableLanguage: [
              {
                "@type": "Language",
                name: "Myanmar",
                alternateName: "Burmese",
              },
              {
                "@type": "Language",
                name: "English",
              },
            ],
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
            },
            educationalCredentialAwarded: "Certificate of Completion",
            provider: {
              "@type": "Organization",
              name: "Takkatho",
              url: "https://takkatho.dev",
            },
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate:
                  "https://takkatho.dev/courses?q={search_term_string}",
              },
              "query-input": "required name=search_term_string",
            },
            numberOfEmployees: "1-5",
            foundingDate: "2024",
            keywords:
              "Myanmar programming, TypeScript, WebSocket, Git, Database, Software Architecture, Web Performance, မြန်မာ programming",
          }),
        },
        // Course catalog structured data for rich snippets
        {
          tag: "script",
          attrs: {
            type: "application/ld+json",
          },
          content: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Programming Courses",
            description: "Free programming courses in Myanmar language",
            url: "https://takkatho.dev/courses",
            numberOfItems: 7,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@type": "Course",
                  name: "Advanced TypeScript",
                  description:
                    "Master advanced TypeScript concepts including generics, utility types, and satisfies keyword",
                  url: "https://takkatho.dev/advanced-typescript/",
                  provider: {
                    "@type": "Organization",
                    name: "Takkatho",
                  },
                  courseMode: "online",
                  educationalLevel: "intermediate",
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@type": "Course",
                  name: "WebSocket Technology",
                  description:
                    "Learn real-time web communication with WebSocket protocol",
                  url: "https://takkatho.dev/websocket/",
                  provider: {
                    "@type": "Organization",
                    name: "Takkatho",
                  },
                  courseMode: "online",
                  educationalLevel: "intermediate",
                },
              },
              {
                "@type": "ListItem",
                position: 3,
                item: {
                  "@type": "Course",
                  name: "Git Version Control",
                  description:
                    "Complete Git course from basics to advanced techniques",
                  url: "https://takkatho.dev/git-course/",
                  provider: {
                    "@type": "Organization",
                    name: "Takkatho",
                  },
                  courseMode: "online",
                  educationalLevel: "beginner",
                },
              },
              {
                "@type": "ListItem",
                position: 4,
                item: {
                  "@type": "Course",
                  name: "Web Performance",
                  description:
                    "Optimize web performance with Core Web Vitals and modern techniques",
                  url: "https://takkatho.dev/web-performance/",
                  provider: {
                    "@type": "Organization",
                    name: "Takkatho",
                  },
                  courseMode: "online",
                  educationalLevel: "intermediate",
                },
              },
              {
                "@type": "ListItem",
                position: 5,
                item: {
                  "@type": "Course",
                  name: "Software Architecture",
                  description:
                    "Learn software architecture patterns and design principles",
                  url: "https://takkatho.dev/software-architecture/",
                  provider: {
                    "@type": "Organization",
                    name: "Takkatho",
                  },
                  courseMode: "online",
                  educationalLevel: "advanced",
                },
              },
            ],
          }),
        },
        // Website schema with sitelinks search box
        {
          tag: "script",
          attrs: {
            type: "application/ld+json",
          },
          content: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Takkatho - Myanmar Programming Learning Platform",
            alternateName: "တက္ကသိုလ်",
            description:
              "လေ့လာပါ မြန်မာဘာသာဖြင့် programming သင်ခန်းစာများ။ TypeScript, WebSocket, Git, Web Performance, Software Architecture နှင့် Database များကို ကျွမ်းကျင်အောင် သင်ယူပါ။",
            url: "https://takkatho.dev",
            inLanguage: ["my", "en"],
            potentialAction: [
              {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://takkatho.dev/courses?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            ],
            publisher: {
              "@type": "Organization",
              name: "Takkatho",
              url: "https://takkatho.dev",
              logo: "https://takkatho.dev/android-chrome-512x512.png",
            },
            mainEntity: {
              "@type": "ItemList",
              name: "Popular Programming Courses",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  url: "https://takkatho.dev/advanced-typescript/",
                  name: "Advanced TypeScript Course",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  url: "https://takkatho.dev/websocket/",
                  name: "WebSocket Technology Course",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  url: "https://takkatho.dev/git-course/",
                  name: "Git Version Control Course",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  url: "https://takkatho.dev/web-performance/",
                  name: "Web Performance Course",
                },
              ],
            },
          }),
        },
        // Breadcrumb schema
        {
          tag: "script",
          attrs: {
            type: "application/ld+json",
          },
          content: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://takkatho.dev",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Programming Courses",
                item: "https://takkatho.dev/courses",
              },
            ],
          }),
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
                {
                  label: "C4 Model",
                  slug: "software-architecture/craft/c4",
                },
                {
                  label: "Architectural Decision Records (ADRs)",
                  slug: "software-architecture/craft/adr",
                },
                {
                  label:
                    "Evaluating Architecture & Architectural Fitness Functions",
                  slug: "software-architecture/craft/evaluation",
                },
              ],
            },
            {
              label: "Practical Architecture",
              items: [
                {
                  label: 'Designing a "Ride-Sharing App"',
                  slug: "software-architecture/practical/design",
                },
                {
                  label: "High-Level Design & Pattern Selection",
                  slug: "software-architecture/practical/pattern",
                },
                {
                  label: "Detailed Design & Key Decisions",
                  slug: "software-architecture/practical/decisions",
                },
              ],
            },
            {
              label: "The Future of Architecture",
              items: [
                {
                  label: "Current & Future Trends",
                  slug: "software-architecture/future/current",
                },
                {
                  label: "Software Architect's Role",
                  slug: "software-architecture/future/role",
                },
                {
                  label: "Course Recap",
                  slug: "software-architecture/future/recap",
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
                  label: "Welcome to Database",
                  slug: "relational-database/introduction/welcome-to-database",
                },
                {
                  label: "Types of Databases",
                  slug: "relational-database/introduction/types-of-databases",
                },
                {
                  label: "Relational Database",
                  slug: "relational-database/introduction/relational-database",
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
            {
              label: "SQL",
              items: [
                {
                  label: "SQL",
                  slug: "relational-database/sql/what-is-sql",
                },
                {
                  label: "SQL Basic Types",
                  slug: "relational-database/sql/sql-types",
                },
                {
                  label: "Querying Data",
                  slug: "relational-database/sql/querying-data",
                },
                {
                  label: "Filtering and Sorting Data",
                  slug: "relational-database/sql/filter-and-sort-data",
                },
                {
                  label: "Joining Tables",
                  slug: "relational-database/sql/join-tables",
                },
                {
                  label: "Data Aggregation and Grouping",
                  slug: "relational-database/sql/aggregate-and-group",
                },
                {
                  label: "Subqueries and CTEs",
                  slug: "relational-database/sql/subqueries-cte",
                },
                {
                  label: "Data Manipulation Language (DML)",
                  slug: "relational-database/sql/modifying-data",
                },
                {
                  label: "Data Definition Language (DDL)",
                  slug: "relational-database/sql/ddl",
                },
                {
                  label: "Advanced Topics",
                  slug: "relational-database/sql/advanced-topic",
                },
              ],
            },
          ],
        },
        {
          label: "Frontend Architecture Patterns",
          items: [
            {
              label: "Introduction",
              items: [
                {
                  label: "What is Frontend Architecture?",
                  slug: "fe-architecture/introduction/welcome",
                },
              ],
            },
            {
              label: "Monolithic Architecture",
              items: [
                {
                  label: "What is Monolithic Architecture?",
                  slug: "fe-architecture/monolithic/monolithic",
                },
                {
                  label: "Advantages & Disadvantages",
                  slug: "fe-architecture/monolithic/advantages",
                },
                {
                  label: "Monolithic in Modern Frameworks",
                  slug: "fe-architecture/monolithic/modern",
                },
              ],
            },

            {
              label: "Component-Based Architecture",
              items: [
                {
                  label: "Component-Based Architecture",
                  slug: "fe-architecture/component/component-based",
                },
                {
                  label: "Advantages & Disadvantages",
                  slug: "fe-architecture/component/advantages",
                },
              ],
            },
            {
              label: "MV* Architecture (MVC, MVVM, MVP)",
              items: [
                {
                  label: "Introduction to MV*",
                  slug: "fe-architecture/mv-star/intro",
                },
                {
                  label: "Comparison",
                  slug: "fe-architecture/mv-star/patterns-comparison",
                },
              ],
            },
            {
              label: "Flux/Redux Architecture",
              items: [
                {
                  label: "Flux Architecture",
                  slug: "fe-architecture/redux/flux",
                },
                {
                  label: "Benefits",
                  slug: "fe-architecture/redux/benefits",
                },
              ],
            },
            {
              label: "Micro-Frontend Architecture",
              items: [
                {
                  label: "Micro-Frontend Architecture",
                  slug: "fe-architecture/micro-frontend/intro",
                },
                {
                  label: "Benefits",
                  slug: "fe-architecture/micro-frontend/benefits",
                },
              ],
            },
            {
              label: "Modular Architecture",
              items: [
                {
                  label: "Modular Architecture",
                  slug: "fe-architecture/modular/intro",
                },
                {
                  label: "Benefits",
                  slug: "fe-architecture/modular/benefits",
                },
              ],
            },
          ],
        },

        {
          label: "HTML",
          items: [
            {
              label: "HTML Introduction",
              items: [
                {
                  label: "What is HTML?",
                  slug: "html/introduction/welcome-to-html",
                },
                {
                  label: "Setting up Your Editor",
                  slug: "html/introduction/editor",
                },
              ],
            },
            {
              label: "Basic HTML Structure",
              items: [
                {
                  label: "Simple HTML Document",
                  slug: "html/structure/simple",
                },
                {
                  label: "The <head> Section",
                  slug: "html/structure/head",
                },
                {
                  label: "The <body> Section",
                  slug: "html/structure/body",
                },
              ],
            },
            {
              label: "Text & Formatting",
              items: [
                {
                  label: "Headings & Paragraphs",
                  slug: "html/texts/headings",
                },
                {
                  label: "Line Breaks, Horizontal Rules & Text Formatting",
                  slug: "html/texts/line",
                },
                {
                  label: "Lists",
                  slug: "html/texts/lists",
                },
              ],
            },

            {
              label: "Links & Navigation",
              items: [
                {
                  label: "Links",
                  slug: "html/links/links",
                },
                {
                  label: "Images as Links",
                  slug: "html/links/images",
                },
              ],
            },
            {
              label: "Images & Media",
              items: [
                {
                  label: "Images",
                  slug: "html/media/images",
                },
                {
                  label: "Videos & Audios",
                  slug: "html/media/videos",
                },
              ],
            },
            {
              label: "Table",
              items: [
                {
                  label: "Table Introduction",
                  slug: "html/table/table-intro",
                },
                {
                  label: "Merging Cells",
                  slug: "html/table/merging-cells",
                },
              ],
            },
            {
              label: "Forms & Input",
              items: [
                {
                  label: "Form Introduction",
                  slug: "html/form/form-intro",
                },
                {
                  label: "Dropdowns & Options",
                  slug: "html/form/dropdown",
                },
              ],
            },
            {
              label: "Semantic HTML",
              items: [
                {
                  label: "Semantic HTML Introduction",
                  slug: "html/semantic/intro",
                },
                {
                  label: "Benefits of Semantic HTML",
                  slug: "html/semantic/benefits",
                },
              ],
            },
            {
              label: "HTML Attributes & Best Practices",
              items: [
                {
                  label: "Attributes",
                  slug: "html/attributes/intro",
                },
                {
                  label: "HTML Best Practices",
                  slug: "html/attributes/best-practices",
                },
              ],
            },
            {
              label: "HTML 5 Features",
              items: [
                {
                  label: "New Input Types",
                  slug: "html/html5/input",
                },
                {
                  label: "Other Elements",
                  slug: "html/html5/other",
                },
              ],
            },
            {
              label: "Putting It All Together",
              items: [
                {
                  label: "Structure of a Webpage",
                  slug: "html/together/structure",
                },
              ],
            },
            {
              label: "Next Steps",
              items: [
                {
                  label: "Next Steps",
                  slug: "html/next/steps",
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
    plugins: [
      // @ts-ignore - Type mismatch between Vite plugin versions
      tailwindcss(),
    ],
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
