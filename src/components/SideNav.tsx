import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/SideNav.css";
import { getNavigationForSection } from "../config/navigation";

export interface NavItem {
  title: string;
  path: string;
  children?: NavItem[];
}

interface SideNavProps {
  navItems?: NavItem[];
  basePath?: string;
  section?: string;
}

const OPEN_SECTIONS_STORAGE_KEY = "sideNavOpenSections";

function SideNav({ navItems, basePath, section }: SideNavProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const initialRenderRef = useRef(true);

  const currentSection =
    section || getCurrentSectionFromPath(location.pathname);

  const { navigationItems, navigationBasePath } = useMemo(() => {
    const items =
      navItems || getNavigationItemsFromPath(currentSection, location.pathname);
    const path = basePath || getBasePathFromSection(currentSection);
    return { navigationItems: items, navigationBasePath: path };
  }, [navItems, basePath, currentSection, location.pathname]);

  const [openSections, setOpenSections] = useState<Record<string, boolean>>(
    () => {
      try {
        const savedOpenSections = localStorage.getItem(
          OPEN_SECTIONS_STORAGE_KEY
        );
        if (savedOpenSections) {
          return JSON.parse(savedOpenSections);
        }
      } catch (error) {
        console.error("Error loading saved navigation state:", error);
      }
      return {};
    }
  );

  useEffect(() => {
    if (!initialRenderRef.current) {
      try {
        localStorage.setItem(
          OPEN_SECTIONS_STORAGE_KEY,
          JSON.stringify(openSections)
        );
      } catch (error) {
        console.error("Error saving navigation state:", error);
      }
    }
  }, [openSections]);

  useEffect(() => {
    if (!initialRenderRef.current) return;
    initialRenderRef.current = false;

    if (navigationItems) {
      let shouldUpdateState = false;
      const newOpenSections = { ...openSections };

      navigationItems.forEach((item) => {
        if (item.children) {
          const sectionPath = `${navigationBasePath}${item.path}`;
          const isInSection = location.pathname.startsWith(sectionPath);

          if (isInSection && openSections[item.title] === undefined) {
            newOpenSections[item.title] = true;
            shouldUpdateState = true;
          }
        }
      });

      if (shouldUpdateState) {
        setOpenSections(newOpenSections);
      }
    }
  }, [navigationItems, navigationBasePath, location.pathname, openSections]);

  const handleResize = useCallback(() => {
    const mobile = window.innerWidth <= 768;
    setIsMobile(mobile);
    setIsOpen(window.innerWidth > 768);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const handleNavigation = useCallback(
    (
      e: React.MouseEvent<HTMLAnchorElement>,
      path: string,
      currentPath: string
    ) => {
      if (currentPath === path) {
        e.preventDefault();
        return;
      }

      if (isMobile) {
        setIsOpen(false);
      }

      if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) {
        return;
      }

      e.preventDefault();
      navigate(path);
    },
    [navigate, isMobile]
  );

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (e: React.MouseEvent, title: string) => {
    e.stopPropagation();
    e.preventDefault();
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const isActive = (path: string) => location.pathname === path;

  if (!navigationItems || navigationItems.length === 0) {
    return null;
  }

  return (
    <>
      {/* Hamburger button for closed state only shown when mobile and menu is closed */}
      {!isOpen && isMobile && (
        <div className="hamburger-container">
          <button
            type="button"
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Open navigation menu"
          >
            ☰
          </button>
        </div>
      )}

      <div
        className={`sidenav-container ${isMobile && isOpen ? "full-width" : ""}`}
      >
        <nav
          className={`sidenav ${isOpen ? "open" : ""} ${!isMobile ? "desktop" : ""}`}
        >
          {/* Close button inside the nav when open (mobile only) */}
          {isMobile && isOpen && (
            <div className="close-button-container">
              <button
                type="button"
                className="close-button"
                onClick={toggleMenu}
                aria-label="Close navigation menu"
              >
                ✕
              </button>
            </div>
          )}

          <div className="sidenav-content">
            {navigationItems.map((item) => (
              <div className="sidenav-item" key={item.title}>
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="dropdown-toggle"
                      onClick={(e) => toggleDropdown(e, item.title)}
                    >
                      <span>{item.title}</span>{" "}
                      <span
                        className={`arrow ${openSections[item.title] ? "down" : "right"}`}
                      >
                        {openSections[item.title] ? "▼" : "▶"}
                      </span>
                    </button>
                    <ul
                      className={`dropdown-menu ${openSections[item.title] ? "open" : ""}`}
                    >
                      {/* Render overview link */}
                      <li>
                        <Link
                          to={`${navigationBasePath}${item.path}`}
                          className={
                            isActive(`${navigationBasePath}${item.path}`)
                              ? "active"
                              : ""
                          }
                          onClick={(e) =>
                            handleNavigation(
                              e,
                              `${navigationBasePath}${item.path}`,
                              location.pathname
                            )
                          }
                        >
                          {item.title} Overview
                        </Link>
                      </li>
                      {/* Render child links */}
                      {item.children.map((child) => (
                        <li key={child.title}>
                          <Link
                            to={`${navigationBasePath}${item.path}/${child.path}`}
                            className={
                              isActive(
                                `${navigationBasePath}${item.path}/${child.path}`
                              )
                                ? "active"
                                : ""
                            }
                            onClick={(e) =>
                              handleNavigation(
                                e,
                                `${navigationBasePath}${item.path}/${child.path}`,
                                location.pathname
                              )
                            }
                          >
                            {child.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    to={`${navigationBasePath}${item.path}`}
                    className={
                      isActive(`${navigationBasePath}${item.path}`)
                        ? "active"
                        : ""
                    }
                    onClick={(e) =>
                      handleNavigation(
                        e,
                        `${navigationBasePath}${item.path}`,
                        location.pathname
                      )
                    }
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}

function getCurrentSectionFromPath(path: string): string {
  if (path.includes("/typescript")) return "typescript";

  return "";
}

function getNavigationItemsFromPath(section: string, path: string): NavItem[] {
  if (section) {
    const { navItems } = getNavigationForSection(section);
    return navItems;
  }
  return [];
}

function getBasePathFromSection(section: string): string {
  if (section) {
    const { basePath } = getNavigationForSection(section);
    return basePath;
  }
  return "";
}

export default SideNav;
