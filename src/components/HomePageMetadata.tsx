import React from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function HomePageMetadata(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Head>
      <title>{siteConfig.title}</title>
      <meta name="title" content={siteConfig.title} />
      <meta name="description" content={siteConfig.tagline} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://toucaan.com"
      />
      <meta property="og:title" content={siteConfig.title} />
      <meta property="og:description" content={siteConfig.tagline} />
      <meta
        property="og:image"
        content={useBaseUrl("/img/meta-data-image-wave.png")}
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://toucaan.com/"
      />
      <meta property="twitter:title" content={siteConfig.title} />
      <meta property="twitter:description" content={siteConfig.tagline} />
      <meta
        property="twitter:image"
        content={useBaseUrl("/img/meta-data-image-wave.png")}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
}
