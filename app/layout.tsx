// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "3Craft Digital – Design That Demands Attention",
  description:
    "3Craft Digital is a 3-expert creative studio crafting bold branding, high-CTR thumbnails, and conversion-focused websites.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
