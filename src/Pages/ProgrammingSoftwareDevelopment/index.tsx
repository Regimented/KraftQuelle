import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

function ProgrammingSoftwareDevelopment() {
  return (
    <Layout>
      <div>
        <h1>Programming & Software Development</h1>
        <Link to="/programming-software-development/programming-languages">
          Click me to navigate to Programming Languages
        </Link>
      </div>
    </Layout>
  );
}

export default ProgrammingSoftwareDevelopment;
