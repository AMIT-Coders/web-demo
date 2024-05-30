"use client";

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Courses.scss";
import TitleBlob from "../../Components/TitleBlob/TitleBlob";
import { BounceOnScroll } from "../../utils/animations";
import CourseCard from "../../Components/CourseCard/CourseCard";
import backend from "../../utils/backend";
import ApplyModal from "../../Components/ApplyModal/ApplyModal";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedTab, setSelectedTab] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const coursesContainerRef = useRef(null);
  const tabsRef = useRef(null);
  const sentinelRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [show, setShow] = useState(false);
  const [showTabs, setShowTabs] = useState(false);
  const [links, setLinks] = useState();

  useEffect(() => {
    fetchCourses();
    fetchLinks();
  }, []);

  const fetchLinks = async () => {
    try {
      const response = await axios.get(`${backend}/api/links/`);
      setLinks(response.data[0]);
      console.log(response.data[0]);
    } catch (error) {
      console.error("Error fetching links:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([e]) => setIsSticky(e.intersectionRatio < 1),
  //     { threshold: [1] }
  //   );

  //   const currentSentinel = sentinelRef.current;

  //   if (currentSentinel) {
  //     observer.observe(currentSentinel);
  //   }

  //   return () => {
  //     if (currentSentinel) {
  //       observer.unobserve(currentSentinel);
  //     }
  //   };
  // }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the sentinel is not intersecting (meaning it's scrolled out of view), make tabs sticky
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: [1] } // Trigger when the sentinel is fully visible or fully not visible
    );

    const currentSentinel = sentinelRef.current;

    if (currentSentinel) {
      observer.observe(currentSentinel);
    }

    return () => {
      if (currentSentinel) {
        observer.unobserve(currentSentinel);
      }
    };
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${backend}/api/course`);
      setCourses(response.data);
      // console.log(response.data);
      // Select the first tab by default
      if (response.data.length > 0) {
        setSelectedTab("free"); // Set the default tab to "free"
      }
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
  };

  // Free course object
  const SE_Workshop = {
    id: "free-course",
    title: "FREE Live Coding Workshop",
    imageLink:
      "https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://events.teams.microsoft.com/event/f1b890bc-1c94-465a-a6b9-19b6ca614cfd@6ef9665a-b3c3-4fe0-8fb3-1a6791fbbbce",
    description:
      "This LIVE workshop is your key to learning faster, building confidence, and launching your software engineering career.",
    category: "free",
    isFree: true,
  };

  return (
    <BounceOnScroll>
      <div className="courses-container" id="courses">
        <ApplyModal
          show={show}
          setShow={setShow}
          formType="b2c"
          title={`Apply for Courses, Homepage sticky bar`}
          note="website course section"
        />
        <TitleBlob
          title="Empower your Career"
          fontsize="28px"
          textalign="center"
        />
        <h2>With AMIT high skills Boot-Camps</h2>
        <div ref={sentinelRef}></div>
        <div
          ref={tabsRef}
          className={`tabs ${isSticky ? "sticky" : ""} ${
            showTabs ? "show" : ""
          }`}
        >
          {/* Static tab for "Start for Free" */}
          <div className="left">
            <a
              href="#courses"
              className={`tab ${selectedTab === "free" ? "active" : ""}`}
              onClick={() => handleTabClick("free")}
            >
              <p>Start for Free</p>
            </a>

            {isLoading ? (
              <div className="d-flex justify-content-center align-items-center">
                <p
                  className="loading"
                  style={{ fontSize: "16px", color: "#00a5a5" }}
                >
                  Loading...
                </p>
              </div>
            ) : (
              // Render other tabs dynamically
              courses.map((course) => (
                <a
                  href="#courses"
                  key={course.id}
                  className={`tab ${selectedTab === course.id ? "active" : ""}`}
                  onClick={() => handleTabClick(course.id)}
                >
                  <p>{course.category}</p>
                </a>
              ))
            )}
          </div>
          <div className="right">
            {links && (
              <a
                href={links.microsoftBooking}
                style={{ textDecoration: "none" }}
              >
                <button
                  className="primary-btn schedule-btn"
                  style={{
                    width: "auto",
                    height: "36px",
                    fontSize: "16px",
                    padding: "0px 12px",
                  }}
                >
                  <img src={"/Assets/sched.svg"} />
                  Schedule
                </button>
              </a>
            )}
            <button
              className="primary-btn call-btn"
              style={{
                width: "auto",
                height: "36px",
                fontSize: "16px",
                padding: "0px 12px",
              }}
              onClick={() => setShow(true)}
            >
              <img src="/Assets/call-icon2.svg" alt="" />
              Get a call
            </button>
          </div>
        </div>

        <div className="courses">
          {/* Render course titles based on selected tab */}
          {selectedTab &&
            (selectedTab === "free"
              ? [
                  // Include the static course at the beginning of the list
                  <div key={SE_Workshop.id}>
                    <CourseCard
                      title={SE_Workshop.title}
                      image={SE_Workshop.imageLink}
                      link={SE_Workshop.link}
                      description={SE_Workshop.description}
                    />
                  </div>,
                  // Then map over the rest of the courses
                  ...courses
                    .filter((course) => course.isFree)
                    .map((course) => (
                      <div key={course.id}>
                        <CourseCard
                          title={course.title}
                          image={course.imageLink}
                          link={`/Courses/${course.id}`}
                          description={course.description}
                        />
                      </div>
                    )),
                ]
              : // Render courses based on selected tab
                courses
                  .filter((course) => course.category === selectedTab)
                  .map((course) => (
                    <div key={course.id}>
                      <CourseCard
                        title={course.title}
                        image={course.imageLink}
                        link={`/Courses/${course.id}`}
                        description={course.description}
                      />
                    </div>
                  )))}
        </div>
      </div>
    </BounceOnScroll>
  );
};

export default Courses;
