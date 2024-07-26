import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "../src/components/Header";
import { Home } from "../src/components/Home";
import { About } from "../src/components/About";
import { Projects } from "../src/components/Projects";
import { Contact } from "../src/components/Contact";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
};
