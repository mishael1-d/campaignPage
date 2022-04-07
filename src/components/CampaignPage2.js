import React, { useContext } from "react";
import { AppContext } from "../App";
function Campaign({ setEnable }) {
  const state = useContext(AppContext);
  if (state.appState.campaignDescription !== "") {
    setEnable(true);
  }
  return (
    <div className="descPage">
      <h3 className="heading">What's your campaign description?</h3>
      <input
        type="text"
        placeholder="for e.g ‘Type every details that you required from influencers"
        onChange={(e) => state.handleStateChange(e)}
        value={state.appState.campaignDescription}
        name={Object.keys(state.appState)[1]}
      />
    </div>
  );
}

export default Campaign;
