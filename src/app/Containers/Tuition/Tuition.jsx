import React from "react";
import "./Tuition.scss";
import TitleBlob from "../../Components/TitleBlob/TitleBlob";
import { SlideInFromLeft } from "../../utils/animations";

const Tuition = ({ id, tuitionPrice, tuitionSalePrice }) => {
  return (
    <div className="tuition-section" id={id}>
      <TitleBlob
        title="Tuition"
        fontsize={"40px"}
        textalign={"flex-start"}
      ></TitleBlob>

      <div className="head">
        <h3>AMIT provides four payment choices:</h3>
        <div className="price">
          <h2 style={{ color: "#00a5a5" }}>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(tuitionPrice)}
          </h2>
          <h4 style={{ textDecoration: "line-through", marginRight: "12px" }}>
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(tuitionSalePrice)}
          </h4>
          {/* <h5>with only $99 deposit</h5> */}
        </div>
      </div>

      <div className="items">
        <SlideInFromLeft>
          <div className="item">
            <img className="chk-icon" src="/Assets/check.svg" alt="" />
            <p>Opt to pay the entire amount upfront</p>
          </div>
        </SlideInFromLeft>
        <SlideInFromLeft>
          <div className="item">
            <img className="chk-icon" src="/Assets/check.svg" alt="" />
            <p>
              Choose a payment plan, allowing you to pay in convenient
              installments. 
            </p>
          </div>
        </SlideInFromLeft>
        <SlideInFromLeft>
          <div className="item">
            <img className="chk-icon" src="/Assets/check.svg" alt="" />
            <p>
              Utilize a loan from one of our financial partners as a payment
              option. 
            </p>
          </div>
        </SlideInFromLeft>
        <SlideInFromLeft>
          <div className="item">
            <img className="chk-icon" src="/Assets/check.svg" alt="" />
            <p>
              Explore the possibility of receiving a scholarship as a form of
              financial support. 
            </p>
          </div>
        </SlideInFromLeft>
      </div>
    </div>
  );
};

export default Tuition;
