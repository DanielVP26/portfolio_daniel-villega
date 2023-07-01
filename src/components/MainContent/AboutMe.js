import React from "react";
import ControlPage from "./ControlPage";
import "./MainContentStyles/AboutMe.scss";

const AboutMe = () => {
  return (
    <div className="aboutMe animatable" id="about">
      <div className="aboutMe__container">
        <div className="aboutMe__container__text">
          <h2>Sobre mí:</h2>
          <p>
            ¡Hola! Soy Daniel Villega, un desarrollador web front-end con una gran pasión por el
            desarrollo de sitios web elegantes, modernos y eficientes. Me especializo en el uso de
            tecnologías como JavaScript y ReactJs para crear experiencias de usuario interactivas y
            fluidas.
          </p>
          <p>
            Me formé en CoderHouse, donde adquirí habilidades en desarrollo web, y desde entonces he
            estado trabajando en proyectos que me permiten aplicar mi experiencia y seguir
            aprendiendo. Me encanta la creatividad que involucra el diseño web y me esfuerzo por
            crear soluciones únicas y atractivas que cumplan con las necesidades y expectativas de
            los usuarios. Estoy emocionado de seguir creciendo en mi carrera como desarrollador web
            y de contribuir a la creación de sitios web increíbles en el futuro.
          </p>
        </div>
        <div className="aboutMe__container__image">
          <img src="/image.png" alt="imagen" />
        </div>
      </div>
      <ControlPage direction={"prev"} goTo={"/"} />
      <ControlPage direction={"next"} goTo={"/projects"} />
    </div>
  );
};

export default AboutMe;
