import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Footer from "./components/Footer";
import './index.css';


const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Education />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
