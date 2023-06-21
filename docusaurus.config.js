/**
 * Copyright (c) Red Goose, Inc. and Developer Community.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Toucaan CSS Framework',
  tagline: 'A stack-agnostic vanilla styling (css) framework for universal progressive applications.',
  url: 'https://toucaan.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'toucaan', // Usually your GitHub org/user name.
  // projectName: 'toucaan.docs', // Usually your repo name.
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true
      }
    ]
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Toucaan/toucaan.docs/blob/master/'
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Toucaan/toucaan.docs/blob/master/',
          blogTitle: 'The Intrinsic Design & CSS Blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        }
      }),
    ]
  ],
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString'
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/toucaan.png'
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json' // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)'
          }
        ]
      }
    ]
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Toucaan',
        logo: {
          alt: 'Toucaan CSS Framework Logo',
          src: 'img/logo.svg'
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started',
            position: 'left',
            label: 'Documentation'
          },
          {
            to: 'blog',
            label: 'Blog',
            position: 'left'
          },
          // {
          //   to: 'community',
          //   docId: 'support',
          //   label: 'Community',
          //   position: 'left'
          // },
          // Please keep GitHub link to the right for consistency.
          {
            href: 'https://github.com/Toucaan/toucaan',
            position: 'right',
            className: 'header-github-link'
          }
        ]
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn & Build',
            items: [
              {
                label: 'Getting Started',
                to: 'docs/getting-started'
              },
              {
                label: 'Core Concepts',
                to: 'docs/category/core-concepts'
              },
              {
                label: 'Web Design',
                to: 'docs/category/web-design'
              },
              {
                label: 'App Stores',
                to: 'docs/category/native-apps'
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/toucaan',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/toucaancss',
              },
              {
                label: 'Team',
                href: 'https://goose.red/team'
              },
              {
                label: 'Sponsorship',
                to: 'https://github.com/sponsors/marvindanig',
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Toucaan/toucaan',
              },
              {
                label: 'The Toucaan Book (On Pre-order)',
                to: 'https://bubblin.io/cover/the-toucaan-framework-by-marvin-danig#frontmatter',
              }

            ],
          },
          {
            title: 'Legal',
            // Please do not remove the privacy and terms, it's a legal requirement.
            items: [
              {
                label: 'License',
                href: 'https://github.com/Toucaan/toucaan.research/blob/master/LICENSE.md',
              }
            ]
          }
        ],
        // logo: {
        //   alt: 'Red Goose Community',
        //   // This default includes a positive & negative version, allowing for
        //   // appropriate use depending on your site's style.
        //   src: '/img/redgoose.svg',
        //   href: 'https://goose.red',
        // },

        // Please do not remove the credits, help to publicize Toucaan :)
        copyright: `Red Goose Inc., Copyright © ${new Date().getFullYear()}.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme
      },
      colorMode: {
        disableSwitch: false
      },
      metadata: [
        {
          name: 'keywords',
          content: 'css4, css, blog, intrinsic, app, design, system'
        }
      ]
    })
}

module.exports = config


