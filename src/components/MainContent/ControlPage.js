import React from "react";
import { useNavigate } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import "./MainContentStyles/ControlPage.scss";

const ControlPage = ({ direction, goTo }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (goTo) {
      navigate(goTo);
    }
  };
  return (
    <button
      className={`ControlPageBtn ${
        direction === "next" ? "ControlPageBtn--next" : "ControlPageBtn--prev"
      }`}
      onClick={handleClick}
    >
      <i
        className={`ri-3x ${
          direction === "next"
            ? "ri-arrow-right-s-line"
            : "ri-arrow-left-s-line"
        }`}
      ></i>
    </button>
  );
};

export default ControlPage;
