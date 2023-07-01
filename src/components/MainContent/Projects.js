import React from "react";
import "animate.css";
import ControlPage from "./ControlPage";
import CardProject from "./CardProject";
import "./MainContentStyles/Projects.scss";

const Projects = () => {
  return (
    <div className="projects animatable" id="projects">
      <h1>Proyectos</h1>
      <div className="projectsCards">
        <CardProject
          title={"StormGames"}
          tecnologias={["ReactJs", "Jsx", "Firebase", "Sass"]}
          img={"/Projects/stormgames.png"}
          link={"https://reactproject-danielvillega.vercel.app/"}
        />
        <CardProject
          title={"Pokedex"}
          tecnologias={["Html", "Bootstrap", "JavaScript"]}
          img={"/Projects/pokedex.png"}
          link={"https://danielvp26.github.io/Pokedex/"}
        />
        <CardProject
          title={"Burger Page"}
          tecnologias={["Html", "Bootstrap", "Animation"]}
          img={"/Projects/burgerpage.png"}
          link={"https://danielvp26.github.io/BurgerPage/"}
        />
        <CardProject
          title={"Calculadora de divisas"}
          tecnologias={["Html", "Bootstrap", "JavaScript"]}
          img={"/Projects/calculadora.png"}
          link={"https://danielvp26.github.io/Calculadora_de_divsas/"}
        />
        <CardProject
          title={"Financial Wallet"}
          tecnologias={["Html", "Bootstrap", "JavaScript"]}
          img={"/Projects/FinancialWallet.png"}
          link={"https://github.com/No-Country/C10-G43"}
          size={"50%"}
          overlayMobile={true}
        />
        <CardProject
          title={"Payfriend"}
          tecnologias={["React Native", "Jsx", "Tailwind", "Expo"]}
          img={"/Projects/Payfriend.png"}
          link={"https://github.com/No-Country/s8-15-t-reactnative"}
          size={"50%"}
          overlayMobile={true}
        />
      </div>
      <ControlPage direction={"prev"} goTo={"/about"} />
      <ControlPage direction={"next"} goTo={"/contact"} />
    </div>
  );
};

export default Projects;
