import React from "react";
// import ellipse from "../../../Assets/ellipse.svg";
import "./TitleBlob.scss";

const TitleBlob = ({ title, fontsize, textalign }) => {
  return (
    <>
      <div
        className="titleblob"
        style={{ display: "flex", justifyContent: `${textalign}` }}
      >
        <img
          className="ellipse"
          src="/Assets/ellipse.svg"
          alt=""
          // style={{ marginTop: "-48px", marginRight: "-32px" }}
        />
        <h3 style={{ fontSize: `${fontsize}` }}>{title}</h3>
      </div>

      <div
        className="phone-titleblob"
        style={{ display: "flex", justifyContent: `${textalign}` }}
      >
        <img
          className="phone-ellipse"
          src="/Assets/ellipse.svg"
          alt=""
          // style={{ marginTop: "-48px", marginRight: "-32px" }}
        />
        <h3 style={{ fontSize: `${fontsize}` }}>{title}</h3>
      </div>
    </>
  );
};

export default TitleBlob;
