import React, { useContext } from "react";
import { AppContext } from "../App";
import Buttons from "./Buttons";

function CampaignPage5({ setEnable }) {
  const { appState, setAppState } = useContext(AppContext);

  const handleSelect = (data) => {
    let { ...newOptions } = appState;
    let exist = newOptions.platform.includes(data);
    if (!exist) {
      newOptions.platform.push(data);
      setAppState(newOptions);
      if (!newOptions.platform.length > 0) {
        setEnable(false);
      } else {
        setEnable(true);
      }
    } else {
      let filtered = newOptions.platform.filter((option) => option !== data);
      newOptions.platform = filtered;
      setAppState(newOptions);
      if (!newOptions.platform.length > 0) {
        setEnable(false);
      } else {
        setEnable(true);
      }
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
        <h3 className="heading">Select the Platforms:</h3>
        <div className="inputContainer">
          {platformOptions.map((option) => {
            return (
              <div
                className={
                  appState.platform.includes(option.value)
                    ? "optionActive"
                    : "optionContainer"
                }
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
