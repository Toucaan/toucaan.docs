import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

type FeatureItem = {
  title: string;
  image: string;
  altText: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Universal distribution",
    image: "/img/undraw-mg-mundo.svg",
    altText:
      "Illustration showing global web distribution across devices including desktop, mobile, tablet, and wearable screens",
    description: (
      <>
        Design for{" "}
        <a href="https://toucaan.com/blog/the-new-landscape-of-the-web">
          The New Web
        </a>
        . Ship thoughtful, device-aware experiences to desktop, mobile, tablet,
        watch, TV, and automotive displays—from a single codebase.
      </>
    ),
  },
  {
    title: "Deterministic control",
    image: "/img/typography.svg",
    altText:
      "Illustration of geometric typographic scaling with intrinsic block-scoped formulaic precision",
    description: (
      <>
        Scale type with geometric precision using block-scoped formulaic
        typography. Shape content according to component dimensions and paginate
        layouts in multiples of the Intrinsic Containing Block (ICB).
      </>
    ),
  },
  {
    title: "Accessibility first",
    image: "/img/undraw-mg-book.svg",
    altText:
      "Illustration of an open book representing accessible documentation and inclusive web interfaces",
    description: (
      <>
        Build accessible interfaces by leveraging the intrinsic qualities of
        each medium. Drive inclusive, meaningful UX with deterministic layouts
        that adapt to every user and every screen.
      </>
    ),
  },
];

function Feature({ title, image, altText, description }: FeatureItem) {
  return (
    <article className={clsx("col col--4", styles.featureCard)}>
      <div className="text--center">
        <img
          className={styles.featureSvg}
          src={useBaseUrl(image)}
          alt={altText}
          loading="lazy"
          width="200"
          height="200"
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className="header-pill">{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section
      className={clsx(styles.features)}
      aria-label="Key features of Toucaan CSS Framework"
    >
      <div className={clsx(styles.featuresContainer, "margin--xl")}>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
