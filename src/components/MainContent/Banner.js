import React from "react";
import ControlPage from "./ControlPage";
import "./MainContentStyles/Banner.scss";

const Banner = () => {
  return (
    <div className="hero animatable" id="hero">
      <div className="imagen-fondo"></div>
      <div className="texto">
        <h1>Hola, soy Daniel Villega</h1>
        <h2>Desarrollador Web</h2>
      </div>
      <ControlPage direction={"prev"} />
      <ControlPage direction={"next"} goTo={"/about"} />
    </div>
  );
};

export default Banner;
