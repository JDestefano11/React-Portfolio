import React from "react";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import About from "./About";

export const Home = () => {
    return (
        <div>
            <About />
            <Projects />
            <Skills />
            <Contact />
        </div>
    );
};