import React from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./ConferenceTalkLogos.module.css";

type LogoItem = {
  imageSrc: string;
  alt: string;
  url: string;
};

const LogoList: LogoItem[] = [
  {
    imageSrc: "/img/logos/goose.png",
    alt: "Red Goose",
    url: "https://goose.red"
  },
  {
    imageSrc: "/img/logos/bubblin.png",
    alt: "Bubblin Superbooks",
    url: "https://bubblin.io"
  },
  // {
  //   imageSrc: "/img/logos/drupalcon-logo.png",
  //   alt: "DrupalCon",
  // },
  // {
  //   imageSrc: "/img/logos/oss-summit-europe-logo.png",
  //   alt: "Open Source Summit Europe",
  // },
];

export default function ConferenceTalkLogos(): JSX.Element {
  return (
    <section className="container hide-on-mobile">
      <p className={styles.title}>Based on on-going research in the open and at</p>
      <div
        className={clsx(styles.logoContainer, "container", "padding-horiz-md")}
      >
        <div className={styles.logos}>
          {LogoList.map(({ imageSrc, alt, url }: LogoItem, idx) => {
            return (
              <div key={alt}>
                <a href={url}>
                <img
                  className={styles.logo}
                  src={useBaseUrl(imageSrc)}
                  alt={alt}
                />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
