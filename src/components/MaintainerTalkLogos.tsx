import React from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./MaintainerTalkLogos.module.css";

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
  {
    imageSrc: "/img/logos/CF_logo_horizontal_blktype.jpg",
    alt: "Cloudflare",
    url: "https://cloudflare.com/"
  },
  {
    imageSrc: "/img/logos/Netlify_logo.svg",
    alt: "Netlify",
    url: "https://netlify.com/"
  },
  {
    imageSrc: "/img/logos/GitHub_Logo.png",
    alt: "Github",
    url: "https://github.com/"
  },
  {
    imageSrc: "/img/logos/marvin.jpg",
    alt: "Marvin Danig",
    url: "https://github.com/sponsors/marvindanig"
  },

];

export default function MaintainerTalkLogos(): JSX.Element {
  return (
    <section className="container hide-on-mobile">
      <p className={styles.title}>Sponsors & Credits: </p>
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
