# Toucaan CSS Framework Documentation

[![Netlify Status](https://api.netlify.com/api/v1/badges/fdf946bd-e24e-4a53-9c1d-ef0516c99d55/deploy-status)](https://app.netlify.com/sites/inspiring-clafoutis-2f5f61/deploys)
![Node Version](https://img.shields.io/badge/node-%3E%3D23.0.0-brightgreen)
![Docusaurus](https://img.shields.io/badge/Docusaurus-3.9.2-blue)

Official documentation and blog for [Toucaan CSS Framework](https://toucaan.com) - a stack-agnostic vanilla styling framework for modern web applications focused on intrinsic design principles.

🌐 **Live Site**: [https://toucaan.com](https://toucaan.com)

## 📖 About

This repository contains the documentation website for Toucaan, including:

- **Comprehensive Documentation**: Getting started guides, core concepts, and advanced topics
- **Blog**: Articles about intrinsic design, CSS methodologies, and web development
- **Examples**: Real-world use cases and implementation patterns
- **API Reference**: Complete framework API documentation

## 🚀 Quick Start

### Prerequisites

- Node.js >= 23.0.0
- Yarn package manager

### Installation

```bash
yarn install
```

### Local Development

```bash
yarn start
```

This command starts a local development server at `http://localhost:3000` and opens a browser window. Most changes are reflected live without restarting the server.

### Build

```bash
yarn build
```

Generates static content into the `build` directory that can be served using any static hosting service.

### Serve Production Build Locally

```bash
yarn serve
```

Serves the production build locally for testing.

## 📝 Contributing

We welcome contributions from the community! Here's how you can help:

### Documentation Improvements

- Fix typos, improve clarity, or add missing information
- Add code examples and use cases
- Improve accessibility and SEO
- Translate documentation (future)

### Blog Posts

We accept guest blog posts from CSS enthusiasts and web developers:

- Articles about intrinsic design patterns
- Real-world implementation experiences
- CSS best practices and methodologies
- Framework comparisons and migrations

To submit a blog post, please:
1. Fork this repository
2. Create a new branch (`git checkout -b blog/your-topic`)
3. Add your post in `blog/YYYY-MM-DD-your-title.md`
4. Submit a pull request

### Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow existing code formatting
- Run linting: `yarn lint`
- Format code: `yarn format`

## 🛠️ Tech Stack

- **Framework**: [Docusaurus 3.9.2](https://docusaurus.io/)
- **UI Library**: React 19.2.3
- **Language**: TypeScript 5.9.3
- **Styling**: CSS Modules + Custom CSS
- **Search**: Local search with [@easyops-cn/docusaurus-search-local](https://github.com/easyops-cn/docusaurus-search-local)
- **PWA**: Progressive Web App support
- **Hosting**: [Netlify](https://www.netlify.com/)

## 📁 Project Structure

```
toucaan.docs/
├── blog/                # Blog posts
├── docs/                # Documentation pages
├── src/
│   ├── components/      # React components
│   ├── css/            # Custom styles
│   └── pages/          # Custom pages
├── static/             # Static assets
│   ├── img/            # Images
│   └── .well-known/    # Security and metadata files
├── docusaurus.config.js # Site configuration
├── sidebars.js         # Documentation sidebar
└── package.json        # Dependencies
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `yarn start` | Start development server |
| `yarn build` | Build production bundle |
| `yarn serve` | Serve production build locally |
| `yarn clear` | Clear Docusaurus cache |
| `yarn lint` | Run ESLint and Stylelint |
| `yarn format` | Format code with Prettier |
| `yarn format:diff` | Check code formatting |

## 🌐 SEO & Metadata

This site includes comprehensive SEO optimization:

- **Structured Data**: Schema.org JSON-LD markup
- **Open Graph**: Facebook and social media optimization
- **Twitter Cards**: Enhanced Twitter sharing
- **Sitemap**: Automatically generated XML sitemap
- **Robots.txt**: Search engine crawler directives
- **PWA Manifest**: Progressive Web App configuration
- **Geolocation**: Geographic metadata for regional targeting

## 📄 License

This documentation is licensed under the terms specified in the [LICENSE](LICENSE) file.

## 🤝 Community

- **GitHub**: [Toucaan/toucaan](https://github.com/Toucaan/toucaan)
- **Twitter**: [@toucaancss](https://twitter.com/toucaancss)
- **Stack Overflow**: [toucaan tag](https://stackoverflow.com/questions/tagged/toucaan)
- **Sponsorship**: [GitHub Sponsors](https://github.com/sponsors/marvindanig)

## 💡 Support

If you have questions or need help:

1. Check the [documentation](https://toucaan.com/docs)
2. Search [existing issues](https://github.com/Toucaan/toucaan.docs/issues)
3. Open a [new issue](https://github.com/Toucaan/toucaan.docs/issues/new)
4. Ask on [Stack Overflow](https://stackoverflow.com/questions/tagged/toucaan)

## 🙏 Acknowledgments

- Built with [Docusaurus](https://docusaurus.io/) by Meta Open Source
- Hosted on [Netlify](https://www.netlify.com/)
- Maintained by [Red Goose, Inc.](https://goose.red) and the open source community

---

**Made with ❤️ for the web development community**
