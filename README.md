# တက္ကသိုလ် (Takkatho) - Myanmar Learning Platform

[![Live Site](https://img.shields.io/badge/Live%20Site-takkatho.vercel.app-blue?style=for-the-badge&logo=vercel)](https://takkatho.vercel.app/)
[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-orange?style=for-the-badge&logo=astro)](https://astro.build)
[![Built with Starlight](https://img.shields.io/badge/Built%20with-Starlight-purple?style=for-the-badge)](https://starlight.astro.build)

> **မိမိဘာသာစကားဖြင့် နက်နက်ရှိုင်းရှိုင်းနားလည်အောင် လေ့လာပါ။**

A modern, sleek learning platform designed specifically for Myanmar developers and tech enthusiasts. Learn complex programming concepts explained simply in Myanmar language.

## 🌟 Features

### 📚 **Comprehensive Course Library**

- **Advanced TypeScript** - အဆင့်မြင့် TypeScript သဘောတရားများ
- **WebSocket Technology** - Real-time communication နည်းပညာ
- **Git Version Control** - Code management နှင့် teamwork
- **Web Performance** - Website optimization techniques
- **Software Architecture** - System design principles
- **Relational Database** - Database design နှင့် SQL

### 🎨 **Modern Design**

- Clean, minimalist UI/UX design
- Mobile-first responsive layout
- Beautiful muted color palette
- Smooth animations and transitions
- Intuitive navigation experience

### 🌐 **Myanmar Language Support**

- Complete content in Myanmar language
- Cultural context and local examples
- Removes language barriers for better understanding
- Myanmar font optimization (Noto Sans Myanmar)

### ⚡ **Technical Excellence**

- Built with Astro for optimal performance
- Starlight documentation framework
- TailwindCSS for modern styling
- Vercel deployment for fast global delivery
- SEO optimized and accessible

## 🚀 Live Demo

Visit the live site: **[https://takkatho.vercel.app/](https://takkatho.vercel.app/)**

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Modern static site generator
- **Documentation**: [Starlight](https://starlight.astro.build/) - Documentation framework
- **Styling**: [TailwindCSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Deployment**: [Vercel](https://vercel.com/) - Edge deployment platform
- **Analytics**: Vercel Analytics & Speed Insights
- **Fonts**: Noto Sans Myanmar for optimal Myanmar text rendering

## 📁 Project Structure

```
takkatho/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   ├── config/
│   │   ├── sidebar.mjs    # Lesson order for every course; add new lessons here
│   │   └── site.mjs       # Canonical origin (www.takkatho.dev), name, social links
│   ├── content/
│   │   ├── docs/          # Course content (MDX files)
│   │   └── i18n/my.json   # Optional Burmese overrides for Starlight's interface text
│   ├── components/        # Reusable components (YouTube.astro for videos)
│   ├── data/
│   │   └── cheatsheets.ts # Cheat sheet commands for /cheatsheets
│   ├── layouts/           # Page layouts
│   ├── lib/
│   │   └── course-stats.mjs # Lesson counts and course links, derived from the sidebar
│   └── styles/
│       └── global.css     # Global styles and design system
├── scripts/
│   ├── check-build.mjs    # Post-build checks; runs as part of npm run build
│   └── generate-favicons.mjs # PNG icons from public/favicon.svg (npm run favicons)
├── astro.config.mjs       # Astro configuration (head tags, redirects, integrations)
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 26 (see `.nvmrc`; with nvm, run `nvm install` then `nvm use`). Astro 7 needs at least 22.23.4, and Vercel builds this site on Node 26.
- npm. The lockfile is `package-lock.json`, the same one Vercel installs from, so avoid other package managers.
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/WaiyanPhyoaung/takkatho.git
   cd takkatho
   ```

2. **Install dependencies** exactly as locked

   ```bash
   npm ci
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser** at `http://localhost:4321`

## 📜 Available Scripts

| Command            | Action                                                                     |
| ------------------ | -------------------------------------------------------------------------- |
| `npm run dev`      | Start the development server at `localhost:4321`                           |
| `npm run build`    | Build to `./dist/`, then run `scripts/check-build.mjs` on the output       |
| `npm run check`    | Re-run the build checks on an existing `./dist/` without rebuilding        |
| `npm run preview`  | Serve the production build locally                                         |
| `npm run favicons` | Regenerate the PNG icons in `public/` from `public/favicon.svg`            |

`npm run build` fails if a check fails, and so does the Vercel deploy, which keeps the last good version live. The checks cover the problems this site has had: raw interface keys showing instead of text, course cards missing from the server-rendered `/courses` page, URLs on the wrong host, raw YouTube iframes, broken `/src/` image paths, and missing course redirects.

## 🎯 Course Categories

### 🔥 **Available Now**

- **Advanced TypeScript** - Type system, generics, advanced patterns
- **WebSocket Technology** - Real-time web applications
- **Git Version Control** - Version management and collaboration
- **Web Performance** - Optimization techniques and best practices
- **Software Architecture** - System design and patterns
- **Relational Database** - Database design and SQL mastery

### 🚀 **Coming Soon**

- **HTML Forms** - Modern form handling and validation
- **JavaScript ES6+** - Modern JavaScript features and patterns
- **Advanced CSS** - Grid, Flexbox, and responsive design

## 🎨 Design System

### Color Palette

- **Primary**: Blue (#2563eb) - Professional and trustworthy
- **Neutrals**: Slate grays - Clean and minimal
- **Background**: White/Dark slate - High contrast and readability

### Typography

- **Primary Font**: Noto Sans Myanmar - Optimized for Myanmar text
- **Fallback**: System fonts for optimal performance
- **Hierarchy**: Clear heading structure with proper spacing

## 🌍 Contributing

We welcome contributions from the Myanmar developer community!

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Content Guidelines

- Write content in clear, understandable Myanmar
- Include practical examples and code snippets
- Follow the existing content structure
- Test all code examples before submitting

## 📊 Performance

- **Lighthouse Score**: 100/100 (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Excellent ratings across all metrics
- **Bundle Size**: Optimized for fast loading
- **Mobile Performance**: Fully responsive and mobile-optimized

## 🔧 Configuration

### Astro Configuration

The site uses Astro with Starlight for documentation. Key configurations:

- **Starlight Theme**: Custom theme with Myanmar language support
- **TailwindCSS**: Integrated for styling
- **Vercel Adapter**: Optimized for Vercel deployment

### Environment Variables

No environment variables required for basic setup.

## 📱 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **Myanmar Fonts**: Optimized rendering across all platforms

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Community

- **Website**: [https://takkatho.vercel.app/](https://takkatho.vercel.app/)
- **Issues**: [GitHub Issues](https://github.com/yourusername/takkatho/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/takkatho/discussions)

## 🙏 Acknowledgments

- **Astro Team** - For the amazing static site generator
- **Starlight Team** - For the excellent documentation framework
- **Myanmar Developer Community** - For inspiration and feedback
- **Vercel** - For hosting and deployment platform

---

<div align="center">

**Made with ❤️ for Myanmar Developers**

[Visit Site](https://takkatho.vercel.app/) • [Report Bug](https://github.com/yourusername/takkatho/issues) • [Request Feature](https://github.com/yourusername/takkatho/issues)

</div>
