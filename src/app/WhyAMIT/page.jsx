"use client";
import React, { useEffect, useState } from "react";

import "./style.scss";
import {
  BounceOnScroll,
  FadeInWhenVisible,
  SlideInFromLeft,
} from "../utils/animations";
import ComparisonTable from "./Containers/Comparison/ComparisonTable";
import SocialImpact from "./Containers/SocialImpact/SocialImpact";
import Scholarship from "./Containers/Scholarship/Scholarship";
import Links from "./Containers/Links/Links";
import ContactSection from "../Containers/ContactSection/ContactSection";
import backend from "../utils/backend";
import axios from "axios";
import ApplyModal from "../Components/ApplyModal/ApplyModal";
import Link from "next/link";

const WhyAMIT = () => {
  const [projects, setProjects] = useState([]);
  const [show, setShow] = useState(false);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${backend}/api/project/`);
      setProjects(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
    // finally {
    //   setIsLoading(false);
    // }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    document.title = `Why AMIT? - AMIT Coders`;
  }, []);

  return (
    <div className="why-amit-page">
      <ApplyModal
        show={show}
        setShow={setShow}
        formType="b2c"
        title={`Applying from Why AMIT`}
        note="why amit page"
      />
      <FadeInWhenVisible>
        <div className="whyamitheader">
          <div className="left">
            <h1>What Sets AMIT Apart?</h1>
            <img
              className="phone-header-img"
              src="/Assets/WhyAMIT/phone-header-img.png"
              alt=""
            />
            <p>
              AMIT, The Association of Management, and Information Technology,
              is a swiftly expanding U.S.-based company specializing in embedded
              systems, software, computer science, and IT. 
            </p>
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
            <img src="/Assets/WhyAMIT/Header.png" alt="" />
          </div>
        </div>
      </FadeInWhenVisible>

      <SlideInFromLeft>
        <div className="about">
          <div className="left">
            <img src="/Assets/WhyAMIT/About.png" alt="" />
          </div>
          <div className="right">
            <div className="d-flex align-items-center gap-2">
              <div className="blt-lg-red"></div>
              <h2>About AMIT</h2>
            </div>
            <h4>Our Vision</h4>
            <p>
              Empowering Minds, Fueling Futures: Our vision is to be the premier
              source of top-tier tech talent globally. Through cutting-edge
              education, innovative programs, and unwavering dedication, we aim
              to produce industry-ready professionals exceeding the dynamic
              demands of the evolving tech landscape. Our commitment is to shape
              futures, bridge skills gaps, and become the go-to destination for
              companies seeking exceptional talents driving success and
              innovation worldwide. 
            </p>
          </div>
        </div>
      </SlideInFromLeft>
      <SlideInFromLeft>
        <div className="about">
          <div className="right">
            <h4>Our Mission</h4>
            <p>
              AMIT USA is dedicated to 'Education for Employment,' offering
              innovative coding bootcamps bridging education to employment. Our
              focus is on empowering individuals for success in the dynamic tech
              industry, providing skills for meaningful careers. Through quality
              education and real-world application, we equip our community for
              success in the evolving technology landscape, making a lasting
              impact on their professional journeys. 
            </p>
          </div>
          <div className="left">
            <img
              // style={{ width: "80%" }}
              src="/Assets/WhyAMIT/About2.png"
              alt=""
            />
          </div>
        </div>
      </SlideInFromLeft>
      <BounceOnScroll>
        <div className="d-flex align-items-center gap-2">
          <div className="blt-lg-red whyheader"></div>
          <h2 style={{ margin: "0" }}>Why AMIT</h2>
        </div>
      </BounceOnScroll>
      <BounceOnScroll>
        <div className="whyamit">
          <div className="left">
            <div className="d-flex align-items-center gap-2">
              <div className="blt-sm-turq"></div>
              <h4>Expert Insights</h4>
            </div>

            <p>
              Gain insights from IT industry veterans through expert lectures
              and guest speakers. 
              <br />
              Your educational team will consist of an instructor, mentors,
              student support, and a career coach. 
            </p>
            <div
              style={{ marginTop: "72px" }}
              className="d-flex align-items-center gap-2"
            >
              <div className="blt-sm-turq"></div>
              <h4>Hands-On Skills Development</h4>
            </div>

            <p>
              Apply skills with live labs and simulations for practical
              application. 
              <br />
              AMIT's Coding Bootcamps emphasize a project-centric curriculum,
              ensuring you build an impressive portfolio by the program's
              conclusion. 
            </p>
          </div>
          <div className="right">
            <div class="grid-container">
              <div class="grid-item">
                <img
                  src="/Assets/WhyAMIT/icons/icon1.svg"
                  alt=""
                  className="icon"
                />
                <div class="text">Expert Insights</div>
              </div>
              <div class="grid-item">
                <img
                  src="/Assets/WhyAMIT/icons/icon2.svg"
                  alt=""
                  className="icon"
                />
                <div class="text">Career Success</div>
              </div>
              <div class="grid-item">
                <img
                  src="/Assets/Courses/Benefits2/i2.svg"
                  alt=""
                  className="icon"
                />
                <div class="text">Hands-On Skills Development</div>
              </div>
              <div class="grid-item">
                <img
                  src="/Assets/WhyAMIT/icons/icon4.svg"
                  alt=""
                  className="icon"
                />
                <div class="text">Networking Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </BounceOnScroll>
      <SlideInFromLeft>
        <div className="pastprojects">
          <div className="head">
            <h2>Example of Past Projects: </h2>
            <button
              onClick={() => {
                setShow(true);
              }}
              className="primary-btn apply-section-btn"
            >
              Contact Us
            </button>
          </div>
          <br />
          <div className="past-projects">
            {projects.map((proj, idx) => {
              return (
                <div key={proj._id} className="project-card">
                  <img className="card-bg" src={proj.mainImage} alt="" />
                  <div className="past-project-card">
                    <img src={proj.personImage} alt="" className="person" />
                    <div className="content">
                      <h4>{proj.projectName}</h4>
                      <p>{proj.projectDescription}</p>
                      <div className="project-card-footer">
                        <p className="pname">Yousef Alaa </p>
                        <Link href={proj.projectLink} target="blank">
                          <button>View Full Project</button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </SlideInFromLeft>
      <div className="networking-career">
        <BounceOnScroll>
          <div className="networking">
            <div className="left">
              <div className="d-flex align-items-center gap-2">
                <div className="blt-sm-turq"></div>

                <h4>Networking Excellence</h4>
              </div>
              <p>
                Establish Industry Connections for ongoing learning, alignment
                with new tech stacks, and continuous support through community
                groups.
              </p>
            </div>
            <div className="right">
              <img src="/Assets/WhyAMIT/Networking.png" alt="" />
            </div>
          </div>
          <p>
            Connect with our online community by becoming a member of our forum,
            joining us on Discord, and participating in our Facebook group. {" "}
          </p>
          <br />
          <div className="communities">
            <div className="com-box">
              <img src="/Assets/Community/reddit.svg" alt="" />
              <a
                href="https://reddit.com/r/AMITCoders"
                target="_blank"
              >{`Check There >`}</a>
            </div>
            <div className="com-box">
              <img src="/Assets/Community/fb.svg" alt="" />
              <a
                href="https://www.facebook.com/groups/828314169137766/"
                target="_blank"
              >{`Check There >`}</a>
            </div>
          </div>
          <br />
        </BounceOnScroll>
        <SlideInFromLeft>
          <div className="channels"></div>
        </SlideInFromLeft>
        <BounceOnScroll>
          <div className="networking">
            <div className="left">
              <div className="d-flex align-items-center gap-2">
                <div className="blt-sm-turq"></div>
                <h4>Career Success</h4>
              </div>
              <p>
                Access comprehensive career services during and after the
                bootcamp, including support for resume building, interview
                preparation, and job search strategies. 
              </p>
            </div>
            <div className="right">
              <img src="/Assets/WhyAMIT/Career.png" alt="" />
            </div>
          </div>
        </BounceOnScroll>
        <SlideInFromLeft>
          <p>
            While many bootcamps may promise job guarantees, such claims often
            involve questionable methods, leading to entry-level positions with
            limited prospects. At AMIT, we prioritize job-specific training to
            ensure you secure your desired career without compromising on
            quality or long-term success. 
          </p>
        </SlideInFromLeft>
      </div>
      <ComparisonTable />
      <SocialImpact />
      <Scholarship />
      <Links />
      <div className="find-map">
        <div className="heading">
          <img src="/Assets/WhyAMIT/icons/pin.svg" alt="" />
          <h3>Find Us on Map</h3>
        </div>
        <iframe
          title="Google Map"
          width="100%"
          height="323"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4624.084578278044!2d-121.89744682953126!3d37.33241921157588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcca46e878267%3A0x5ba7dc5a8ae6797c!2s99%20S%20Almaden%20Blvd%20%23600%2C%20San%20Jose%2C%20CA%2095173%2C%20USA!5e0!3m2!1sen!2smy!4v1709249704739!5m2!1sen!2smy"
        ></iframe>
      </div>
      <ContactSection id="contact" />
    </div>
  );
};

export default WhyAMIT;
