import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <footer className="footer>">
      <div className="footer__container container">
        <h1 className="footer__title">Joshua</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#services" className="footer__link">
              Journey
            </a>
          </li>
        </ul>

        <div className="footer__social">
          {" "}
          <a
            href="https://www.instagram.com/_j_0.5/"
            className="footer__social-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://wa.me/0624759819"
            className="footer__social-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i class="bx bxl-whatsapp"></i>
          </a>
          <a
            href="https://github.com/88893"
            className="footer__social-link"
            target={"_blank"}
            rel="noreferrer"
          >
            <i class="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy"></span>
      </div>
    </footer>
  );
};

export default footer;
