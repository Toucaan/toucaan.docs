import React from "react";
import clsx from "clsx";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./FOSSCreditLogos.module.css";

type CreditItem = {
  imageSrc: string;
  alt: string;
};

const CreditList: CreditItem[] = [
  {
    imageSrc: "/img/logos/CF_logo_horizontal_blktype.jpg",
    alt: "Cloudflare"
  },
  {
    imageSrc: "/img/logos/Netlify_logo.svg",
    alt: "Netlify",
  },
  {
    imageSrc: "/img/logos/GitHub_Logo.png",
    alt: "Github",
  },
];


export default function FossCreditLogos(): JSX.Element {
  return (
    <section className="container hide-on-mobile">
      <p className={styles.title}>Hosting & Safety Credits: </p>
      <div className={clsx(styles.logoContainer, "container", "padding-horiz-md")} >
        <div className={styles.logos}>
          {CreditList.map(({ imageSrc, alt }: CreditItem, idx) => {
            return (
              <div key={alt}>
                <img
                  className={styles.logo}
                  src={useBaseUrl(imageSrc)}
                  alt={alt}
                />
                {/* <label>{alt}</label> */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
