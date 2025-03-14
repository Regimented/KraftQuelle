import { Link } from "react-router-dom";
import { getImageSrc } from "../utils/imageUtils";

interface LinkCardProps {
  to: string;
  title: string;
  description: string;
  imageKey: string;
  imageSection: string;
}

function LinkCard({
  to,
  title,
  description,
  imageKey,
  imageSection,
}: LinkCardProps) {
  return (
    <Link to={to} className="link-card">
      <div className="link-card-image-container">
        <img
          src={getImageSrc(imageSection, imageKey)}
          alt={title}
          className="link-card-image"
        />
      </div>
      <div className="link-card-content">
        <h3 className="link-card-title">{title}</h3>
        <p className="link-card-description">{description}</p>
      </div>
    </Link>
  );
}

export default LinkCard;
