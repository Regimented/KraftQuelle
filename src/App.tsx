import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Breadcrumb from "./components/Breadcrumb";
import Home from "./Pages/Home";
import GermanLanguage from "./Pages/Languages/German";
import EnglishLanguage from "./Pages/Languages/English";
import ProgrammingSoftwareDevelopment from "./Pages/ProgrammingSoftwareDevelopment";
import ProgrammingLanguages from "./Pages/ProgrammingSoftwareDevelopment/ProgrammingLanguages";
import TypeScript from "./Pages/ProgrammingSoftwareDevelopment/ProgrammingLanguages/TypeScript/TypeScript";
import Functions from "./Pages/ProgrammingSoftwareDevelopment/ProgrammingLanguages/TypeScript/Functions";
import FunctionSyntax from "./Pages/ProgrammingSoftwareDevelopment/ProgrammingLanguages/TypeScript/Functions/FunctionSyntax";
import ArrowFunctions from "./Pages/ProgrammingSoftwareDevelopment/ProgrammingLanguages/TypeScript/Functions/ArrowFunctions";
import FunctionReturnTypes from "./Pages/ProgrammingSoftwareDevelopment/ProgrammingLanguages/TypeScript/Functions/FunctionReturnTypes";
import Loops from "./Pages/ProgrammingSoftwareDevelopment/ProgrammingLanguages/TypeScript/Loops";
import ForLoop from "./Pages/ProgrammingSoftwareDevelopment/ProgrammingLanguages/TypeScript/Loops/ForLoop";
import WhileLoop from "./Pages/ProgrammingSoftwareDevelopment/ProgrammingLanguages/TypeScript/Loops/WhileLoop";
import Languages from "./Pages/Languages";

function App() {
  return (
    <Router basename="/KraftQuelle">
      <Breadcrumb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/german" element={<GermanLanguage />} />
        <Route path="/english" element={<EnglishLanguage />} />
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
        <Route
          path="/programming-software-development/programming-languages/typescript/loops"
          element={<Loops />}
        />
        <Route
          path="/programming-software-development/programming-languages/typescript/loops/for-loops"
          element={<ForLoop />}
        />
        <Route
          path="/programming-software-development/programming-languages/typescript/loops/while-loops"
          element={<WhileLoop />}
        />
      </Routes>
    </Router>
  );
}

export default App;
