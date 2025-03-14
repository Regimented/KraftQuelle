import { Link } from "react-router-dom";
import Layout from "../../../components/Layout";

function ProgrammingLanguages() {
  return (
    <Layout>
      <div>
        <h1>Programming Languages</h1>
        <Link to="/programming-software-development/programming-languages/typescript">
          TypeScript
        </Link>
      </div>
    </Layout>
  );
}

export default ProgrammingLanguages;
