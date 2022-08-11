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

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Toucaan CSS Framework',
  tagline: 'Stack-Agnostic Vanilla CSS Framework for Mobile Apps and The Web.',
  url: 'https://toucaan.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'toucaan', // Usually your GitHub org/user name.
  // projectName: 'toucaan.docs', // Usually your repo name.

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
            'https://github.com/Toucaan/toucaan.docs/blob/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Toucaan/toucaan.docs/blob/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Toucaan',
        logo: {
          alt: 'Toucaan CSS Framework Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: 'blog',
            label: 'Blog',
            position: 'left',
          },
          // Please keep GitHub link to the right for consistency.
          {
            href: 'https://github.com/Toucaan/toucaan',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Style Guide',
                to: 'docs/intro',
              },
              {
                label: 'Fundamentals',
                to: 'docs/category/toucaan---basics',
              },
              {
                label: 'The book',
                to: 'https://bubblin.io/cover/the-toucaan-framework-by-marvin-danig#frontmatter',
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
                href: 'https://goose.red/team',
              },

            ],
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
            ],
          },
          {
            title: 'Legal',
            // Please do not remove the privacy and terms, it's a legal requirement.
            items: [
              {
                label: 'License',
                href: 'https://github.com/Toucaan/toucaan/blob/master/LICENSE.md',
              },
            ],
          },
        ],
        // logo: {
        //   alt: 'Red Goose Community',
        //   // This default includes a positive & negative version, allowing for
        //   // appropriate use depending on your site's style.
        //   src: '/img/redgoose.svg',
        //   href: 'https://goose.red',
        // },

        // Please do not remove the credits, help to publicize Toucaan :)
        copyright: `Red Goose, Inc. Copyright © ${new Date().getFullYear()}.`,
      },
    }),
};

module.exports = config;
