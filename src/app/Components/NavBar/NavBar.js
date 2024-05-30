"use client";

import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import axios from "axios";
import backend from "../../utils/backend";
import ApplyModal from "../ApplyModal/ApplyModal";

import "./Navbar.scss";

import { SlideInFromLeft } from "../../utils/animations";
import Link from "next/link";

// import logo from "../../../Assets/Brand/logo.svg";

function NavBar() {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredCategory, setHoveredCategory] = useState("");
  const [show, setShow] = useState(false);
  const [dropdownShow, setDropdownShow] = useState(false);
  const [dropdownShow2, setDropdown2Show] = useState(false);
  const [isCoursePage, setIsCoursePage] = useState(false);
  const [isCompanyPage, setIsCompanyPage] = useState(false);
  const [userHasInteracted, setUserHasInteracted] = useState(false);

  const showDropdown = (e) => {
    setDropdownShow(true);
  };
  const hideDropdown = (e) => {
    setDropdownShow(false);
  };

  const showDropdown2 = (e) => {
    setDropdown2Show(true);
  };
  const hideDropdown2 = (e) => {
    setDropdown2Show(false);
  };

  useEffect(() => {
    setIsCoursePage(window.location.pathname.includes("/Courses"));
    setIsCompanyPage(window.location.pathname.includes("/Companies"));
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${backend}/api/course`);
      setCourses(response.data);
      setHoveredCategory(response.data[0].category);
      // console.log(response.data);
      // Select the first tab by default
      // if (response.data.length > 0) {
      //   setSelectedTab("free"); // Set the default tab to "free"
      // }
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // const isCoursePage = window.location.pathname.includes("/Courses");
  const navbarClass = isCoursePage ? "dark" : "light";

  return (
    <SlideInFromLeft>
      <ApplyModal
        show={show}
        setShow={setShow}
        formType="b2c"
        title="Start For Free Navbar"
        note="website navbar"
      />
      <Navbar
        expand="lg"
        className={` ${navbarClass}`}
        bg="none"
        onMouseLeave={() => {
          hideDropdown();
          hideDropdown2();
          setUserHasInteracted(false);
        }}
      >
        <Container>
          <Navbar.Brand href="/" style={{ marginRight: "72px" }}>
            {navbarClass === "dark" ? (
              <img
                style={{ width: "225px" }}
                src="/Assets/Brand/logo2.gif"
                alt=""
              />
            ) : (
              <img
                style={{ width: "225px" }}
                src="/Assets/Brand/logo.gif"
                alt=""
              />
            )}
          </Navbar.Brand>
          <div className="extra-btn">
            {isCompanyPage ? (
              <Nav.Link href="/" style={{ display: "none" }}>
                Individuals
              </Nav.Link>
            ) : (
              <Nav.Link href="/Companies" style={{ display: "none" }}>
                Companies
              </Nav.Link>
            )}
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="nav-items ml-auto"
              style={{ width: "100%", justifyContent: "space-evenly" }}
            >
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown
                title="Courses"
                id="basic-nav-dropdown"
                className="custom-dropdown position-static"
                show={dropdownShow}
                onMouseEnter={() => {
                  showDropdown();
                  hideDropdown2();
                }}
                onClick={() => (dropdownShow ? hideDropdown() : showDropdown())}
              >
                {isLoading && <p>Loading...</p>}
                {courses && (
                  <div onMouseLeave={hideDropdown} className="dropdown-content">
                    <div className="dropdown-column cats align-items-center d-flex flex-column">
                      {courses.map((course, idx) => (
                        <NavDropdown.Item
                          key={idx}
                          href={`/Courses/${course.id}`}
                          className={`course-cat ${
                            idx === 0 && !userHasInteracted
                              ? "default-hover"
                              : ""
                          }`}
                          onMouseEnter={() => {
                            setHoveredCategory(course.category);
                            setUserHasInteracted(true);
                          }}
                        >
                          {course.category}
                        </NavDropdown.Item>
                      ))}
                    </div>
                    <div
                      className="dropdown-column dis"
                      style={{
                        flex: "1.5",
                      }}
                    >
                      <h4>{hoveredCategory}</h4>
                      {/* Content based on hovered category */}
                      {courses
                        .filter((course) => course.category === hoveredCategory)
                        .map((course, idx) => (
                          <div key={idx}>
                            <p>{course.description}</p>
                            <div className="btns">
                              <a
                                href={`/Courses/${course.id}`}
                                style={{ textDecoration: "none" }}
                                className="primary-btn"
                              >
                                Enroll Now
                              </a>
                              <button
                                onClick={() => {
                                  setShow(true);
                                }}
                                className="call-btn"
                              >
                                <img src="/Assets/call-icon.svg" alt="" />
                                Get a Call
                              </button>
                            </div>
                          </div>
                        ))}
                    </div>

                    <div
                      className="dropdown-column dis"
                      style={{ flex: "1", marginRight: "100px" }}
                    >
                      {courses
                        .filter((course) => course.category === hoveredCategory)
                        .map((course, idx) => (
                          <div key={idx} style={{ marginTop: "-20px" }}>
                            <div className="hvr">
                              <h4>Full time Bootcamp</h4>
                              <Link
                                style={{
                                  textDecoration: "none",
                                  color: "#000",
                                }}
                                href={`/Courses/${course.id}`}
                              >
                                Become a professional in {course.category} in 24
                                weeks
                              </Link>
                            </div>

                            <div className="hvr">
                              <h4>Part time Bootcamp</h4>
                              <Link
                                style={{
                                  textDecoration: "none",
                                  color: "#000",
                                }}
                                href={`/Courses/${course.id}`}
                              >
                                Become a professional in {course.category} in 48
                                weeks
                              </Link>
                            </div>
                            <br />
                          </div>
                        ))}
                    </div>
                  </div>
                )}
              </NavDropdown>
              <Nav.Link href="/WhyAMIT">Why AMIT</Nav.Link>

              {/* <Nav.Link href="/Resources">Resources</Nav.Link> */}

              <NavDropdown
                title="Resources"
                id="basic-nav-dropdown"
                className="com-dropdown"
                show={dropdownShow2}
                onMouseEnter={() => {
                  showDropdown2();
                  hideDropdown();
                }}
                onClick={() =>
                  dropdownShow2 ? hideDropdown2() : showDropdown2()
                }
              >
                <div onMouseLeave={hideDropdown2} className="com-items">
                  <NavDropdown.Item
                    className="com-item"
                    href="https://www.reddit.com/r/AMITCoders"
                  >
                    <img src="/Assets/Bullets/community-icon.svg" alt="" />
                    <p>Community Support</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="com-item" href="/Resources">
                    <img src="/Assets/Bullets/books-icon.svg" alt="" />
                    <p>AMIT Blogs</p>
                  </NavDropdown.Item>
                </div>
              </NavDropdown>
              <Nav.Link href="/Companies">For Companies</Nav.Link>
              {/* <Nav.Link href="/Companies">For Companies</Nav.Link> */}
              {/* <NavDropdown
                title="For Companies"
                id="basic-nav-dropdown"
                className="com-dropdown"
                show={dropdownShow2}
                onMouseEnter={() => {
                  showDropdown2();
                  hideDropdown();
                }}
                onClick={() =>
                  dropdownShow2 ? hideDropdown2() : showDropdown2()
                }
              >
                <div onMouseLeave={hideDropdown2} className="com-items">
                  <NavDropdown.Item className="com-item" href="/Companies">
                    <img src="/Assets/Bullets/hire.svg" alt="" />
                    <p>Hire an Expert</p>
                  </NavDropdown.Item>
                  <NavDropdown.Item className="com-item" href="/Companies">
                    <img src="/Assets/Bullets/upskill.svg" alt="" />
                    <p>Upskill your team</p>
                  </NavDropdown.Item>
                </div>
              </NavDropdown> */}

              <a
                href="https://amitcoders.talentlms.com/"
                className="btn login-btn"
                target="_blank"
                style={{ marginRight: "4px" }}
              >
                Login
              </a>
              {/* <button
                onClick={() => {
                  setShow(true);
                }}
                className="primary-btn start-btn"
              >
                Start For Free
              </button> */}
              <Link
                href="https://events.teams.microsoft.com/event/2fdf8048-e22b-46ba-864b-824f105b9d18@6ef9665a-b3c3-4fe0-8fb3-1a6791fbbbce"
                className="primary-btn start-btn"
                target="_blank"
              >
                Start For Free
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </SlideInFromLeft>
  );
}

export default NavBar;
