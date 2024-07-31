import React from "react";
import { Element } from "react-scroll";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ContactPage } from "./components/Contact";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Element name="home">
          <Hero />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <ContactPage />
        </Element>
      </main>
      <Footer />
    </div>
  );
};
