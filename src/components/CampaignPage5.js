import React, { useState, useContext } from "react";
import { AppContext } from "../App";
import Buttons from "./Buttons"

function CampaignPage5({ setEnable }) {
  const { appState, setAppState } = useContext(AppContext);

  const [activeOption, setActiveOption] = useState([])
  
  const handleSelect = (data) => {
    const newOptions = [...activeOption]
   const exist = newOptions.find((val)=>val === data)
   if(!exist){
    newOptions.push(data)
    setActiveOption(newOptions)
    console.log(newOptions)
  } 
  else {
    const filtered = newOptions.filter((val)=>val !== data)
    setActiveOption(filtered)
    console.log(filtered)
   }
    const { ...newData } = appState;
    newData.platform.push.toString(activeOption);
    setAppState(newData);
    if (activeOption.length > 0) {
      setEnable(true);
    }

  };
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


  return (
    <>
    <div className="platformPage">
      <h3 className="heading">Select the Platform:</h3>
      <div className="inputContainer">
        {platformOptions.map((option, index) => {
          return (
            <div
              className={activeOption.includes(option.value) ? "optionActive" : "optionContainer"}
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
    <Buttons />
    </>
  );
}

export default CampaignPage5;
