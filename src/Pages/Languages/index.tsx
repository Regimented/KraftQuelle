import LinkCard from "../../components/LinkCard";
import "../../styles/linkCards.css";

const links = [
  {
    to: "/english",
    title: "English",
    description: "Learn about the english language",
    imageKey: "palikat.png",
    imageSection: "countryLanguages",
  },
  {
    to: "/german",
    title: "German",
    description: "Learn about the german language",
    imageKey: "redarrow.jpg",
    imageSection: "countryLanguages",
  },
];

function Languages() {
  return (
    <div className="home-content">
      <h1>Languages</h1>
      <div className="link-cards-container">
        {links.map((link) => (
          <LinkCard
            to={link.to}
            title={link.title}
            description={link.description}
            imageKey={link.imageKey}
            imageSection={link.imageSection}
          />
        ))}
      </div>
    </div>
  );
}
export default Languages;
