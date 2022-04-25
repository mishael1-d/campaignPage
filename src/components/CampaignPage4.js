import React, {  useContext } from "react";
import { AppContext } from "../App";
import Buttons from "./Buttons";
import Warnings from "./Warnings";
function CampaignPage4({ setEnable }) {
  const { appState, setAppState, warning, setWarning,  activeOptionA, setActiveOptionA, activeOptionB, setActiveOptionB, message, setMessage } = useContext(AppContext);
  const handleOnOptionChange = (e) => {
    const { ...newState } = appState;
    if (activeOptionA){
      newState.serviceOption = e.target.value;
    }
    if (activeOptionB) {
      if (!e.target.value.replace(/\D/g, "")){
        setWarning(true)
        setMessage("Only numbers are allowed")
        newState.serviceOption = ""
      } else {
        setWarning(false)
        newState.serviceOption = e.target.value.replace(/\D/g, "");
      }
    } 

    if (!newState.serviceOption) {
      setEnable(false);
    } else {
      setEnable(true)
    }
    setAppState(newState);
  };

  const onOptionClickA = () => {
    if (appState.serviceOption !== "") {
      appState.serviceOption = ""
    }
    setActiveOptionA(!activeOptionA);
    setActiveOptionB(false);
  };
  const onOptionClickB = () => {
    if (appState.serviceOption !== "") {
      appState.serviceOption = ""
    }
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
              activeOptionA
                ? "optionActive"
                : "optionContainer"
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
                onChange={ (e) => activeOptionA && handleOnOptionChange(e)}
                value={appState.serviceOption}
              />
            </div>
          )}
          <div
            className={
              activeOptionB
                ? "optionActive"
                : "optionContainer"
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
                onChange={(e) => activeOptionB && handleOnOptionChange(e)}
                value={`$${appState.serviceOption}`}
              />
              {warning && <Warnings message={message}/>}
            </div>
          )}
        </div>
      <Buttons />
      </div>
    </>
  );
}

export default CampaignPage4;
