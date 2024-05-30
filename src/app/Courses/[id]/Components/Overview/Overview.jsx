import React, { useState } from "react";
import "./Overview.scss";
import TitleBlob from "../../../../Components/TitleBlob/TitleBlob";

const Overview = ({
  id,
  overviewTitle,
  overviewDescription,
  card1Title,
  card1Description,
  card2Title,
  card2Description,
  whatIsTitle,
  whatIsDescription,
  hardwareReqs,
  softwareReqs,
  preReqs,
}) => {
  const [showContent, setShowContent] = useState(false);
  const [showContent2, setShowContent2] = useState(false);

  const handleMouseOver = () => {
    setShowContent(true);
  };

  const handleMouseOut = () => {
    setShowContent(false);
  };
  const handleMouseOver2 = () => {
    setShowContent2(true);
  };

  const handleMouseOut2 = () => {
    setShowContent2(false);
  };
  return (
    <div className="course-overview-section" id={id}>
      {hardwareReqs && (
        <>
          <div className="overview-section">
            {overviewTitle && (
              <>
                <TitleBlob
                  title={overviewTitle}
                  fontsize="28px"
                  textalign="left"
                />
              </>
            )}
            <p>{overviewDescription}</p>
            <div className="question-cards">
              <div
                className="question-card qc1"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                {showContent ? (
                  <p className="p-c">{card1Description}</p>
                ) : (
                  <>
                    <img
                      className="question-img"
                      src="/Assets/Courses/question.svg"
                      alt=""
                    />
                    <p>{card1Title}</p>
                  </>
                )}
              </div>
              <div
                className="question-card qc2"
                onMouseOver={handleMouseOver2}
                onMouseOut={handleMouseOut2}
              >
                {showContent2 ? (
                  <p className="p-c">{card2Description}</p>
                ) : (
                  <>
                    <img
                      className="question-img"
                      src="/Assets/Courses/question.svg"
                      alt=""
                    />
                    <p>{card2Title}</p>
                  </>
                )}
              </div>
            </div>
            <div className="offer-details" style={{ marginTop: "16px" }}>
              <div className="text-content">
                <br />
                <br />
                <TitleBlob
                  title={whatIsTitle}
                  fontsize="28px"
                  textalign="left"
                />
                <p>{whatIsDescription}</p>
              </div>
              <img src="/Assets/Courses/offer-illustration.png" alt="" />
            </div>
          </div>
          <div className="course-benefits">
            <div className="left">
              <h4>Course Executive benefits</h4>
              <div className="benefit-items">
                <div className="benefit-item">
                  <img src="/Assets/Courses/Benefits/icon1.svg" alt="" />
                  <h5>Hands On Guided Classes from Experts</h5>
                </div>
                <div className="benefit-item">
                  <img src="/Assets/Courses/Benefits/icon2.svg" alt="" />
                  <h5>Portfolio/ CV Building</h5>
                </div>
                <div className="benefit-item">
                  <img src="/Assets/Courses/Benefits/icon3.svg" alt="" />
                  <h5>Certification</h5>
                </div>
                <div className="benefit-item">
                  <img src="/Assets/Courses/Benefits/icon4.svg" alt="" />
                  <h5 style={{ margin: "0" }}>Fixable Tuition</h5>
                </div>
              </div>
            </div>
            <img
              className="floating-img"
              src="/Assets/Courses/Cybersecurity/benefits-img.png"
              alt=""
            />
          </div>

          <div className="course-requirements">
            <div className="left">
              <div className="d-flex align-items-center gap-2">
                <div className="blt-red"></div>
                <h3 style={{ margin: "0" }}>Requirements & Prerequisites</h3>
              </div>
              <p>You should meet the following criteria:</p>
              <div className="req-item">
                <img src="/Assets/item.svg" alt="" />
                <div className="content">
                  <h4>Hardware Requirements</h4>
                  <ul>
                    {hardwareReqs.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="req-item">
                <img src="/Assets/item.svg" alt="" />
                <div className="content">
                  <h4>Software Requirements</h4>
                  <ul>
                    {softwareReqs.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="req-item">
                <img src="/Assets/item.svg" alt="" />
                <div className="content">
                  <h4>Prerequisites</h4>
                  <ul>
                    {preReqs.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="right">
              <img src="/Assets/Courses/requirements.png" alt="" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Overview;
