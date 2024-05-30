// RadioButton.jsx

import React from "react";
import "./RadioButton.scss";

const RadioButton = ({ selected }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    window.location.href = value;
  };

  return (
    <div className="radio-button">
      <div className="r-btn">
        <input
          type="radio"
          id="home"
          name="page"
          value="/"
          onChange={handleChange}
          defaultChecked={selected === 1}
        />
        <label htmlFor="home">Individuals</label>
      </div>

      <div className="r-btn">
        <input
          type="radio"
          id="companies"
          name="page"
          value="/Companies"
          onChange={handleChange}
          defaultChecked={selected === 2}
        />
        <label htmlFor="companies">Companies</label>
      </div>
    </div>
  );
};

export default RadioButton;
