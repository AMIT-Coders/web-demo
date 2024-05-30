"use client";
import React from "react";
import "./Apply.scss";
import ApplyModal from "../../Components/ApplyModal/ApplyModal";
import { useState } from "react";
import { BounceOnScroll } from "../../utils/animations";

const Apply = ({ formType }) => {
  const [show, setShow] = useState(false);
  return (
    <BounceOnScroll>
      <ApplyModal
        show={show}
        setShow={setShow}
        formType={formType}
        title="General Apply Form"
        formSource={"apply"}
        note="Website home page apply button"
      />

      <div className="apply-container">
        <div className="header-apply">
          <h2>
            Apply to the next <br /> bootcamp
          </h2>
          <button
            onClick={() => {
              setShow(true);
            }}
            className="primary-btn apply-section-btn"
          >
            Apply Now
          </button>
        </div>
        <div className="subheader">
          {/* <div className="bootcamp">
            <h4>
              <span style={{ color: "#00A5A5" }}>Cybersecurity</span> bootcamp
            </h4>
            <div className="items">
              <div className="item">
                <p className="cohort">The next cohort starts</p>
                <p className="date">January 8,2024</p>
              </div>
              <div className="item">
                <p className="cohort">The next cohort starts</p>
                <p className="date">January 8,2024</p>
              </div>
            </div>
          </div> */}
          <div className="bootcamp">
            <h4>
              <span style={{ color: "#00A5A5" }}>Software Engineering</span>{" "}
              bootcamp
            </h4>
            <div className="items">
              <div className="item">
                <p className="cohort">Next full-time cohort starts</p>
                <p className="date">May 6, 2024</p>
              </div>
              <div className="item">
                <p className="cohort">Next part-time cohort starts</p>
                <p className="date">May 6,2024</p>
              </div>
            </div>
          </div>
          <div className="bootcamp">
            <h4>
              <span style={{ color: "#00A5A5" }}>Data Science</span> bootcamp
            </h4>
            <div className="items">
              <div className="item">
                <p className="cohort">Next full-time cohort starts</p>
                <p className="date">May 6, 2024</p>
              </div>
              <div className="item">
                <p className="cohort">Next part-time cohort starts</p>
                <p className="date">May 6, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BounceOnScroll>
  );
};

export default Apply;
