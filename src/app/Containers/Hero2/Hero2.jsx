"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import backend from "../../utils/backend";
import "./Hero2.scss";
import TitleBlob from "../../Components/TitleBlob/TitleBlob";
import {
  BounceOnScroll,
  RotateOnScroll,
  SlideInFromLeft,
  // SlideInFromRight,
} from "../../utils/animations";

import ApplyModal from "../../Components/ApplyModal/ApplyModal";

const BenefitItem = ({ title, desc }) => {
  return (
    <div className="list-item">
      <div className="b-left">
        <img src="/Assets/basicsicon.svg" alt="" />
      </div>
      <div className="b-right">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const Hero2 = () => {
  const [show, setShow] = useState(false);
  const [links, setLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      const response = await axios.get(`${backend}/api/links/`);
      setLinks(response.data[0]);
      // console.log(response.data[0]);
    } catch (error) {
      console.error("Error fetching links:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <BounceOnScroll>
      <ApplyModal
        show={show}
        setShow={setShow}
        formType="b2c2"
        title="Get a call"
        note="Home page get a call"
      />
      <div className="hero2-section">
        <SlideInFromLeft>
          <div className="empower">
            <div className="left">
              <TitleBlob
                title={`Want to Empower your Skills & Career?`}
                fontsize="40px"
                textalign="center"
              />
              <h2>You can do it with AMIT</h2>
              <p>We make our expertise accessible.</p>
              <button
                onClick={() => {
                  setShow(true);
                }}
                className="primary-btn contact"
              >
                Contact Us
              </button>
            </div>
            <div className="right">
              <div className="decorbox1"></div>
              <div className="decorbox2"></div>
              <iframe
                width="590"
                height="446"
                src="https://www.youtube.com/embed/raKUAbpIGQQ?si=Yvg6fAJcrEsYVpYm"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </SlideInFromLeft>
        <SlideInFromLeft>
          <div className="benefits">
            <div className="left">
              <div className="d-flex align-items-center gap-2">
                <div className="blt-red"></div>
                <h2>Your Benefits</h2>
              </div>
              <div className="content">
                <BenefitItem
                  title="Training"
                  desc="Hands on Training. Full Time & Part Time Options available."
                />
                <BenefitItem
                  title="Software projects"
                  desc="Project Base Learning which simulates Real-World Scenarios."
                />
                <BenefitItem
                  title="Employments services"
                  desc="Dedicated Career Coach. Portfolio Building. Mock-Interviews."
                />
              </div>
            </div>
            <SlideInFromLeft>
              <div className="right">
                <img
                  className="calendar-icon"
                  src="/Assets/calendar-icon.svg"
                  alt=""
                />
                <h3>Schedule a Meeting</h3>
                <p>Need more Information about AMIT Coders?</p>

                <a
                  href={links.microsoftBooking}
                  style={{ textDecoration: "none" }}
                >
                  <button className="primary-btn schedule-btn">
                    <img src="/Assets/schedule-icon.svg" alt="" />
                    Schedule
                  </button>
                </a>

                <button
                  onClick={() => {
                    setShow(true);
                  }}
                  className="primary-btn call-btn"
                >
                  <img src="/Assets/call-icon.svg" alt="" />
                  You can Get a Call
                </button>
              </div>
            </SlideInFromLeft>
          </div>
        </SlideInFromLeft>
      </div>
    </BounceOnScroll>
  );
};

export default Hero2;
