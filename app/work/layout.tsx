import type { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToggle from "../components/ScrollToggle";

export default function WorkLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ScrollToggle />
    </>
  );
}
