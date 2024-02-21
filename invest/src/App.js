import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Projects from "./components/pages/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* Controlar outros aspectos */}
        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/company" element={<Company />} />
            <Route path="/newproject" element={<NewProject />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
