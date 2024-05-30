import React from "react";
import "./ComparisonTable.scss";
import { BounceOnScroll, SlideInFromLeft } from "../../../utils/animations";
import TitleBlob from "../../../Components/TitleBlob/TitleBlob";

const ComparisonTable = () => {
  return (
    <>
      <div className="top">
        <TitleBlob
          title="Why AMIT versus other Boot Camps?"
          fontsize="40px"
          textalign="flex-start"
        />
      </div>
      <div className="comparison-table">
        <BounceOnScroll>
          <table>
            <thead>
              <tr className="table-header">
                <th className="header-column header-radius">Compare</th>
                <th className="header-column">AMIT Coders</th>
                <th className="header-column">Code Academy</th>
                <th className="header-column">Springboard</th>
                <th className="header-column">Coding Dojo</th>
                <th className="header-column header-radius2">
                  Fullstack Academy
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="compare-header">
                  <h5 style={{ fontFamily: "Poppins semibold" }}>
                    Student Profiling
                  </h5>
                  <p>Tailored Teaching Approaches Based on Student Profiles </p>
                </td>
                <td>
                  <img src="/Assets/Containers/Comparison/check.svg" alt="" />
                </td>
                <td>
                  <img src="/Assets/Containers/Comparison/cross.svg" alt="" />
                </td>
                <td>
                  <img src="/Assets/Containers/Comparison/cross.svg" alt="" />
                </td>
                <td>
                  <img src="/Assets/Containers/Comparison/cross.svg" alt="" />
                </td>
                <td>
                  <img src="/Assets/Containers/Comparison/check.svg" alt="" />
                </td>
              </tr>
              <tr>
                <td className="compare-header">
                  <p>
                    {" "}
                    <span style={{ fontFamily: "Poppins semibold" }}>
                      Live Online{" "}
                    </span>
                    Sessions Industry-Experienced Instructors 
                  </p>
                </td>
                <td>
                  <img src="/Assets/Containers/Comparison/check.svg" alt="" />
                </td>
                <td>
                  <img src="/Assets/Containers/Comparison/cross.svg" alt="" />
                </td>
                <td>
                  <img src="/Assets/Containers/Comparison/cross.svg" alt="" />
                </td>
                <td>
                  <img src="/Assets/Containers/Comparison/check.svg" alt="" />
                </td>
                <td>
                  <img src="/Assets/Containers/Comparison/check.svg" alt="" />
                </td>
              </tr>

              <tr>
                <td className="compare-header">
                  <h5 style={{ fontFamily: "Poppins semibold" }}>
                    Lifelong Access to Program Content:
                  </h5>

                  <p>Continuous Access to Program Materials Instructors </p>
                </td>
                <td>
                  <img src="/Assets/Containers/Comparison/check.svg" alt="" />
                </td>
                <td>
                  <img src="/Assets/Containers/Comparison/cross.svg" alt="" />
                </td>
                <td>
                  <img src="/Assets/Containers/Comparison/cross.svg" alt="" />
                </td>
                <td>
                  <img src="/Assets/Containers/Comparison/cross.svg" alt="" />
                </td>
                <td>
                  <img src="/Assets/Containers/Comparison/cross.svg" alt="" />
                </td>
              </tr>
              <tr>
                <td className="compare-header">
                  <h5 style={{ fontFamily: "Poppins semibold" }}>
                    Multiple Financing Options 
                  </h5>

                  <p>Multiple Flexible Financing Options within </p>
                </td>
                <td>
                  <img src="/Assets/Containers/Comparison/check.svg" alt="" />
                </td>
                <td>
                  <img src="/Assets/Containers/Comparison/cross.svg" alt="" />
                </td>
                <td>
                  <img src="/Assets/Containers/Comparison/check.svg" alt="" />
                </td>
                <td>
                  <img src="/Assets/Containers/Comparison/check.svg" alt="" />
                </td>
                <td>
                  <img src="/Assets/Containers/Comparison/cross.svg" alt="" />
                </td>
              </tr>
              <tr>
                <td className="compare-header">
                  <h5 style={{ fontFamily: "Poppins semibold" }}>
                    1:1 Mentorship 
                  </h5>

                  <p>Provided During Program and After Graduation </p>
                </td>
                <td>
                  <img src="/Assets/Containers/Comparison/check.svg" alt="" />
                </td>
                <td>
                  <img src="/Assets/Containers/Comparison/cross.svg" alt="" />
                </td>
                <td>
                  <img src="/Assets/Containers/Comparison/check.svg" alt="" />
                </td>
                <td>
                  <img src="/Assets/Containers/Comparison/check.svg" alt="" />
                </td>
                <td>
                  <img src="/Assets/Containers/Comparison/check.svg" alt="" />
                </td>
              </tr>
            </tbody>
          </table>
        </BounceOnScroll>
      </div>

      <div className="comparison-table-phone">
        <div className="comparison-table-phone">
          <div className="cards-container">
            <SlideInFromLeft>
              <div className="card">
                <div className="compare-header">
                  <h5 style={{ fontFamily: "Poppins semibold" }}>
                    Student Profiling
                  </h5>
                  <p>Tailored Teaching Approaches Based on Student Profiles </p>
                </div>
                <div className="compare-entry">
                  <p>AMIT Coders</p>
                  <img src="/Assets/Containers/Comparison/check.svg" alt="" />
                </div>
                <div className="compare-entry">
                  <p>Code Academy</p>
                  <img src="/Assets/Containers/Comparison/cross.svg" alt="" />
                </div>
                <div className="compare-entry">
                  <p>Springboard</p>
                  <img src="/Assets/Containers/Comparison/cross.svg" alt="" />
                </div>
                <div className="compare-entry">
                  <p>Coding Dojo</p>
                  <img src="/Assets/Containers/Comparison/cross.svg" alt="" />
                </div>
                <div className="compare-entry">
                  <p>Fullstack Academy</p>
                  <img src="/Assets/Containers/Comparison/check.svg" alt="" />
                </div>
              </div>
            </SlideInFromLeft>
            <SlideInFromLeft>
              <div className="card">
                <div className="compare-header">
                  <span style={{ fontFamily: "Poppins semibold" }}>
                    Live Online{" "}
                  </span>
                  <p>Sessions Industry-Experienced Instructors </p>
                </div>
                <div className="compare-entry">
                  <p>AMIT Coders</p>
                  <img src="/Assets/Containers/Comparison/check.svg" alt="" />
                </div>
                <div className="compare-entry">
                  <p>Code Academy</p>
                  <img src="/Assets/Containers/Comparison/cross.svg" alt="" />
                </div>
                <div className="compare-entry">
                  <p>Springboard</p>
                  <img src="/Assets/Containers/Comparison/cross.svg" alt="" />
                </div>
                <div className="compare-entry">
                  <p>Coding Dojo</p>
                  <img src="/Assets/Containers/Comparison/check.svg" alt="" />
                </div>
                <div className="compare-entry">
                  <p>Fullstack Academy</p>
                  <img src="/Assets/Containers/Comparison/check.svg" alt="" />
                </div>
              </div>
            </SlideInFromLeft>
            <SlideInFromLeft>
              <div className="card">
                <div className="compare-header">
                  <h5 style={{ fontFamily: "Poppins semibold" }}>
                    Lifelong Access to Program Content:
                  </h5>
                  <p>Continuous Access to Program Materials Instructors </p>
                </div>
                <div className="compare-entry">
                  <p>AMIT Coders</p>
                  <img src="/Assets/Containers/Comparison/check.svg" alt="" />
                </div>
                <div className="compare-entry">
                  <p>Code Academy</p>
                  <img src="/Assets/Containers/Comparison/cross.svg" alt="" />
                </div>
                <div className="compare-entry">
                  <p>Springboard</p>
                  <img src="/Assets/Containers/Comparison/cross.svg" alt="" />
                </div>
                <div className="compare-entry">
                  <p>Coding Dojo</p>
                  <img src="/Assets/Containers/Comparison/cross.svg" alt="" />
                </div>
                <div className="compare-entry">
                  <p>Fullstack Academy</p>
                  <img src="/Assets/Containers/Comparison/cross.svg" alt="" />
                </div>
              </div>
            </SlideInFromLeft>
            <SlideInFromLeft>
              <div className="card">
                <div className="compare-header">
                  <h5 style={{ fontFamily: "Poppins semibold" }}>
                    Multiple Financing Options
                  </h5>
                  <p>Multiple Flexible Financing Options within </p>
                </div>
                <div className="compare-entry">
                  <p>AMIT Coders</p>
                  <img src="/Assets/Containers/Comparison/check.svg" alt="" />
                </div>
                <div className="compare-entry">
                  <p>Code Academy</p>
                  <img src="/Assets/Containers/Comparison/cross.svg" alt="" />
                </div>
                <div className="compare-entry">
                  <p>Springboard</p>
                  <img src="/Assets/Containers/Comparison/check.svg" alt="" />
                </div>
                <div className="compare-entry">
                  <p>Coding Dojo</p>
                  <img src="/Assets/Containers/Comparison/check.svg" alt="" />
                </div>
                <div className="compare-entry">
                  <p>Fullstack Academy</p>
                  <img src="/Assets/Containers/Comparison/cross.svg" alt="" />
                </div>
              </div>
            </SlideInFromLeft>
            <SlideInFromLeft>
              <div className="card">
                <div className="compare-header">
                  <h5 style={{ fontFamily: "Poppins semibold" }}>
                    1:1 Mentorship
                  </h5>
                  <p>Provided During Program and After Graduation </p>
                </div>
                <div className="compare-entry">
                  <p>AMIT Coders</p>
                  <img src="/Assets/Containers/Comparison/check.svg" alt="" />
                </div>
                <div className="compare-entry">
                  <p>Code Academy</p>
                  <img src="/Assets/Containers/Comparison/cross.svg" alt="" />
                </div>
                <div className="compare-entry">
                  <p>Springboard</p>
                  <img src="/Assets/Containers/Comparison/check.svg" alt="" />
                </div>
                <div className="compare-entry">
                  <p>Coding Dojo</p>
                  <img src="/Assets/Containers/Comparison/check.svg" alt="" />
                </div>
                <div className="compare-entry">
                  <p>Fullstack Academy</p>
                  <img src="/Assets/Containers/Comparison/check.svg" alt="" />
                </div>
              </div>
            </SlideInFromLeft>
          </div>
        </div>
      </div>
      <br />
      <p style={{ textAlign: "center", width: "90%", margin: "auto" }}>
        Source: (2024, January 1). Exploring Coding Education Offerings: A
        Comparative Study [Research findings]. AMIT.{" "}
      </p>
    </>
  );
};

export default ComparisonTable;
