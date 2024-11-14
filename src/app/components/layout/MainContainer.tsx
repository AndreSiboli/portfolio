import { ReactNode } from "react";

import Navbar from "@/app/components/Navbar/Index";
import Menu from "@/app/components/Navbar/Menu";
import Footer from "@/app/components/layout/Footer";

export default function MainContainer({ children }: { children: ReactNode }) {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      {children}
      <Footer/>
      <Menu />
    </div>
  );
}
