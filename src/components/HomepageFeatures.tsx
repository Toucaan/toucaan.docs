import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Intrinsic typography",
    image: "/img/undraw_toucaan_content.svg",
    description: (
      <>
        Scale type with geometric precision. Scope content to a component boundary and never worry about overflow again.
      </>
    ),
  },
  {
    title: "Universal distribution",
    image: "/img/undraw-mg-mundo.svg",
    description: (
      <>
        Design for <a href='https://bubblin.io/blog/the-new-landscape-of-the-web'>The New Web</a>. Serve thoughtful experiences to users on desktop, mobile, tablet, smartwatch, TVs, and EVs.
      </>
    ),
  },
  {
    title: "Accessibility first",
    image: "/img/undraw-mg-book.svg",
    description: (
      <>
        Build accessible interfaces using the intrinsic qualities of the medium. Drive meaningful UX/UI with deterministic layouts.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img
          className={styles.featureSvg}
          src={useBaseUrl(image)}
          alt={title}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className="header-pill">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <>
      <section className={clsx(styles.features)}>
        <div className={clsx(styles.featuresContainer, "margin--xl")}>
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
