import type { Metadata } from "next";
import "./globals.css";
import BackgroundMotion from "./components/BackgroundMotion";

export const metadata: Metadata = {
  title: "3Craft Digital – Design That Demands Attention",
  description:
    "3Craft Digital is a 3-expert creative studio crafting bold branding, thumbnails, and conversion-focused websites.",
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
