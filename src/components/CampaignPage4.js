import React, { useState, useContext } from "react";
import { AppContext } from "../App";
function Campaign({ setEnable }) {
  const [activeOptionA, setActiveOptionA] = useState(false);
  const [activeOptionB, setActiveOptionB] = useState(false);
  const state = useContext(AppContext);

  if (
    state.appState.serviceOption &&
    state.appState.serviceDescription !== ""
  ) {
    setEnable(true);
  }

  const onOptionClickA = () => {
    setActiveOptionA(!activeOptionA);
    setActiveOptionB(false);
  };
  const onOptionClickB = () => {
    setActiveOptionB(!activeOptionB);
    setActiveOptionA(false);
  };
  return (
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
            <input
              className="desc"
              type="text"
              placeholder="Describe here"
              onChange={(e) => state.handleStateChange(e)}
              value={state.appState.serviceOption}
              name={Object.keys(state.appState)[3]}
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
              onChange={(e) => state.handleStateChange(e)}
              value={state.appState.serviceDescription}
              name={Object.keys(state.appState)[4]}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Campaign;
