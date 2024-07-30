import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ContactPage } from "./components/Contact";
import { Projects } from "./components/Projects";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <ContactPage />
      </main>
    </div>
  );
};
