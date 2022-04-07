import React, { useState, useContext } from "react";
import { AppContext } from "../App";

function Campaign({ setEnable }) {
  const { appState, setAppState } = useContext(AppContext);

  const [activeOption, setActiveOption] = useState([])

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
    const newOptions = [...activeOption]
   const exist = newOptions.find((val)=>val === data)
   if(!exist){
    newOptions.push(data)
    setActiveOption(newOptions)
   } else {
     const filtered = newOptions.filter((val)=>val !== data)
     setActiveOption(filtered)
   }
    const { ...newData } = appState;
    newData.platform.push(data);
    setAppState(newData);
    if (newData.platform.length > 0) {
      setEnable(true);
    }

    console.log(activeOption)
  };

  return (
    <div className="platformPage">
      <h3 className="heading">Select the Platform</h3>
      <div className="inputContainer">
        {platformOptions.map((option, index) => {
          return (
            <div
              className={activeOption.includes(option.value) ?"optionActive" : "optionContainer"}
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
