import React, { useState, useEffect, useRef } from "react";
import "animate.css";
import { Link } from "react-router-dom";
import "./Styles/Header.scss";

const Header = () => {
  const [menuOffSet, setMenuOffSet] = useState();
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);

  const menuRef = useRef();

  //useEffect para obtener el offset del menu
  useEffect(() => {
    setMenuOffSet(document.querySelector(".header").offsetTop);
  }, []);

  //useEffect para detectar el scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > menuOffSet) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOffSet]);

  //useEffect para cerrar el menu al hacer click fuera de el
  useEffect(() => {
    const handleClick = (event) => {
      if (
        event.target.closest(".menuButtons") ||
        menuRef.current.classList.contains("animate__fadeOutRightBig")
      ) {
        return;
      }
      setMenuOpen(false);
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  //Funcion para abrir y cerrar el menu
  const handleMenu = () => {
    setMenuClicked(true);
    setMenuOpen(!menuOpen);
  };

  //Funcion para remover la clase is-animating
  const handleAnimationEnd = () => {
    menuRef.current.classList.remove("is-animating");
  };

  return (
    <div className={`header ${isSticky ? "sticky" : ""}`}>
      <Link to="/" className="logoLink">
        <img src="/logo.ico" alt="DanielVillega" className="headerLogo" />
      </Link>
      <span
        onClick={handleMenu}
        className={`material-icons md-36 buttonMenu noSelect menuButtons ${
          menuOpen ? "close" : ""
        }`}
      >
        menu
      </span>
      <div
        ref={menuRef}
        className={`menu ${
          menuOpen
            ? `menuActive animate__animated animate__fadeInRightBig ${
                !menuClicked ? "" : "is-animating"
              }`
            : `animate__animated animate__fadeOutRightBig ${
                !menuClicked ? "" : "is-animating"
              }`
        }`}
        onAnimationEnd={handleAnimationEnd}
      >
        <span
          onClick={handleMenu}
          className="material-icons md-36 buttonMenu noSelect"
        >
          close
        </span>
        <ul>
          <li>
            <Link to="/" className="itemUnderline">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/about" className="itemUnderline">
              Sobre mi
            </Link>
          </li>
          <li>
            <Link to="/projects" className="itemUnderline">
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="/contact" className="itemUnderline">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
