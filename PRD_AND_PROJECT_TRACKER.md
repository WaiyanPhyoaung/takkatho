# 🎓 Takkatho (တက္ကသိုလ်) — Product Requirements Document (PRD) & Master Project Tracker

> **Document Status**: Living Document (Updated: August 2026)  
> **Version**: 1.1.0  
> **Live URL**: [https://takkatho.dev](https://takkatho.dev)  
> **Repository**: [github.com/WaiyanPhyoaung/takkatho](https://github.com/WaiyanPhyoaung/takkatho)

---

## 1. Executive Summary & Vision

**တက္ကသိုလ် (Takkatho)** သည် မြန်မာနိုင်ငံရှိ Developer များနှင့် Tech Enthusiasts များအတွက် **Software Engineering, Web Development, System Architecture, Databases, AI & Automation** အစရှိသည့် နည်းပညာဘာသာရပ်များကို မိမိမိခင်ဘာသာစကားဖြင့် နိုင်ငံတကာအဆင့်မီ နက်နက်ရှိုင်းရှိုင်း လေ့လာနိုင်စေရန် ဖန်တီးထားသော **Next-Generation Programming Learning Platform** ဖြစ်သည်။

### Core Philosophy
- **Authentic Engineering Depth**: Basic အဆင့်တွင်သာ မရပ်တန့်ဘဲ System Architecture, Performance Tuning, Distributed Systems အထိ Senior-level အသိပညာများကို ထည့်သွင်းသင်ကြားခြင်း။
- **Natural Myanmar Tech Tone**: အင်္ဂလိပ် Technical Terms များ (API, Docker, Microservices, Generics) ကို မူရင်းအတိုင်းထားပြီး သဘာဝကျကျ ရှင်းလင်းသော မြန်မာဘာသာစကားဖြင့် တင်ဆက်ခြင်း။
- **Zero Friction & Lightning Fast**: Astro Static Site Generation ဖြင့် 0ms latency နီးပါး မြန်ဆန်ပြီး SEO, PWA, Dark Mode အပြည့်အစုံ ပါဝင်ခြင်း။
- **Interactive First**: စာဖတ်ရုံသာမက Live Code Playground, Interactive Quizzes, နှင့် Guided Career Roadmaps များ ပါဝင်ခြင်း။

---

## 2. Technology Stack & Platform Architecture

| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Framework** | **Astro 5 + Starlight** | Content-driven docs များအတွက် Ultra-fast static generation, Zero JS footprint by default |
| **UI Components** | **React 19 + TypeScript** | Interactive widgets (Playground, Quiz, Modals, Listing Filters) တည်ဆောက်ရန် |
| **Styling** | **TailwindCSS 4 + Custom Design Tokens** | Modern Neo-dark/light theme, custom scrollbars, typography optimization |
| **Search Engine** | **Pagefind (Extended v1.3)** | Client-side zero-latency full-text offline-capable search |
| **Deployment** | **Vercel Edge Platform** | Global CDN, Web Analytics, Speed Insights, Static Asset Caching |
| **Typography** | **Noto Sans Myanmar + JetBrains Mono** | မြန်မာစာလုံးပေါင်း သပ်ရပ်မှုနှင့် Code Blocks များ ဖတ်ရှုရ လွယ်ကူမှု |

---

## 3. Current Platform Status & Content Audit

လက်ရှိတွင် Takkatho ပေါ်တွင် **ဘာသာရပ် ၂၃ ခု** နှင့် **သင်ခန်းစာပေါင်း ၃၇၅+ ခု** ကို အောင်မြင်စွာ တည်ဆောက် ထုတ်ဝေပြီး ဖြစ်ပါသည်။

### 📚 Course Library Breakdown

| Course Name | Category | Level | Lessons | Status | Key Topics Covered |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **HTML Fundamentals** | Web Basics | Beginner | 8 | ✅ Live | Semantic HTML5, Forms, Tables, Media, Best Practices |
| **CSS Mastery** | Styling | Beginner | 11 | ✅ Live | Box Model, Flexbox, Grid, Animations, Responsive Design |
| **Advanced CSS** | Styling | Advanced | 15 | ✅ Live | Container Queries, `@property`, Cascade Layers, View Transitions |
| **Interactive JavaScript** | Web Dev | Beginner | 9 | ✅ Live | DOM, Events, Async JS, Counter & Todo Projects, `<CodePlayground />` |
| **TypeScript** | Programming | Intermediate | 9 | ✅ Live | Types, Interfaces, Unions, Classes, Modules |
| **Advanced TypeScript** | Programming | Advanced | 25 | ✅ Live | Generics Constraints, `satisfies`, Utility Types, Mini Projects |
| **Python Programming** | Programming | Beginner | 8 | ✅ Live | Syntax, Data Structures, OOP, Error Handling |
| **Golang** | Systems / Backend | Intermediate | 10 | ✅ Live | Goroutines, Channels, Pointers, REST APIs |
| **Java Programming** | Enterprise / OOP | Beginner | 8 | ✅ Live | OOP Principles, Collections Framework, Exception Handling |
| **Node.js & Express** | Backend | Intermediate | 8 | ✅ Live | Event Loop, File System, REST APIs, Express Middleware |
| **Next.js (App Router)** | Full-Stack | Intermediate | 5 | ✅ Live | Server Components (RSC), Server Actions, Routing, Vercel Deploy |
| **SQL Masterclass** | Database | Beginner | 6 | ✅ Live | CRUD, WHERE Clause, ORDER BY, Aggregations, GROUP BY, JOINs |
| **Relational Database Design**| Database | Intermediate | 16 | ✅ Live | Normalization (1NF–5NF), Keys, Relationships, DDL/DML |
| **MongoDB (NoSQL)** | Database | Beginner | 5 | ✅ Live | Document model, Collections, CRUD, Aggregations, Atlas Cloud |
| **Data Structures & Algorithms**| Computer Science| Intermediate | 20 | ✅ Live | Big-O, Stacks, Queues, Binary Trees, Graphs, Sorting, DP |
| **Docker & Containers** | DevOps | Intermediate | 5 | ✅ Live | Images, Containers, Dockerfile, Docker Compose, Production Tips |
| **n8n Workflow Automation** | Automation | Beginner | 17 | ✅ Live | Webhooks, API Integrations, Telegram Bots, AI Nodes, Cron Triggers |
| **AI Proficiency for Devs** | Artificial Intelligence | Intermediate | 16 | ✅ Live | Prompt Engineering, AI Code Generation, Debugging, RAG, Security |
| **Git Version Control** | Tooling | Beginner | 20 | ✅ Live | Branching, Merge vs Rebase, Conflict Resolution, Reflog, Stashing |
| **WebSocket Technology** | Real-time | Intermediate | 12 | ✅ Live | TCP Handshake, HTTP Upgrade, Full-duplex messaging, Chat App |
| **Web Performance** | Optimization | Intermediate | 18 | ✅ Live | Core Web Vitals (LCP, CLS, INP), CDN, Caching, Bundle Splitting |
| **Frontend Architecture** | Architecture | Intermediate | 15 | ✅ Live | Component Architecture, Redux/Flux, Micro-frontends, Rendering |
| **Software Architecture** | Systems Design | Advanced | 22 | ✅ Live | Monolith vs Microservices, C4 Model, ADRs, Saga Pattern, CQRS |

---

## 4. Platform Capabilities & Interactive Features

### 1. Guided Career Roadmaps (`/roadmaps`)
- 🛣️ **Full-Stack Web Developer**: HTML → CSS → JS → TypeScript → Node.js → Next.js
- 🤖 **AI & Business Automation**: AI Proficiency → n8n Automation → Python → Docker
- 🏛️ **Backend & Systems Architect**: SQL → Relational DB Design → MongoDB → Web Performance → Software Architecture

### 2. Interactive Learning Components (`src/components/mdx/`)
- `<CodePlayground />`: Live HTML/CSS/JS Sandbox with tabbed editor, instant preview iframe, syntax coloring, reset & copy controls.
- `<Quiz />`: Multiple-choice assessment widget with instant scoring, answer feedback, and detailed explanations in Burmese.
- `<LessonCompletion />`: Client-side lesson progress tracking storing completion states in `localStorage`.

### 3. Global Full-Text Search
- Powered by Starlight + Pagefind indexing all 375+ lessons with Burmese and English search keyword recognition.

---

## 5. Recommended New Courses Pipeline (Ranked by Market Demand)

မြန်မာ Developer community ၏ လက်ရှိ လိုအပ်ချက်၊ နိုင်ငံတကာ အလုပ်အကိုင် ဈေးကွက် (Remote jobs) နှင့် 2026/2027 Tech Trends များကို အခြေခံ၍ အောက်ပါ သင်ရိုးများကို ဦးစားပေး အစီအစဉ်အလိုက် ထည့်သွင်းရန် အကြံပြုပါသည်:

```
┌──────────────────────────────────────────────────────────────────────────┐
│                   🎯 RECOMMENDED NEW COURSES PIPELINE                    │
├────────────┬─────────────────────────────────────────────┬───────────────┤
│ Priority   │ Course Title & Description                  │ Target Tier   │
├────────────┼─────────────────────────────────────────────┼───────────────┤
│ 🥇 High    │ 1. Linux, Cloud VPS & DevOps Fundamentals   │ Intermediate  │
│ 🥈 High    │ 2. Python for Data Science & Web Scraping   │ Beginner-Int  │
│ 🥉 Medium  │ 3. Modern AI Agents & LLM App Engineering   │ Intermediate  │
│ 4️⃣ Medium  │ 4. Modern Mobile App Dev (Flutter / RN)     │ Beginner-Int  │
│ 5️⃣ High    │ 5. Downloadable Cheat Sheets Hub (/cheats)  │ All Levels    │
└────────────┴─────────────────────────────────────────────┴───────────────┘
```

---

### Detailed Course Curricula for Next Additions:

### 🥇 1. Linux, Cloud VPS & DevOps Fundamentals (`/linux-devops`)
*အဘယ်ကြောင့် လိုအပ်သနည်း:* Backend, Docker, n8n Self-hosting, VPS Deployment များ ပြုလုပ်ရာတွင် Linux CLI နှင့် Server Management အခြေခံ မရှိမဖြစ် လိုအပ်သောကြောင့် ဖြစ်သည်။
- **Module 1: Linux CLI Essentials** (Terminal navigation, file permissions, `chmod`, `chown`, user management)
- **Module 2: Process & Package Management** (`systemctl`, `journalctl`, `apt`, `top`/`htop`, background jobs)
- **Module 3: Networking & Security** (SSH keys setup, UFW firewall, Ports, DNS records, Fail2ban)
- **Module 4: Nginx & Reverse Proxy** (Server blocks, reverse proxy to Node.js/Docker, SSL via Let's Encrypt Certbot)
- **Module 5: CI/CD with GitHub Actions** (Automated testing, building Docker images, auto-deploying to VPS)

---

### 🥈 2. Python for Data Science, Automation & Web Scraping (`/python-datascience`)
*အဘယ်ကြောင့် လိုအပ်သနည်း:* Python အခြေခံပြီးမြောက်ထားသူများ ဒေတာကိုင်တွယ်ခြင်းနှင့် Web Scraping ဖြင့် Automated Data Gathering ပြုလုပ်နိုင်ရန်။
- **Module 1: Data Manipulation with Pandas & NumPy** (DataFrames, Series, filtering, grouping, cleaning dirty data)
- **Module 2: Data Visualization** (Matplotlib & Seaborn visual charts)
- **Module 3: Web Scraping Mastery** (Requests, BeautifulSoup, handling tables & paginated data)
- **Module 4: Headless Browser Automation** (Playwright / Selenium for scraping dynamic JavaScript websites)
- **Module 5: Capstone Project** (Automated Price Tracker & Telegram Notification Bot)

---

### 🥉 3. Modern AI Agents & LLM Application Engineering (`/ai-agents`)
*အဘယ်ကြောင့် လိုအပ်သနည်း:* 2026 တွင် AI API integration နှင့် RAG Agents များသည် ခေတ်စားဆုံး software skills ဖြစ်လာသောကြောင့် ဖြစ်သည်။
- **Module 1: LLM API Foundations** (OpenAI / Gemini API, structured outputs, temperature, system instructions)
- **Module 2: Function Calling & Tool Use** (LLM မှ Database နှင့် External APIs များကို လှမ်းခေါ်စေခြင်း)
- **Module 3: Embeddings & Vector Databases** (ChromaDB / Pinecone, text chunking, semantic similarity search)
- **Module 4: Retrieval-Augmented Generation (RAG)** (PDF / Doc Q&A Agent with memory)
- **Module 5: Autonomous Multi-Agent Workflows** (LangGraph / CrewAI concepts and building practical agents)

---

### 4️⃣ 4. Quick Reference Cheat Sheets Hub (`/cheatsheets`)
*အဘယ်ကြောင့် လိုအပ်သနည်း:* Developer များ အလုပ်လုပ်ရာတွင် အလွယ်တကူ ကူးယူ ကြည့်ရှုနိုင်သော Visual Quick Reference Cards များ ဖြစ်သည်။
- **Git Cheat Sheet** (Common commands, undoing mistakes, interactive rebase)
- **Docker CLI & Compose Cheat Sheet**
- **SQL Queries & Joins Visual Sheet**
- **CSS Flexbox & Grid Visual Cheat Sheet**
- **Linux Terminal Command Reference**

---

## 6. Milestone Progress & Execution Roadmap

| Milestone | Target Feature / Task | Status | Target Timeline |
| :--- | :--- | :--- | :--- |
| **M1.0** | 23 Core Technical Courses (375+ lessons) | ✅ Completed | Completed |
| **M1.1** | Career Roadmaps (`/roadmaps`) | ✅ Completed | Completed |
| **M1.2** | Interactive `<CodePlayground />`, `<Quiz />`, `<LessonCompletion />` | ✅ Completed | Completed |
| **M1.3** | Course Cards Sync on `/courses` (Docker, Next.js, MongoDB, Linux) | ✅ Completed | Completed |
| **M1.4** | Linux & Cloud DevOps Course (`/linux-devops` 10 lessons) | ✅ Completed | Completed |
| **M1.5** | Visual Cheat Sheets Page (`/cheatsheets`) | ✅ Completed | Completed |
| **M1.6** | Python Data Science & Scraping Course (`/python-datascience`) | 🔄 Next Up | Sprint 4 |
| **M2.0** | Cloud Auth & Multi-device Progress Sync (Supabase / Clerk) | 💡 Future | Q4 2026 |

---

## 7. Editorial & Writing Quality Guidelines

Takkatho ရှိ သင်ခန်းစာအသစ်များ ရေးသားရာတွင် `myanmar-tech-writer` စံနှုန်းများကို အောက်ပါအတိုင်း တိကျစွာ လိုက်နာရမည်:
1. **Pronoun**: စာဖတ်သူ/လေ့လာသူကို အမြဲတမ်း "**ခင်ဗျား**" ဟု ရည်ညွှန်းသုံးစွဲရန်။
2. **Technical Terms**: Standard English technical terms များ (e.g. *API, Docker, Microservice, Prompt, Database, State, Props, Hook*) ကို မူရင်း English အတိုင်း ထားရှိရန်။
3. **Natural Phrasing**: တိုက်ရိုက် ဘာသာပြန်ခြင်း (Literal translation) မဟုတ်ဘဲ မြန်မာပြည်မှ Developer များ အလွယ်တကူ သဘောပေါက်နိုင်သော စကားပြောဟန်ဖြင့် ရေးသားရန်။
4. **Code Quality**: Code ဥပမာတိုင်းတွင် Comments များ၊ Visual Diagrams (Mermaid/SVG) များနှင့် Real-world analogies များ ထည့်သွင်းပေးရန်။
