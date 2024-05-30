import React from "react";
import "./Scholarship.scss";

import TitleBlob from "../../../Components/TitleBlob/TitleBlob";
import { BounceOnScroll, SlideInFromLeft } from "../../../utils/animations";

const Scholarship = ({ id }) => {
  return (
    <div className="scholarship-section" id={id}>
      <SlideInFromLeft>
        <p>
          In essence, these scholarships go beyond education, championing
          inclusivity, skill development, community, and career advancement in
          the dynamic field of information technology. 
        </p>
        <br />
        <br />
      </SlideInFromLeft>
      <div className="offered">
        <BounceOnScroll>
          <div className="left">
            <TitleBlob
              title="Scholarships Offered"
              fontsize="40px"
              textalign="flex-start"
            />
            <div className="scholarship-desc-card">
              <img
                className="staricon"
                src="/Assets/Containers/Scholarship/staricon.svg"
                alt=""
              />
              <div className="d-flex align-items-center gap-2">
                <div className="blt-sm-turq"></div>
                <p style={{ margin: "0px !important" }}>
                  Get a 50% tuition discount
                </p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <div className="blt-sm-turq"></div>
                <p style={{ margin: 0 }}>
                  One scholarship awarded per Bootcamp Cohort 
                </p>
              </div>
            </div>
          </div>
        </BounceOnScroll>
        <SlideInFromLeft>
          <div className="right">
            <img src="/Assets/Containers/Scholarship/Header.svg" alt="" />
          </div>
        </SlideInFromLeft>
      </div>

      <SlideInFromLeft>
        <div className="d-flex align-items-center gap-2">
          <div className="blt-lg-turq"></div>

          <p className="left-thing">{`<Code Bound: Breaking Barriers Scholarship>`}</p>
        </div>
      </SlideInFromLeft>
      <BounceOnScroll>
        <p style={{ fontFamily: "Poppins extralight" }}>
          We emphasize the significance of eliminating obstacles for everyone
          seeking a tech career. Embracing diversity in the workplace enables us
          to better understand, innovate, and address the needs of the diverse
          users of our products. Our definition of diversity encompasses various
          dimensions, such as age, gender, race, sexual orientation, religion,
          income, mental/physical abilities, ethnic heritage, education, and
          military experience.
        </p>
      </BounceOnScroll>
      <br />
      <br />

      <SlideInFromLeft>
        <div className="d-flex align-items-center gap-2">
          <div className="blt-lg-turq"></div>

          <p className="left-thing">{`<Code Leaders: Empowering Communities Scholarship>`}</p>
        </div>
      </SlideInFromLeft>
      <BounceOnScroll>
        <p style={{ fontFamily: "Poppins light" }}>
          This scholarship honors individuals who have made significant positive
          contributions to their communities. We seek candidates with a proven
          track record of fostering positive change and embodying community
          leadership. If you're dedicated to making a difference, apply now for
          the AMIT Empowering Communities Scholarship and let us support your
          educational journey.
        </p>
      </BounceOnScroll>
      <SlideInFromLeft>
        <div className="how-to-apply">
          <div className="d-flex align-items-start gap-2 mb-5">
            <div className="blt-lg-red"></div>
            <h5 style={{ margin: "0" }}>HOW TO APPLY</h5>
          </div>

          <div className="d-flex align-items-start gap-2 mb-3">
            <div className="blt-sm-turq mt-1"></div>
            <p className="left-thing">
              Apply to one of AMIT's Bootcamps (Full-Time or Part-Time)
            </p>
          </div>

          <div className="d-flex align-items-start gap-2 mb-3">
            <div className="blt-sm-turq mt-1"></div>
            <p className="left-thing">
              Send in a concise, 1-page Personal Statement Essay. Include one
              recommendation letter from a school official, employer, teacher,
              or community organization member. Also, provide your Social Media
              Handle. Send these documents to{" "}
              <a href="mailto:scholarships@amitcoders.org">
                scholarships@amitcoders.org
              </a>
            </p>
          </div>

          <div
            className="d-flex align-items-start gap-2 mb-3"
            style={{ position: "relative", zIndex: "10" }}
          >
            <div className="blt-sm-turq mt-1"></div>
            <p className="left-thing">
              Don't forget to follow us on social media; scholarship winners
              will be announced there!
            </p>
          </div>
          {/* <BounceOnScroll> */}
          <div className="flag">
            <img src="/Assets/Containers/Scholarship/flag.svg" alt="" />
          </div>
          {/* </BounceOnScroll> */}
        </div>
      </SlideInFromLeft>
      <p
        style={{
          marginTop: "54px",
          // marginBottom: "100px",
          textAlign: "center",
        }}
      >
        <span style={{ color: "#00a5a5" }}>Don't forget </span>
        to follow us on social media; scholarship winners will be announced
        there!
      </p>
    </div>
  );
};

export default Scholarship;
