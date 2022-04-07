import React, { useState, useContext } from "react";
import {AppContext} from "../App"
import arrowDown from "../assets/arrow-down-black.png";
function Campaign({setEnable}) {
  const [showGender, setShowGender] = useState(false);
  // const [gender, setGender] = useState("Select your gender");
const {appState, setAppState} = useContext(AppContext)
  const handleGenderSelect = (e) => {
    if (appState.targetGender !== ""){
      setEnable(true)
    }
    setShowGender(!showGender);
    const {...newData} = appState
    newData.targetGender = e.target.innerText
    setAppState(newData)
  };

  return (
    <div className="audience-section">
      <h3 className="heading">Gender for your Target Audience</h3>
      <div
        className="optionContainer"
        onClick={() => setShowGender(!showGender)}
      >
        <p className="option-value">{appState.targetGender}</p>
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
