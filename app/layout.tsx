import type { Metadata } from "next";
import "./globals.css";
import BackgroundMotion from "./components/BackgroundMotion";

export const metadata: Metadata = {
  metadataBase: new URL("https://3craft.digital"),
  title: {
    default: "3Craft Digital | Branding, Websites, Shopify & WordPress Design",
    template: "%s | 3Craft Digital",
  },
  description:
    "3Craft Digital is a creative studio serving Pakistan and global brands with branding, websites, Shopify, WordPress, and social media design.",
  keywords: [
    "3Craft Digital",
    "branding agency Pakistan",
    "web design agency Pakistan",
    "Shopify design agency",
    "WordPress website design",
    "social media design agency",
    "brand identity design",
    "conversion-focused websites",
    "creative studio Pakistan",
    "global digital design studio",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/Image/3-mark-logo-design.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/Image/3-mark-logo-design.png",
  },
  openGraph: {
    type: "website",
    url: "https://3craft.digital",
    siteName: "3Craft Digital",
    title: "3Craft Digital | Branding, Websites, Shopify & WordPress Design",
    description:
      "Branding, conversion-focused websites, Shopify, WordPress, and social media design for clients in Pakistan and worldwide.",
    locale: "en_US",
    images: [
      {
        url: "/Image/3craft digital.png",
        width: 1200,
        height: 630,
        alt: "3Craft Digital creative studio branding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3Craft Digital | Branding, Websites, Shopify & WordPress Design",
    description:
      "Creative studio for branding, websites, Shopify, WordPress, and social media design.",
    images: ["/Image/3craft digital.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BackgroundMotion />
        <div className="page-shell">{children}</div>
      </body>
    </html>
  );
}
