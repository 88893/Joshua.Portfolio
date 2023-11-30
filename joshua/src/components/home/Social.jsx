import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/_j_0.5/"
        className="home__social-icon"
        target={"_blank"}
        rel="noreferrer"
      >
        <i class="uil uil-instagram"></i>
      </a>
      <a
        href="https://wa.me/0624759819"
        className="home__social-icon"
        target={"_blank"}
        rel="noreferrer"
      >
        <i class="uil uil-whatsapp"></i>
      </a>
      <a
        href="https://github.com/88893"
        className="home__social-icon"
        target={"_blank"}
        rel="noreferrer"
      >
        <i class="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
