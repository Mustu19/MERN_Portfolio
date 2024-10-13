import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode && "dark"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />    
        <Home />
        <About />
        <Portfolio />
        <Skills/>
        <Contact />
        <SocialLinks />
    </div>
  );
};

export default App;
