import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my website!</p>
      <Link to="/programming-software-development">
        Programming & Software Development
      </Link>
      <br />
      <Link to="/german">German</Link>
    </div>
  );
}

export default Home;
