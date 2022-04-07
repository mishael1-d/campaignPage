import React, { useState, useContext } from "react";
import { AppContext } from "../App";

function Campaign({ setEnable }) {
  const { appState, setAppState } = useContext(AppContext);

  const [activeOption, setActiveOption] = useState(false);

  const platformOptions = [
    {
      option: "A",
      value: "Instagram",
    },
    {
      option: "B",
      value: "Youtube",
    },
    {
      option: "C",
      value: "Facebook",
    },
    {
      option: "D",
      value: "Twitter",
    },
    {
      option: "E",
      value: "Linkedin",
    },
  ];

  const handleSelect = (data) => {
    if (data === "instargram") {
      setActiveOption(!activeOption);
    }
    const { ...newData } = appState;
    newData.platform.push(data);
    setAppState(newData);
    if (newData.platform.length > 0) {
      setEnable(true);
    }
  };

  return (
    <div className="platformPage">
      <h3 className="heading">Select the Platform</h3>
      <div className="inputContainer">
        {platformOptions.map((option) => {
          return (
            <div
              className={activeOption ? "optionActive" : "optionContainer"}
              key={option.value}
              onClick={() => handleSelect(option.value)}
            >
              <div className="option">{option.option}</div>
              <p className="option-value">{option.value}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Campaign;
