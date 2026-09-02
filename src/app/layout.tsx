import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { site } from "@/content/site";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const sans = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

const description =
  "A King Eventos é uma empresa de organização de eventos em Sorocaba - SP. Casamentos, formaturas, aniversários, eventos corporativos e festas com planejamento e cuidado em cada detalhe.";

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: "King Eventos | Organização de eventos em Sorocaba - SP",
    template: "%s | King Eventos",
  },
  description,
  keywords: [
    "King Eventos",
    "organização de eventos em Sorocaba",
    "eventos em Sorocaba",
    "empresa de eventos em Sorocaba",
    "organização de festas em Sorocaba",
    "eventos corporativos em Sorocaba",
    "festas em Sorocaba",
    "casamento em Sorocaba",
    "formatura em Sorocaba",
  ],
  authors: [{ name: "King Eventos" }],
  creator: "King Eventos",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.siteUrl,
    siteName: "King Eventos",
    title: "King Eventos | Organização de eventos em Sorocaba - SP",
    description:
      "Transformamos momentos em experiências inesquecíveis. Organização de eventos em Sorocaba - SP.",
  },
  twitter: {
    card: "summary_large_image",
    title: "King Eventos | Organização de eventos em Sorocaba - SP",
    description:
      "Transformamos momentos em experiências inesquecíveis. Organização de eventos em Sorocaba - SP.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EventPlanner",
  name: site.name,
  description: "Empresa de organização de eventos em Sorocaba - SP.",
  url: site.siteUrl,
  telephone: site.phone.display,
  image: `${site.siteUrl}/opengraph-image`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Gildo Scareli, 72",
    addressLocality: "Sorocaba",
    addressRegion: "SP",
    postalCode: "18055-028",
    addressCountry: "BR",
  },
  areaServed: "Sorocaba e região",
  knowsLanguage: "pt-BR",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${sans.variable}`}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
