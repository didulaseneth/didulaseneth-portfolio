// src/components/layout/Layout.tsx
// src/components/layout/Layout.tsx
import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}