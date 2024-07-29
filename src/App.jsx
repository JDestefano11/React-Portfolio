import React from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ContactPage } from "./components/Contact";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <ContactPage />
      </main>
    </div>
  );
};
