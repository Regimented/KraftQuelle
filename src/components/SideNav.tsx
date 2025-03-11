import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/SideNav.css";

function SideNav() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);
  const [isDropdownOpen, setIsDropdownOpen] = useState(
    location.pathname.includes("/functions")
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    setIsDropdownOpen(location.pathname.includes("/functions"));
  }, [location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);

      if (window.innerWidth > 768) {
        setIsOpen(true);
      } else if (!mobile && isOpen) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const basePath =
    "/programming-software-development/programming-languages/typescript";
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Hamburger button for closed state only shown when mobile and menu is closed */}
      {!isOpen && isMobile && (
        <div className="hamburger-container">
          <button
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
                className="close-button"
                onClick={toggleMenu}
                aria-label="Close navigation menu"
              >
                ✕
              </button>
            </div>
          )}

          <div className="sidenav-content">
            <div className="sidenav-item">
              <button className="dropdown-toggle" onClick={toggleDropdown}>
                <span>Functions</span>{" "}
                <span className={`arrow ${isDropdownOpen ? "down" : "right"}`}>
                  {isDropdownOpen ? "▼" : "▶"}
                </span>
              </button>
              <ul className={`dropdown-menu ${isDropdownOpen ? "open" : ""}`}>
                <li>
                  <Link
                    to={`${basePath}/functions`}
                    className={
                      isActive(`${basePath}/functions`) ? "active" : ""
                    }
                    onClick={handleLinkClick}
                  >
                    Functions Overview
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${basePath}/functions/function-syntax`}
                    className={
                      isActive(`${basePath}/functions/function-syntax`)
                        ? "active"
                        : ""
                    }
                    onClick={handleLinkClick}
                  >
                    Function Syntax
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${basePath}/functions/arrow-functions`}
                    className={
                      isActive(`${basePath}/functions/arrow-functions`)
                        ? "active"
                        : ""
                    }
                    onClick={handleLinkClick}
                  >
                    Arrow Functions
                  </Link>
                </li>
                <li>
                  <Link
                    to={`${basePath}/functions/function-return-types`}
                    className={
                      isActive(`${basePath}/functions/function-return-types`)
                        ? "active"
                        : ""
                    }
                    onClick={handleLinkClick}
                  >
                    Function Return Types
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default SideNav;
