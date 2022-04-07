import React, { useState } from "react";
import arrowDown from "../assets/arrow-down-black.png";
function Campaign({setEnable}) {
  const [showGender, setShowGender] = useState(false);
  const [gender, setGender] = useState("Select your gender");

  const handleGenderSelect = (e) => {
    setGender(e.target.innerText);
    setShowGender(!showGender);
    if (gender !== "Select your gender"){
      setEnable(true)
    }
  };

  return (
    <div className="audience-section">
      <h3 className="heading">Gender for your Target Audience</h3>
      <div
        className="optionContainer"
        onClick={() => setShowGender(!showGender)}
      >
        <p className="option-value">{gender}</p>
        <img src={arrowDown} alt="" />
      </div>
      {showGender && (
        <div className="gender-list">
          <p className="option-value" onClick={handleGenderSelect}>
            Male
          </p>
          <p className="option-value" onClick={handleGenderSelect}>
            Female
          </p>
          <p className="option-value" onClick={handleGenderSelect}>
            Others
          </p>
        </div>
      )}
    </div>
  );
}

export default Campaign;
