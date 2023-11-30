import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="uil uil-award"></i>
        <h3 className="about__tile">Experience</h3>
        <span className="about__subtitles">3 years of coding</span>
      </div>
      <div className="about__box">
        <i class="uil uil-briefcase"></i>
        <h3 className="about__tile">completed</h3>
        <span className="about__subtitles">15+ projects</span>
      </div>
      <div className="about__box">
        <i class="uil uil-briefcase"></i>
        <h3 className="about__tile">Languages</h3>
        <span className="about__subtitles">Dutch & English </span>
      </div>
    </div>
  );
};

export default Info;
