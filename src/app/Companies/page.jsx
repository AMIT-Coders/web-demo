"use client";
import React, { useEffect, useState } from "react";
import "./Companies.scss";
import { BounceOnScroll, SlideInFromLeft } from "../utils/animations";
import TrustedBy from "../Components/TrustedBy/TrustedBy";
import Upskill from "../Containers/Upskill/Upskill";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import ContactSection from "../Containers/ContactSection/ContactSection";

import ApplyModal from "../Components/ApplyModal/ApplyModal";
import RadioButton from "../Components/RadioButton/RadioButton";

const Companies = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      const inactiveTabs = document.querySelectorAll(".nav-link:not(.active)");
      inactiveTabs.forEach((tab) => {
        tab.classList.toggle("strobing-background");
      });
    }, 1500);

    // useEffect(() => {
    //   document.title = `Companies - AMIT Coders`;
    // }, []);

    return () => clearInterval(interval);
  }, []);
  return (
    <BounceOnScroll>
      <div className="companies-page">
        <div className="header">
          <RadioButton selected={2} />
          <div className="left">
            <h1 className="hero-title">
              Mastering the
              <span
                style={{
                  color: "#00A5A5",
                  textDecoration: "underline",
                  textDecorationColor: "#09253D",
                }}
              >
                {" "}
                Digital Wave: 
              </span>{" "}
            </h1>
            <h4 className="subheader">
              Elevate Talent Management and Boost Engagement with "Strategic
              Digital Upskilling" 
            </h4>
            <div className="phone-img">
              <img src="/Assets/Companies/phone-img.png" alt="" />
            </div>
            <button
              onClick={() => {
                setShow(true);
              }}
              className="primary-btn"
            >
              Contact Us
            </button>
          </div>

          <div className="right">
            <img
              className="header-img"
              src="/Assets/Companies/Header.png"
              alt=""
            />
          </div>
        </div>
        <ApplyModal
          show={show}
          setShow={setShow}
          formType="b2b"
          formSource="Company Lead"
          title="Company Lead"
        />
        <TrustedBy />
        <BounceOnScroll>
          <div className="details">
            <h2>
              Hire Smarter, Spend Wiser: <br /> Unleashing Cost-Effective Talent
              Solutions 
            </h2>

            <div className="desc-cards">
              <div className="desc-card">
                <h2 style={{ marginLeft: "-8px" }}>-$5000</h2>
                <div className="p">
                  <img src="/Assets/item.svg" alt="" />
                  <p>
                    In the United States., the typical employer invests
                    nearly $5,000 per fresh hire, spanning 40 to 50
                    days—covering everything from ad campaigns to rigorous
                    vetting, interviews, and the final hiring phase. 
                  </p>
                </div>
              </div>
              <div className="desc-card">
                <h2 style={{ marginLeft: "-8px" }}>-$30,000</h2>
                <div className="p">
                  <img src="/Assets/item.svg" alt="" />
                  <p>
                    In the United States, securing top-tier talent through
                    executive recruitment can incur expenses reaching up to
                    almost $30,000 per new team member.
                  </p>
                </div>
              </div>
              <div className="desc-card">
                <h2 style={{ marginLeft: "-8px" }}>+20%</h2>
                <div className="p">
                  <img src="/Assets/item.svg" alt="" />
                  <p>
                    Unlocking Loyalty:LinkedIn's Two-Year Study Reveals a{" "}
                    <span style={{ color: "lime" }}>20% </span>
                    Increase in Employee Dedication through Internal Transitions
                    and Upskilling. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BounceOnScroll>
        <div className="training-talent">
          <SlideInFromLeft>
            <div className="training">
              <div className="left">
                <div className="divv d-flex align-items-start">
                  <img
                    className="icon"
                    src="/Assets/Companies/star.svg"
                    alt=""
                    style={{ marginTop: "8px" }}
                  />
                  <h2>Tech Training Solutions</h2>
                </div>
                <p>
                  Investing in Upskilling Expands Employee Skillsets, Equipping
                  Them with a Versatile Toolbox for Career Growth.
                </p>
              </div>
              <div className="right">
                <img
                  className="imgg"
                  src="/Assets/Companies/Training.png"
                  alt=""
                />
              </div>
            </div>
          </SlideInFromLeft>
          <SlideInFromLeft>
            <div className="talent">
              <div className="left">
                <div className="d-flex align-items-start">
                  <img
                    src="/Assets/Companies/star2.svg"
                    alt=""
                    className="icon"
                    style={{ marginTop: "8px" }}
                  />
                  <h2>Tech Talent Solutions </h2>
                </div>
                <p>
                  Breaking down financial barriers, making IT education
                  accessible to a diverse audience. 
                </p>
              </div>
              <div className="right">
                <img
                  className="imgg"
                  src="/Assets/Companies/Talent.png"
                  alt=""
                />
              </div>
            </div>
          </SlideInFromLeft>
        </div>

        <div className="tabs-training">
          <SlideInFromLeft>
            <div className="desktop-t">
              <Tab.Container
                id="left-tabs"
                className="left-tabs"
                defaultActiveKey="first"
              >
                <img className="whyhat" src="/Assets/Companies/whyhat.svg" />
                <Row>
                  <Col sm={5}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          <div className="d-flex align-items-center gap-2">
                            <h2>Tech Training Solutions</h2>
                            <img src="/Assets/Companies/star.svg" alt="" />
                          </div>
                          <p>
                            Breaking down financial barriers, making IT
                            education accessible to a diverse audience.
                          </p>
                        </Nav.Link>
                      </Nav.Item>
                      <br />
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          <div className="d-flex align-items-center gap-2">
                            <h2>Tech Talent Solutions</h2>
                            <img src="/Assets/Companies/star2.svg" alt="" />
                          </div>
                          <p>
                            Breaking down financial barriers, making IT
                            education accessible to a diverse audience.
                          </p>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={7}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <div className="bg">
                          <h3>Elevate Your Team:</h3>
                          <p>
                            Investing in Upskilling Expands Employee Skillsets,
                            Equipping Them with a Versatile Toolbox for Career
                            Growth.
                          </p>
                          <h3>AMIT PROVIDES: </h3>
                          <ul>
                            <li>
                              <p>
                                Highly sought-after and current technology
                                skills 
                              </p>
                            </li>
                            <li>
                              <p>
                                Customized technology training materials for
                                your specific needs 
                              </p>
                            </li>
                          </ul>
                          <img src="/Assets/Companies/tab1.svg" alt="" />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="bg">
                          <h3>Tailored Tech Talent Pool:</h3>
                          <p>
                            Skillfully Trained for Swift Recruitment to Meet
                            Your Unique Needs 
                          </p>
                          <h3>AMIT PROVIDES:</h3>
                          <ul>
                            <li>
                              <p>Ready-to-Deploy Tech Talent</p>
                            </li>
                            <li>
                              <p>Guarantee Diversity in Your Workforce</p>
                            </li>
                            <li>
                              <p>In-Demand Tech Experts</p>
                            </li>
                          </ul>
                          <img src="/Assets/Companies/tab2.svg" alt="" />
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
            <Container className="phone-tabs">
              <Row>
                <Col sm={12}>
                  <SlideInFromLeft>
                    <div className="drop">
                      <div className="d-flex align-items-center justify-content-between gap-2 ">
                        <div
                          style={{ width: "100%" }}
                          className="d-flex align-items-center gap-2"
                        >
                          <div className="blt-xs-turq"></div>
                          <h2>Tech Training Solutions</h2>
                        </div>

                        <img src="/Assets/Companies/star.svg" alt="" />
                      </div>
                      <p>
                        Breaking down financial barriers, making IT education
                        accessible to a diverse audience.
                      </p>
                    </div>
                  </SlideInFromLeft>
                  <BounceOnScroll>
                    <Col sm={12}>
                      <div className="phone-tab">
                        <div>
                          <div
                            style={{ width: "100%" }}
                            className="d-flex align-items-center gap-2"
                          >
                            <div className="blt-xs-turq"></div>
                            <h3>Elevate Your Team:</h3>
                          </div>
                          <p>
                            Investing in Upskilling Expands Employee Skillsets,
                            Equipping Them with a Versatile Toolbox for Career
                            Growth.
                          </p>
                          <br />
                          <div
                            style={{ width: "100%" }}
                            className="d-flex align-items-center gap-2"
                          >
                            <div className="blt-xs-turq"></div>
                            <h3>AMIT PROVIDES: </h3>
                          </div>
                          <ul>
                            <li>
                              <p>
                                Highly sought-after and current technology
                                skills 
                              </p>
                            </li>
                            <li>
                              <p>
                                Customized technology training materials for
                                your specific needs 
                              </p>
                            </li>
                          </ul>
                          <img
                            src="/Assets/Companies/tab1.svg"
                            alt=""
                            className="imgg"
                          />
                        </div>
                      </div>
                    </Col>
                  </BounceOnScroll>

                  <br />
                  <SlideInFromLeft>
                    <div className="drop">
                      <div className="d-flex align-items-center gap-2 ">
                        <div
                          style={{ width: "100%" }}
                          className="d-flex align-items-center gap-2"
                        >
                          <div className="blt-xs-turq"></div>

                          <h2>Tech Talent Solutions</h2>
                        </div>
                        <img src="/Assets/Companies/star2.svg" alt="" />
                      </div>
                      <p>
                        Breaking down financial barriers, making IT education
                        accessible to a diverse audience.
                      </p>
                    </div>
                  </SlideInFromLeft>
                  <BounceOnScroll>
                    <Col sm={12}>
                      <div className="phone-tab" eventKey="second">
                        <div>
                          <div
                            style={{ width: "100%" }}
                            className="d-flex align-items-center gap-2"
                          >
                            <div className="blt-xs-turq"></div>
                            <h3>Tailored Tech Talent Pool:</h3>
                          </div>
                          <p>
                            Skillfully Trained for Swift Recruitment to Meet
                            Your Unique Needs 
                          </p>
                          <br />
                          <div
                            style={{ width: "100%" }}
                            className="d-flex align-items-center gap-2"
                          >
                            <div className="blt-xs-turq"></div>
                            <h3>AMIT PROVIDES:</h3>
                          </div>
                          <ul>
                            <li>
                              <p>Ready-to-Deploy Tech Talent</p>
                            </li>
                            <li>
                              <p>Guarantee Diversity in Your Workforce</p>
                            </li>
                            <li>
                              <p>In-Demand Tech Experts</p>
                            </li>
                          </ul>
                          <img
                            src="/Assets/Companies/tab2b.svg"
                            alt=""
                            className="imgg"
                          />
                        </div>
                      </div>
                    </Col>
                  </BounceOnScroll>
                </Col>
              </Row>
            </Container>
          </SlideInFromLeft>
        </div>

        <Upskill />
        <BounceOnScroll>
          <TrustedBy />
        </BounceOnScroll>

        <BounceOnScroll>
          <div className="logos-section">
            <h4>Trusted By</h4>
            <div className="sponsor-container">
              {/* Insert your sponsor icons here */}
              <img src="/Assets/TrustedBy/1.png" alt="Sponsor 1" />
              {/* <img src="/Assets/TrustedBy/2.png" alt="Sponsor 1" /> */}
              <img src="/Assets/TrustedBy/3.png" alt="Sponsor 1" />
              <img src="/Assets/TrustedBy/4.png" alt="Sponsor 1" />
              <img src="/Assets/TrustedBy/5.png" alt="Sponsor 1" />
              <img src="/Assets/TrustedBy/6.png" alt="Sponsor 1" />
              <img src="/Assets/TrustedBy/7.png" alt="Sponsor 1" />
              <img src="/Assets/TrustedBy/8.png" alt="Sponsor 1" />
              <img src="/Assets/TrustedBy/9.png" alt="Sponsor 1" />
            </div>
          </div>
        </BounceOnScroll>

        <SlideInFromLeft>
          <ContactSection />
        </SlideInFromLeft>
        <br />
        <br />
        <br />
        <br />
      </div>
    </BounceOnScroll>
  );
};

export default Companies;
