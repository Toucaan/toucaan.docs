import React from "react";
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function HomePageMetadata(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const imageUrl = useBaseUrl("/img/meta-data-image-wave.png");
  const fullImageUrl = `https://toucaan.com${imageUrl}`;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{siteConfig.title} | Intrinsic Design for Modern Web Apps</title>
      <meta name="title" content={`${siteConfig.title} | Intrinsic Design for Modern Web Apps`} />
      <meta name="description" content={`${siteConfig.tagline} Build responsive, accessible web applications with Toucaan - a modern CSS framework focused on intrinsic design principles.`} />
      
      {/* Enhanced Keywords */}
      <meta name="keywords" content="css framework, intrinsic design, responsive web design, mobile-first, progressive web apps, vanilla css, css methodology, web development, frontend framework, stack-agnostic css" />
      
      {/* Language and Geographic Metadata */}
      <meta name="language" content="English" />
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="Global" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://toucaan.com" />
      <meta property="og:site_name" content="Toucaan CSS Framework" />
      <meta property="og:title" content={`${siteConfig.title} | Intrinsic Design for Modern Web Apps`} />
      <meta property="og:description" content={`${siteConfig.tagline} Build responsive, accessible web applications with Toucaan.`} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:secure_url" content={fullImageUrl} />
      <meta property="og:image:alt" content="Toucaan CSS Framework - Intrinsic Design" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://toucaan.com/" />
      <meta name="twitter:site" content="@toucaancss" />
      <meta name="twitter:creator" content="@toucaancss" />
      <meta name="twitter:title" content={`${siteConfig.title} | Intrinsic Design`} />
      <meta name="twitter:description" content={siteConfig.tagline} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content="Toucaan CSS Framework - Intrinsic Design" />
      
      {/* Additional SEO */}
      <meta name="author" content="Red Goose, Inc." />
      <meta name="publisher" content="Red Goose, Inc." />
      <meta name="copyright" content={`Red Goose Inc., Copyright © ${new Date().getFullYear()}`} />
      <meta name="rating" content="General" />
      <meta name="distribution" content="global" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href="https://toucaan.com" />
      
      {/* Alternative URLs for internationalization (future-ready) */}
      <link rel="alternate" hrefLang="en" href="https://toucaan.com" />
      <link rel="alternate" hrefLang="x-default" href="https://toucaan.com" />
      
      {/* Icons and Manifest */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      
      {/* Theme and Application */}
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Toucaan" />
      
      {/* Schema.org JSON-LD for better SEO */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Toucaan CSS Framework",
          "applicationCategory": "DeveloperApplication",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "description": siteConfig.tagline,
          "url": "https://toucaan.com",
          "author": {
            "@type": "Organization",
            "name": "Red Goose, Inc.",
            "url": "https://goose.red"
          },
          "operatingSystem": "Any",
          "screenshot": fullImageUrl,
          "softwareVersion": "0.6.1",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "ratingCount": "1"
          }
        })}
      </script>
      
      {/* Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Red Goose, Inc.",
          "url": "https://toucaan.com",
          "logo": "https://toucaan.com/img/logo.svg",
          "sameAs": [
            "https://twitter.com/toucaancss",
            "https://github.com/Toucaan/toucaan",
            "https://stackoverflow.com/questions/tagged/toucaan"
          ]
        })}
      </script>
      
      {/* Website Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Toucaan CSS Framework",
          "url": "https://toucaan.com",
          "description": siteConfig.tagline,
          "inLanguage": "en-US",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://toucaan.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Head>
  );
}
