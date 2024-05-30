import React, { forwardRef, useState } from "react";
import "./Header.scss";
import { HiOutlinePhone } from "react-icons/hi";

import ApplyModal from "../../../../Components/ApplyModal/ApplyModal";
import Link from "next/link";

const Header = forwardRef((props, ref) => {
  const {
    title,
    imageLink,
    description,
    courseTitle,
    courseDescription,
    bootcampText,
    durationText,
    certificateText,
    nextCohort,
    applicationDeadline,
    freeCourseLink,
  } = props;
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const [show, setShow] = useState(false);

  const handleShare = () => {
    const currentURL = window.location.href;
    navigator.clipboard
      .writeText(currentURL)
      .then(() => {
        alert("Copied to clipboard: " + currentURL);
      })
      .catch((error) => {
        console.error("Failed to copy URL: ", error);
        alert("Failed to copy URL.");
      });
  };
  return (
    <div className="course-header" ref={ref}>
      <ApplyModal
        show={show}
        setShow={setShow}
        formType="b2c"
        title={`Applying for ${courseTitle}`}
        note="website course page"
      />
      <div className="header">
        <div className="content">
          <h1>{title}</h1>
          <img className="phone-header-img" src={imageLink} alt="" />
          <p>{description}</p>
          <div className="btns">
            {freeCourseLink ? (
              <Link
                href={freeCourseLink}
                target="_blank"
                style={{ textDecoration: "none" }}
                className="primary-btn hide-phone apply-section-btn"
              >
                Begin Free Intro Course
              </Link>
            ) : (
              <button
                onClick={() => {
                  setShow(true);
                }}
                className="primary-btn hide-phone apply-section-btn"
              >
                Begin Free Intro Course
              </button>
            )}

            <button
              onClick={() => {
                setShow(true);
              }}
              className="primary-btn call-btn hide-phone"
            >
              <img src="/Assets/Courses/call.svg" alt="" />
              Get a call
            </button>
          </div>
        </div>
        <div className="course-details">
          <img className="header-img" src={imageLink} alt="" />
          <div className="course-content">
            <h3>{courseTitle}</h3>
            <h6>{courseDescription}</h6>
            <div className="item">
              <img src="/Assets/Courses/icon1.svg" alt="" />
              <p>
                <span style={{ fontFamily: "Poppins semibold" }}>
                  Bootcamp:
                </span>{" "}
                {bootcampText}
              </p>
            </div>
            <div className="item">
              <img src="/Assets/Courses/icon2.svg" alt="" />
              <p>
                <span style={{ fontFamily: "Poppins semibold" }}>
                  Duration:
                </span>{" "}
                {durationText}
              </p>
            </div>
            <div className="item">
              <img src="/Assets/Courses/icon3.svg" alt="" />
              <p>
                <span style={{ fontFamily: "Poppins semibold" }}>
                  Certificate:
                </span>{" "}
                {certificateText}
              </p>
            </div>
            <button
              className="primary-btn"
              onClick={() => {
                setShow(true);
              }}
            >
              Enroll in Course Now
            </button>
            <div className="divider"></div>
            <a onClick={handleShare} className="item share">
              <img src="/Assets/Courses/icon4.svg" alt="" />
              <h6>Share Course</h6>
            </a>
          </div>
        </div>
      </div>
      <div className="enrollment">
        <h2>Bootcamp Enrollment Dates</h2>
        <div className="dates">
          <div className="date">
            <p>The full-time cohort starts</p>
            <h5>{new Date(nextCohort).toLocaleString("en-US", options)}</h5>
          </div>
          <div className="date">
            <p>The part-time cohort starts</p>
            <h5>
              {new Date(applicationDeadline).toLocaleString("en-US", options)}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Header;
