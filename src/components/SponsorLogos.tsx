import React from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./SponsorLogos.module.css";

type SponsorItem = {
  imageSrc: string;
  alt: string;
  url: string;
};


const SponsorList: SponsorItem[] = [
  {
    imageSrc: "/img/logos/redgoose-logo-sponsor.svg",
    alt: "Red Goose",
    url: "https://goose.red"
  },
  {
    imageSrc: "/img/logos/bubblin-logo-sponsor.png",
    alt: "Bubblin Superbooks",
    url: "https://bubblin.io"
  },
];

export default function SponsorLogos(): JSX.Element {
  return (
    <section className="container hide-on-mobile">
      <p className={styles.title}>Sponsors: </p>
      <div className={clsx(styles.logoContainer, "container", "padding-horiz-md")} >
        <div className={styles.logos}>
          {SponsorList.map(({ imageSrc, alt, url }: SponsorItem, idx) => {
            return (
              <div key={alt}>
                <a href={url}>
                <img
                  className={styles.logo}
                  src={useBaseUrl(imageSrc)}
                  alt={alt}
                />
                {/* <label>{alt}</label> */}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
