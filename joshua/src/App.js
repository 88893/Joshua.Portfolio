import React from "react";
import "./App.css";
import Header from "./components/header/header.jsx";
import Home from "./components/home/home.jsx";
import About from "./components/about/About.jsx";
import Skills from "./components/skills/Skills.jsx";
import Services from "./components/services/Services.jsx";
import Qualification from "./components/qualification/qualification.jsx";
import Work from "./components/work/Work.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import ScrollUp from "./components/scrollup/ScrollUp.jsx";
import "boxicons";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />s
        <Services />
        <Qualification />
        <Work />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
