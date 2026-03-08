/**
 * Copyright (c) Red Goose, Inc. and Developer Community.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import WaveBottomShapeDivider from "@site/src/components/WaveBottomShapeDivider";
import WaveTopShapeDivider from "@site/src/components/WaveTopShapeDivider";
import HeroTitleSecondary from "@site/src/components/HeroTitleSecondary";
import HomePageMetadata from "@site/src/components/HomePageMetadata";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero--primary", styles.heroBanner)}>
      <div className="container">
        <a href="https://toucaan.com" aria-label="Toucaan CSS Framework homepage">
          <img
            className="hero__logo"
            src="/img/logo.svg"
            alt="Toucaan CSS Framework logo"
            width="120"
            height="120"
          />
        </a>
        <h1 className="hero__title">
          Meet Intrinsic Design with{" "}
          <span className="fascinate">Toucaan</span>.
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started"
          >
            Get started →
          </Link>
          <Link
            className="button button--outline button--lg margin-left--md"
            to="/docs/category/core-concepts"
          >
            Core concepts
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomePageMetadata />
      <HomepageHeader />
      <main>
        <WaveTopShapeDivider />
        <HomepageFeatures />
        <WaveBottomShapeDivider />
        <HeroTitleSecondary
          title="Build apps that feel native to every device."
          subtitle="From smartwatches to electric vehicles — Toucaan's intrinsic approach adapts your UI to the medium, not just the viewport."
          ctaText="Learn the fundamentals"
          ctaLink="/docs/category/core-concepts"
        />
      </main>
    </Layout>
  );
}
