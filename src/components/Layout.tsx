import "../styles/PageLayout.css";
import SideNav from "./SideNav";
import Minimap from "./Minimap";
import { ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
  section?: string;
}

function Layout({ children, section }: LayoutProps) {
  const location = useLocation();

  const currentSection =
    section || getCurrentSectionFromPath(location.pathname);

  return (
    <div className="page-layout">
      <SideNav section={currentSection} />
      <div className="content">{children}</div>
      <Minimap />
    </div>
  );
}

function getCurrentSectionFromPath(path: string): string {
  if (path.includes("/typescript")) return "typescript";

  return "";
}

export default Layout;
