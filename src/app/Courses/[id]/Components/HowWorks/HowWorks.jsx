"use client";
import React, { useState, useEffect } from "react";
import "./HowWorks.scss";
import axios from "axios";
import backend from "../../../../utils/backend";

const HowWorks = ({ id }) => {
  const [steps, setSteps] = useState([]);
  const [lastStepIndex, setLastStepIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSteps();
  }, []);

  const fetchSteps = async () => {
    try {
      const response = await axios.get(`${backend}/api/steps/`);
      setSteps(response.data[0].StepsToApply);
      setLastStepIndex(response.data[0].StepsToApply.length - 1);

      // console.log(response.data[0].StepsToApply);
    } catch (error) {
      console.error("Error fetching steps:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="how-works-section" id={id}>
      <div className="d-flex  align-items-center gap-3">
        <img src="/Assets/Bullets/red-l.svg" alt="" />
        <h2>How it works</h2>
      </div>
      <div className="how-cards">
        <div className="how-card tada" style={{ backgroundColor: "none" }}>
          <img src="/Assets/Courses/HowWorks/burger.svg" alt="" />
          <p style={{ fontFamily: "Poppins bold" }}>
            Step by step sign-up process
          </p>
        </div>

        {steps && (
          <div className="how-card arrowed">
            <img
              className="arrow"
              src="/Assets/Courses/HowWorks/arrow.svg"
              alt=""
            />
            <div className="number">1</div>
            <p>{steps[0]}</p>
          </div>
        )}

        {steps &&
          steps.slice(1).map((step, idx) => {
            return (
              <div className="how-card" key={idx}>
                <div className="number">{idx + 2}</div>
                <p>{step}</p>
              </div>
            );
          })}
      </div>

      <div className="how-cards-phone">
        <div className="head">
          <img src="/Assets/Courses/HowWorks/burger.svg" alt="" />
          <h3>Step by step sign-up process</h3>
        </div>
        <ul>{steps && steps.map((step, idx) => <li key={idx}>{step}</li>)}</ul>
      </div>
      <br />
      <br />
      {/* <div className="lms">
        <img className="lms-img" src="/Assets/lms-img.png" alt="" />
        <p className="lms-p">
          Image Source: eLearning Industry. (n.d.). TalentLMS. eLearning
          Industry.{" "}
          <a href="https://elearningindustry.com/directory/elearning-software/talentlms"></a>
          https://elearningindustry.com/directory/elearning-software/talentlms{" "}
          <br />
          Screenshot of Talent Learning Management System
        </p>
      </div> */}
    </div>
  );
};

export default HowWorks;
