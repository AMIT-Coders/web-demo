"use client";
import React from "react";
import "./Basics.scss";
import { SlideInFromLeft } from "../../utils/animations";

// import basics from "../../../Assets/basics.svg";
// import item from "../../../Assets/item.svg";

const BasicsItem = ({ title, desc }) => {
  return (
    <div className="basics-list-item">
      <div className="left">
        <img src="/Assets/item.svg" alt="" />
      </div>
      <div className="right">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const Basics = () => {
  return (
    <SlideInFromLeft>
      <div className="clip">
        <div className="basics-section clipped">
          <div className="left">
            <h2>know The Basics</h2>
            <img className="basics-cody" src="/Assets/basics.svg" alt="" />
          </div>
          <div className="right">
            <BasicsItem
              title="What is a Developer?"
              desc="A developer is an individual who assesses challenges and devises solutions—a problem solver, a leader. It's a crucial and almost magical role. Join us, and we'll provide you with all the training to transform into a tech wizard."
            />
            <BasicsItem
              title="What is Programming?"
              desc="Programming is the art of crafting code, conjuring magical potions to turn the seemingly impossible into reality. Imagine having a magical wizard on your team, capable of programming and bringing corporate dreams to life. Join us, and you'll acquire the skills to become that wizard."
            />
            <BasicsItem
              title="What is Coding?"
              desc="Finally, coding serves as the instruction manual, essentially the book of spells. Despite the buzz around AI and the perception of computers as self-sufficient and intelligent, the reality is that computers still rely on your guidance. Computers communicate in numerous languages, and with us, you'll master them all."
            />
          </div>
        </div>{" "}
      </div>
    </SlideInFromLeft>
  );
};

export default Basics;
