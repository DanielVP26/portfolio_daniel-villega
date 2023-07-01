import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutMe from "./MainContent/AboutMe";
import Banner from "./MainContent/Banner";
import Contact from "./MainContent/Contact";
import Projects from "./MainContent/Projects";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Main = () => {
  const location = useLocation();

  return (
    <TransitionGroup key={location}>
      <CSSTransition key={location.key} classNames="slide" timeout={500}>
        <div className="container">
          <Routes location={location}>
            <Route path="/" element={<Banner />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Main;
