import { ReactElement } from "react";
import {
  Navigate,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import PageHome from "./pages/PageHome";

const App = (): ReactElement => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<PageHome />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
};

export default App;
