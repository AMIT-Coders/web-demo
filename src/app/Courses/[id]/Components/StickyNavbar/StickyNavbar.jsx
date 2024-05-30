"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./StickyNavbar.scss";
import ApplyModal from "../../../../Components/ApplyModal/ApplyModal";
import axios from "axios";
import backend from "../../../../utils/backend";

const StickyNavbar = ({ activeTab, setActiveTab }) => {
  // Function to handle tab click and scroll to corresponding section
  const [links, setLinks] = useState([]);
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleTabClick = (tab, sectionId) => {
    // console.log("Tab clicked:", tab);
    // console.log("Section ID:", sectionId);
    setActiveTab(tab);
    const section = document.getElementById(sectionId);
    // console.log("Section:", section);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const sectionIdToTabMap = {
    overview: "Overview",
    curriculum: "Curriculum",
    howitworks: "How It Works",
    tuition: "Tuition",
    socialimpact: "Social Impact",
    scholarship: "Scholarship",
    // testimonials: "Testimonials",
  };

  const handleScroll = () => {
    const sections = [
      "overview",
      "curriculum",
      "howitworks",
      "tuition",
      "socialimpact",
      "scholarship",
      // "testimonials",
    ];
    let activeSection = "";

    for (const sectionId of sections) {
      const section = document.getElementById(sectionId);
      if (section) {
        const { top } = section.getBoundingClientRect();
        const sectionStart = window.scrollY + top;
        const sectionEnd = sectionStart + section.offsetHeight;

        if (window.scrollY >= sectionStart && window.scrollY < sectionEnd) {
          activeSection = sectionId;
          break;
        }
      }
    }

    if (activeSection) {
      setActiveTab(sectionIdToTabMap[activeSection]);
    }
  };

  useEffect(() => {
    fetchLinks();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <div className="sticky-navbar coursenav">
      <ApplyModal
        show={show}
        setShow={setShow}
        formType="b2c"
        title={`Applying from Navbar`}
        note="website course page sticky navbar"
      />
      {[
        "Overview",
        "Curriculum",
        "How It Works",
        "Tuition",
        "Social Impact",
        "Scholarship",
        // "Testimonials",
      ].map((tab, index) => (
        <div key={index} className="tab">
          <span
            onClick={() =>
              handleTabClick(tab, tab.toLowerCase().replace(/ /g, ""))
            }
            className={activeTab === tab ? "active" : ""}
          >
            {tab}
          </span>
        </div>
      ))}
      {links && (
        <div className="buttons">
          <a href={links.microsoftBooking}>
            <button className="schedule-btn ">
              <img src="/Assets/sched.svg" alt="Schedule" />
              Schedule
            </button>
          </a>
          <button onClick={() => setShow(true)} className="call-btn2">
            <img src="/Assets/call-icon2.svg" alt="Get a Call" />
            Get a Call
          </button>
        </div>
      )}
    </div>
  );
};

export default StickyNavbar;
