import React from "react";
import "remixicon/fonts/remixicon.css";
import "./MainContentStyles/SocialButton.scss";

const SocialButton = () => {
  return (
    <div className="btnContainer">
      <button className="btn">
        <span> REDES </span>
        <ul className="socials">
          <li>
            <a
              href="https://www.linkedin.com/in/danielvp26/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-linkedin-fill ri-2x footerIcons"></i>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/DanielVP26"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-github-fill ri-2x footerIcons"></i>
            </a>
          </li>

          <li>
            <a href="mailto:daniel.villega3000@gmail.com" rel="noreferrer">
              <i className="ri-mail-line ri-2x footerIcons"></i>
            </a>
          </li>

          <li>
            <a
              href="https://wa.me/584126518710?text=Hola%20Daniel%2C%20me%20gustar%C3%ADa%20contactar%20contigo."
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-whatsapp-line ri-2x footerIcons"></i>
            </a>
          </li>
        </ul>
      </button>
    </div>
  );
};

export default SocialButton;
