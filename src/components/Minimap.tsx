import { useEffect, useState } from "react";
import "../styles/Minimap.css";

function Minimap() {
  const [sections, setSections] = useState<{ id: string; title: string }[]>([]);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(
    window.innerWidth >= 1101
  );

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth >= 1101);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const h2Elements = Array.from(
      document.querySelectorAll("h2[id]")
    ) as HTMLElement[];
    const sectionData = h2Elements.map((h2) => ({
      id: h2.id,
      title: h2.textContent || h2.innerText || "",
    }));
    setSections(sectionData);
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible || sections.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sectionPositions = sections.map((section) => {
        const element = document.getElementById(section.id);
        return {
          id: section.id,
          top: element ? element.offsetTop : Infinity,
        };
      });

      const currentSection = sectionPositions.reduce(
        (prev, curr) => {
          return scrollPosition >= curr.top && curr.top >= prev.top
            ? curr
            : prev;
        },
        sectionPositions[0] || { id: "", top: Infinity }
      );

      setActiveSection(currentSection.id);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections, isVisible]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible || sections.length === 0) return null;

  return (
    <div className="minimap">
      <ul>
        {sections.map((section) => (
          <li
            key={section.id}
            className={activeSection === section.id ? "active" : ""}
            onClick={() => scrollToSection(section.id)}
          >
            {section.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Minimap;
