"use client";
import React, { useState } from "react";
import "./Hero.scss";
import { BounceOnScroll } from "../../utils/animations";
import ApplyModal from "../../Components/ApplyModal/ApplyModal";
import RadioButton from "../../Components/RadioButton/RadioButton";

// import heroimg from "../../../Assets/Hero.png";

const Hero = () => {
  const [show, setShow] = useState(false);
  return (
    <BounceOnScroll>
      <ApplyModal
        show={show}
        setShow={setShow}
        formType="b2c"
        title="Homepage CTA"
        note="website hero section"
      />
      <div className="hero-container">
        <RadioButton selected={1} />
        <div className="left">
          <h1 className="hero-title">
            Unleash your{" "}
            <span
              style={{
                color: "#00A5A5",
                textDecoration: "underline",
                textDecorationColor: "#09253D",
              }}
            >
              Ambition.
            </span>{" "}
            <br /> Step into the World of Tech
          </h1>
          <p className="hero-description">
            Unlock Your Competitive Edge: One Word Defines It All –
            'Technology.'
          </p>
          <div className="phone-img">
            <img src="/Assets/phone-hero.png" alt="" />
          </div>
          <a
            style={{ textDecoration: "none" }}
            target="_blank"
            href="https://events.teams.microsoft.com/event/2fdf8048-e22b-46ba-864b-824f105b9d18@6ef9665a-b3c3-4fe0-8fb3-1a6791fbbbce"
          >
            <button
              // onClick={() => {
              //   setShow(true);
              // }}
              className="primary-btn"
            >
              Take the first step! (It’s Free)
            </button>
          </a>
        </div>

        <div className="right">
          <img src="/Assets/Hero.png" alt="" />
        </div>
      </div>
    </BounceOnScroll>
  );
};

export default Hero;
