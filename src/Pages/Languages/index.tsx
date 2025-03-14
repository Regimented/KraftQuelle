import { Link } from "react-router-dom";
import Layout from "../../components/Layout";

function Languages() {
  return (
    <Layout>
      <div>
        <h1>Languages</h1>
        <Link to="/german">German</Link>
        <br />
        <Link to="/english">English</Link>
      </div>
    </Layout>
  );
}
export default Languages;
