import React, { useState, useContext } from "react";
import { AppContext } from "../App";
import Buttons from "./Buttons"

function CampaignPage5({ setEnable }) {
  const { appState, setAppState } = useContext(AppContext);

  const [activeOption, setActiveOption] = useState([])
  
  const handleSelect = (data) => {
    const { ...newOptions } = appState;
    newOptions.platform = [...activeOption]
    const exist = newOptions.platform.find((val)=>val === data)
    if(!exist){
      newOptions.platform.push(data)
      setActiveOption(newOptions.platform)
      console.log(newOptions.platform)
      setAppState(newOptions);
      //  const { ...newData } = appState;
      //  newData.platform.push(activeOption).toString();
    } 
    else {
      const filtered = newOptions.platform.filter((val)=>val !== data)
      newOptions.platform.pop(filtered.toString())
      setActiveOption(filtered)
      console.log(filtered.toString())
      setAppState(activeOption)
      // const { ...newData } = appState;
      // setAppState(newData);
    }
    if (newOptions.platform.length > 0) {
      setEnable(true);
    } else {
      setEnable(false)
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
