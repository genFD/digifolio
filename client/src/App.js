import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Contact, Projects, Lab } from "./pages";
import { Header } from "./components";


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Lab />} />
      </Routes>
    </Router>
  );
}

export default App;
