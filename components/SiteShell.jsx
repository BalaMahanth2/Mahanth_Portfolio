"use client";

import { useStyle } from "./StyleProvider";
import ScrollProgress from "./ScrollProgress";
import FloatingStyleSwitcher from "./FloatingStyleSwitcher";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ClassicNavbar from "./classic/ClassicNavbar";
import ClassicFooter from "./classic/ClassicFooter";

export default function SiteShell({ children }) {
  const { style } = useStyle();
  const isClassic = style === "classic";

  return (
    <>
      <ScrollProgress />
      <FloatingStyleSwitcher />
      {isClassic ? <ClassicNavbar /> : <Navbar />}
      <main className="relative">{children}</main>
      {isClassic ? <ClassicFooter /> : <Footer />}
    </>
  );
}
