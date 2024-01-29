import React from "react";
import "./qualification.css";
const qualification = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">My Personal Journey</h2>
      <span className="section__subtitle">My School Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className="qualification__button button--flex">
            <i className="uil uil- qualification__icon"></i>
          </div>
          <div className="qualification__button qualification__active button--flex">
            <i className="uil uil-graduation-cap qualification__icon"></i>
            {""}
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Software-Development</h3>
                <span className="qualification__subtitle">Grafisch Lyceum</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2022 - Present
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Engineering</h3>
                <span className="qualification__subtitle">Life College</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2020-2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Secondary School</h3>
                <span className="qualification__subtitle">Wolfert College</span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2018 - 2020
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title"> Primary School</h3>
                <span className="qualification__subtitle">
                  Vierambacht School
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calender-alt"></i> 2011 - 2019
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default qualification;
