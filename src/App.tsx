import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Breadcrumb from "./components/Breadcrumb";
import Home from "./Pages/Home";
import German from "./Pages/German";
import ProgrammingSoftwareDevelopment from "./Pages/ProgrammingSoftwareDevelopment";
import ProgrammingLanguages from "./Pages/ProgrammingSoftwareDevelopment/ProgrammingLanguages";
import TypeScript from "./Pages/ProgrammingSoftwareDevelopment/ProgrammingLanguages/TypeScript/TypeScript";
import Functions from "./Pages/ProgrammingSoftwareDevelopment/ProgrammingLanguages/TypeScript/Functions";
import FunctionSyntax from "./Pages/ProgrammingSoftwareDevelopment/ProgrammingLanguages/TypeScript/Functions/FunctionSyntax";
import ArrowFunctions from "./Pages/ProgrammingSoftwareDevelopment/ProgrammingLanguages/TypeScript/Functions/ArrowFunctions";
import FunctionReturnTypes from "./Pages/ProgrammingSoftwareDevelopment/ProgrammingLanguages/TypeScript/Functions/FunctionReturnTypes";

function App() {
  return (
    <Router>
      <Breadcrumb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/german" element={<German />} />
        <Route
          path="/programming-software-development"
          element={<ProgrammingSoftwareDevelopment />}
        />
        <Route
          path="/programming-software-development/programming-languages"
          element={<ProgrammingLanguages />}
        />
        <Route
          path="/programming-software-development/programming-languages/typescript"
          element={<TypeScript />}
        />
        <Route
          path="/programming-software-development/programming-languages/typescript/functions"
          element={<Functions />}
        />
        <Route
          path="/programming-software-development/programming-languages/typescript/functions/function-syntax"
          element={<FunctionSyntax />}
        />
        <Route
          path="/programming-software-development/programming-languages/typescript/functions/arrow-functions"
          element={<ArrowFunctions />}
        />
        <Route
          path="/programming-software-development/programming-languages/typescript/functions/function-return-types"
          element={<FunctionReturnTypes />}
        />
      </Routes>
    </Router>
  );
}

export default App;
