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
import SponsorLogos from "@site/src/components/SponsorLogos";
import FOSSCreditLogos from "@site/src/components/FOSSCreditLogos";
import HeroTitleSecondary from "@site/src/components/HeroTitleSecondary";
import HomePageMetadata from "@site/src/components/HomePageMetadata";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero--primary", styles.heroBanner)}>
      <div className="container">
        <a href="http://toucaan.com">
          <picture className="hero__logo"></picture>
        </a>
        <h1 className="hero__title">Meet Intrinsic Design with <span className="fascinate">Toucaan</span>.</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className="hero__subsubtitle">(Version 0.6.0) </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started"
          >
            Get started →
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
          title="Create apps that belong to the user's device."
          ctaText="Start from basics. 📖"
          ctaLink="/docs/category/core-concepts"
        />
        <SponsorLogos />
        <FOSSCreditLogos />
      </main>
    </Layout>
  );
}
