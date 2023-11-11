import React from "react";

const Info = () => {
  return (
    <div className="about__info">
      <div className="about__box">
        <i class="uil uil-award"></i>
        <h3 className="about__tile">Experience</h3>
        <span className="about__subtitles">8 years working</span>
      </div>
      <div className="about__box">
        <i class="uil uil-briefcase"></i>
        <h3 className="about__tile">completed</h3>
        <span className="about__subtitles">48+ projects</span>
      </div>
      <div className="about__box">
        <h3 className="about__tile">Support</h3>
        <span className="about__subtitles"></span>
      </div>
    </div>
  );
};

export default Info;
