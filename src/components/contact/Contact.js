import React from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_keamg1h",
        "template_x0kcejr",
        form.current,
        "-jn4ZU38fVSZ4wOll"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Get in Touch</h2>
      <span className="section-subtitle">Contact Me</span>

      <div className="contact-container container grid">
        <div className="contact-content">
          <h3 className="contact-title">Talk to me</h3>

          <div className="contact-info">
            <div className="contact-card">
              <i className="bx bx-mail-send contact-card-icon"></i>

              <h3 className="contact-card-title">Mail to</h3>
              <span className="contact-card-data">parthibanb224@gmail.com</span>
              <a
                href="mailto:parthibanb224@gmail.com"
                className="contact-button"
              >
                Write Me
                <i className="uil uil-arrow-right contact-button-icon"></i>
              </a>
            </div>

            <div className="contact-card">
              <i className="bx bxl-whatsapp contact-card-icon"></i>

              <h3 className="contact-card-title">Whatsapp</h3>
              <span className="contact-card-data">+91 9500501513</span>
              <a
                href="https://api.whatsapp.com/send?phone=+919500501513&text=Hello"
                className="contact-button"
              >
                Write Me
                <i className="uil uil-arrow-right contact-button-icon"></i>
              </a>
            </div>

            <div className="contact-card">
              <i className="bx bxl-linkedin contact-card-icon"></i>

              <h3 className="contact-card-title">LinkedIn</h3>
              <span className="contact-card-data">Parthiban</span>
              <a
                href="https://www.linkedin.com/in/parthibanb224/"
                className="contact-button"
              >
                Write Me
                <i className="uil uil-arrow-right contact-button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-content">
          <h3 className="contact-title">Message me</h3>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="contact-form-div">
              <label className="contact-form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact-form-input"
                placeholder="Enter your name"
              />
            </div>
            <div className="contact-form-div">
              <label className="contact-form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact-form-input"
                placeholder="Enter your email"
              />
            </div>
            <div className="contact-form-div contact-form-area">
              <label className="contact-form-tag">Message</label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                className="contact-form-input"
                placeholder="Enter your message"
              />
            </div>
            <button className="button button-flex">
              Send Message <i class="uil uil-message button-icon"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
