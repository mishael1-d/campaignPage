import React, { useState, useContext } from "react";
import { AppContext } from "../App";
import Buttons from "./Buttons"
import Warnings from "./Warnings";
function CampaignPage4({ setEnable }) {
  const { appState, setAppState, warning, setWarning } = useContext(AppContext);
  const [activeOptionA, setActiveOptionA] = useState(false);
  const [activeOptionB, setActiveOptionB] = useState(false);

  const handleOnOptionChange = (e) => {
    const { ...newState } = appState;
    newState.serviceOption = e.target.value
    
    if (newState.serviceOption) {
      setEnable(true);
    } else {
      setEnable(false);
    }
    setAppState(newState);
  };
 
  const handleOnDescChange = (e) => {
    const { ...newState } = appState;
    newState.serviceDescription = e.target.value.replace(/\D/g, "");
    
    if (newState.serviceDescription > 0) {
      setEnable(true);
      setWarning(false)
    } else {
      setWarning(true)
      setEnable(false);
    }
    setAppState(newState);
  };
 

  ;
  const onOptionClickA = () => {
    setActiveOptionA(!activeOptionA);
    setActiveOptionB(false);
  };
  const onOptionClickB = () => {
    setActiveOptionB(!activeOptionB);
    setActiveOptionA(false);
  };
  return (
    <>
    <div className="servicePage">
      <h3 className="heading">Do You Want To:</h3>
      <div className="inputContainer">
        <div
          className={
            activeOptionA && !activeOptionB ? "optionActive" : "optionContainer"
          }
          onClick={onOptionClickA}
        >
          <div className="option">A</div>
          <p className="option-value">Giveaway Products</p>
        </div>
        {activeOptionA && (
          <div className="option-description">
            <h6>Describe your giveaway</h6>
            <textarea
              placeholder="Describe here"
              onChange={(e) => handleOnOptionChange(e)}
              value={appState.serviceOption}
              name={Object.keys(appState)[3]}
            />
          </div>
        )}
        <div
          className={
            activeOptionB && !activeOptionA ? "optionActive" : "optionContainer"
          }
          onClick={onOptionClickB}
        >
          <div className="option">B</div>
          <p className="option-value">Pay Influencers</p>
        </div>
        {activeOptionB && (
          <div className="option-description">
            <h6>Enter the pricing</h6>
            <input
              type="text"
              placeholder="$ Enter Price"
              pattern="[0-9]*"
              onChange={(e)=>handleOnDescChange(e)}
              value={`$${appState.serviceDescription}`}
              name={Object.keys(appState)[4]}
            />
            {warning && <Warnings />}
          </div>
        )}
      </div>
    </div>
      <Buttons />
      </>
  );
}

export default CampaignPage4;
