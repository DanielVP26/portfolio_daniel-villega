import React from "react";

const CardProject = ({ title, tecnologias, img, link, size, overlayMobile = false }) => {
  return (
    <a target="_blank" rel=" noopener noreferrer" href={link} className="projectsCard">
      <div className="projetsCard__title">
        <h2>{title}</h2>
      </div>
      <div className="projectsCard__img">
        <div
          className="overlay"
          style={{
            width: size,
            height: size,
            top: overlayMobile ? "auto" : "0",
            left: overlayMobile ? "auto" : "0",
            paddingInline: overlayMobile ? "3rem" : "0",
          }}
        >
          {tecnologias.map((tecnologia, index) => {
            return <p key={index}>{tecnologia}</p>;
          })}
        </div>
        <img src={img} alt={title} style={{ width: size, height: size }} />
      </div>
    </a>
  );
};

export default CardProject;
