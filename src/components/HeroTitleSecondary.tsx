import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./HeroTitleSecondary.module.css";

type HeroTitleSecondaryProps = {
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaLink: string;
};

export default function HeroTitleSecondary({
  title,
  subtitle,
  ctaText,
  ctaLink,
}: HeroTitleSecondaryProps): JSX.Element {
  return (
    <section
      className={clsx(styles.heroBanner, "hero--primary")}
      aria-label="Secondary call to action"
    >
      <div className={clsx(styles.containerHero, "container")}>
        <h2 className={clsx(styles.title, "hero__title")}>{title}</h2>
        {subtitle && (
          <p className={styles.subtitle}>{subtitle}</p>
        )}
        <div className={clsx(styles.buttons, "margin-top--lg")}>
          <Link className="button button--secondary button--lg" to={ctaLink}>
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
}
