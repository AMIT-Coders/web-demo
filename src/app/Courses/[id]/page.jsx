"use client";
import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import axios from "axios";
import "./style.scss";
import Header from "./Components/Header/Header";
import Overview from "./Components/Overview/Overview";
import Curriculum from "./Components/Curriculum/Curriculum";
import StickyNavbar from "./Components/StickyNavbar/StickyNavbar";
import HowWorks from "./Components/HowWorks/HowWorks";
import CourseBenefits from "../../Containers/CourseBenefits/CourseBenefits.jsx";
import Tuition from "../../Containers/Tuition/Tuition.jsx";
import CareerOps from "./Components/CareerOps/CareerOps";
import SocialImpact from "../../WhyAMIT/Containers/SocialImpact/SocialImpact";
import Scholarship from "../../WhyAMIT/Containers/Scholarship/Scholarship";
import Links from "../../WhyAMIT/Containers/Links/Links";
import ComparisonTable from "../../WhyAMIT/Containers/Comparison/ComparisonTable";
import Success from "../../Containers/Success/Success";
import FAQs from "../../Containers/FAQs/FAQs.jsx";
import Link from "next/link";
import ApplyModal from "../../Components/ApplyModal/ApplyModal";

import backend from "../../utils/backend.js";

const Cybersecurity = () => {
  const [course, setCourse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("");
  const [show, setShow] = useState(false);
  const [src, setSrc] = useState("");
  const [showBottomButtons, setShowBottomButtons] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
    fetchCourse();
  }, []);

  useEffect(() => {
    if (Object.keys(course).length > 0) {
      document.title = `${course.id} - AMIT Coders`;
    }
  }, [course]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setShowBottomButtons(true); // Show buttons when Header section is out of viewport
        } else {
          setShowBottomButtons(false); // Hide buttons when Header section is in viewport
        }
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.1, // Trigger if 10% of the FAQs section is out of view
      }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  const fetchCourse = async () => {
    try {
      const id = window.location.pathname.split("/").pop();
      const response = await axios.get(`${backend}/api/course/${id}`);
      setCourse(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching course:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setSrc(course.category);
  }, [course]);

  return (
    <>
      {course ? (
        <>
          {Object.keys(course).length > 0 && (
            <Head>
              <title>{`${course.id} - AMIT Coders`}</title>
              <meta name="description" content={course.description} />
            </Head>
          )}
          <div className="cybersecurity-page">
            <ApplyModal
              show={show}
              setShow={setShow}
              formType="b2c"
              formSource={src}
              title={`Applying for ${src}`}
              note="website course page"
            />
            <div
              className={`mobile-call-sticky ${
                showBottomButtons ? "visible" : ""
              }`}
            >
              <div className="bottom-btns">
                <button
                  onClick={() => {
                    setShow(true);
                  }}
                  className="apply-btn"
                >
                  Apply Now
                </button>
                <button
                  onClick={() => {
                    setShow(true);
                  }}
                  className="call-btn"
                >
                  <img src="/Assets/call-icon.svg" alt="" /> Get a call
                </button>
              </div>
            </div>
            <Header
              ref={headerRef}
              title={course.title}
              imageLink={course.imageLink}
              description={course.description}
              courseTitle={course.courseTitle}
              courseDescription={course.courseDescription}
              bootcampText={course.bootcampText}
              durationText={course.durationText}
              certificateText={course.certificateText}
              nextCohort={course.nextCohort}
              applicationDeadline={course.applicationDeadline}
              freeCourseLink={course.freeCourseLink}
            />
            <br />
            <br />
            <br />
            <br />
            <StickyNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
            <Overview
              id="overview"
              overviewTitle={course.overviewTitle}
              overviewDescription={course.overviewDescription}
              card1Title={course.card1Title}
              card1Description={course.card1Description}
              card2Title={course.card2Title}
              card2Description={course.card2Description}
              whatIsTitle={course.whatIsTitle}
              whatIsDescription={course.whatIsDescription}
              hardwareReqs={course.hardwareReqs}
              softwareReqs={course.softwareReqs}
              preReqs={course.preReqs}
            />
            <Curriculum
              id="curriculum"
              curriculum={course.curriculum}
              courseId={course.id}
              currLink={course.curriculumPdfLink}
            />
            <HowWorks id="howitworks" />
            <CourseBenefits />
            <Tuition
              id="tuition"
              tuitionPrice={course.tuitionPrice}
              tuitionSalePrice={course.tuitionSalePrice}
            />
            <SocialImpact id="socialimpact" />
            <Scholarship id="scholarship" />
            <CareerOps careers={course.careerOpportunities} />
            {/* <Links /> */}
            <ComparisonTable />
            {/* <Success id="testimonials" /> */}
            <FAQs />
            <br />
            <br />
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default Cybersecurity;
