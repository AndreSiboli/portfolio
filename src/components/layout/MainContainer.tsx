import { ReactNode } from "react";

import Navbar from "@/components/Navbar/Index";
import Menu from "@/components/Navbar/Menu";
import Footer from "@/components/layout/Footer";
import MouseTracker from "../utils/MouseTracker";

export default function MainContainer({ children }: { children: ReactNode }) {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      {children}
      <Footer/>
      <Menu />
      <MouseTracker/>
    </div>
  );
}
