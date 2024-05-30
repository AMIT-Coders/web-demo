"use client";
import React, { useState } from "react";
import "./Upskill.scss";
import TitleBlob from "../../Components/TitleBlob/TitleBlob";
import { BounceOnScroll } from "../../utils/animations";
import Link from "next/link";
import ApplyModal from "../../Components/ApplyModal/ApplyModal";

const Upskill = () => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BounceOnScroll>
      <ApplyModal
        show={show}
        setShow={setShow}
        formType="b2b"
        formSource="Company Lead"
        title="Company Lead"
        note="Website Upskill Section"
      />
      <div className="upskill-container">
        <div className="empower">
          <div className="left">
            <TitleBlob
              title={`Upskill Your company by Boosting Skills and Building Teams`}
              fontsize="40px"
              textalign="center"
            />
            <h2>You can do it with AMIT</h2>
            <p>
              AMIT’s commitment to cultivating in-demand skills and leading-edge
              talent extends to your workforce.
            </p>
            <p>
              We transform companies of all sizes by providing, assessing, and
              training talent in today’s top tech, design, and business
              strategies.
            </p>

            <button
              onClick={() => {
                setShow(true);
              }}
              className="primary-btn"
            >
              Learn More
            </button>
          </div>
          <div className="right">
            {/* <div className="reviewbox"></div> */}
            <img src="/Assets/upskill.png" alt="" />
          </div>
        </div>
      </div>
    </BounceOnScroll>
  );
};

export default Upskill;
