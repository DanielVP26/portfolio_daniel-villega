import React, { useRef } from "react";
import ControlPage from "./ControlPage";
import "./MainContentStyles/Contact.scss";
import SocialButton from "./SocialButton";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8h7uhle",
        "template_egy2o6r",
        form.current,
        "5djxZbKgnHXKI8aY4"
      )
      .then(
        () => {
          toast.success("Mensaje enviado correctamente", {
            transition: Slide,
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          form.current.reset();
        },
        () => {
          toast.error("Error al enviar el mensaje");
        }
      );
  };
  return (
    <div className="contact animatable" id="contact">
      <h1>Contacto</h1>
      <form ref={form} className="contactForm" onSubmit={sendEmail}>
        <h2>¿Quieres contactarme?</h2>
        <p>
          Si tienes alguna duda o quieres contactarme, puedes hacerlo a través
          de este formulario.
        </p>
        <div>
          <input type="text" placeholder="Nombre" name="user_name" required />
          <input type="email" placeholder="Email" name="user_email" required />
        </div>
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Mensaje"
          required
        ></textarea>
        <button type="submit" className="ov-btn-slide-left" value="Send">
          Enviar
        </button>
      </form>
      <ControlPage direction={"prev"} goTo={"/projects"} />
      <ControlPage direction={"next"} goTo={"/"} />
      <SocialButton />
    </div>
  );
};

export default Contact;
