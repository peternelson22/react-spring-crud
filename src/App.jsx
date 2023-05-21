import CreateEmployee from "./components/CreateEmployee";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListEmployee from "./components/ListEmployee";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ListEmployee />} />
          <Route path="/add-employee/:id" element={<CreateEmployee />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
