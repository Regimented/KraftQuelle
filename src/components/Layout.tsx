import "../styles/PageLayout.css";
import SideNav from "./SideNav";
import Minimap from "./Minimap";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="page-layout">
      <SideNav />
      <div className="content">{children}</div>
      <Minimap />
    </div>
  );
}

export default Layout;
