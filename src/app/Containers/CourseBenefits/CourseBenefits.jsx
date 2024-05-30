"use client";
import React from "react";
import "./CourseBenefits.scss";

const BenefitItems = [
  {
    img: "/Assets/Courses/Benefits2/i1.svg",
    img2: "/Assets/Courses/Benefits2/i1b.svg",
    title: "Expert Insights",
    desc: "Gain insights from IT industry veterans through expert lectures and guest speakers.",
  },
  {
    img: "/Assets/Courses/Benefits2/i2.svg",
    img2: "/Assets/Courses/Benefits2/i2b.svg",
    title: "Hands-On Skills Development",
    desc: "Apply skills with live labs and simulations for practical application.",
  },
  {
    img: "/Assets/Courses/Benefits2/i3.svg",
    img2: "/Assets/Courses/Benefits2/i3b.svg",
    title: "Career Success",
    desc: "Access comprehensive career services during and after the bootcamp, including support for resume building, interview preparation, and job search strategies.",
  },
  {
    img: "/Assets/Courses/Benefits2/i4.svg",
    img2: "/Assets/Courses/Benefits2/i4b.svg",
    title: "Networking Excellence",
    desc: "Establish Industry Connections for ongoing learning, alignment with new tech stacks, and continuous support through community groups. ",
  },
];

const CourseBenefits = () => {
  return (
    <div className="course-benefits-section">
      {BenefitItems.map((item, idx) => {
        return (
          <div key={idx} className="course-benefits-card">
            <img className="course-benefits-icon" src={item.img} alt="" />
            <img
              className="course-benefits-icon-hovered"
              src={item.img2}
              alt=""
            />
            <h5>{item.title}</h5>
            <p>{item.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CourseBenefits;
