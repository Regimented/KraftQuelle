import { useLocation, Link } from "react-router-dom";
import "../styles/Breadcrumb.css";

function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const BreadcrumbArrow = () => (
    <svg
      className="breadcrumb-arrow"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );

  return (
    <nav className="breadcrumb-nav">
      <Link to="/">Home</Link>

      {pathnames.length > 0 ? (
        pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <span key={to} className="breadcrumb-item">
              <BreadcrumbArrow />
              {isLast ? (
                <span className="current-page">{value}</span>
              ) : (
                <Link to={to}>{value}</Link>
              )}
            </span>
          );
        })
      ) : (
        <span className="current-page">(Root)</span>
      )}
    </nav>
  );
}

export default Breadcrumb;
