import LinkCard from "../components/LinkCard";
import "../styles/linkCards.css";

const links = [
  {
    to: "/programming-software-development",
    title: "Programming & Software Development",
    description: "Explore programming tutorials and resources",
    imageKey: "palikat.png",
    imageSection: "home"
  },
  {
    to: "/languages",
    title: "Languages",
    description: "Learn about different programming languages",
    imageKey: "blocks.png",
    imageSection: "countryLanguages"
  }
];

function Home() {
  return (
      <div className="home-content">
        <h1>Home Page</h1>
        <p>Website under construction!</p>
        
        <div className="link-cards-container">
          {links.map((link) => (
            <LinkCard 
              key={link.to}
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

export default Home;