import React, { useContext } from "react";
import { AppContext } from "../App";
import Buttons from "./Buttons"
function Campaign() {
  const {appState, setEnable, handleStateChange} = useContext(AppContext);
  if (appState.campaignDescription !== "") {
    setEnable(true);
  }else {
    setEnable(false)
  }
  return (
    <div className="descPage">
      <h3 className="heading">What's your campaign description?</h3>
      <textarea
        placeholder="for e.g Type every details that you required from influencers"
        onChange={(e) => handleStateChange(e)}
        value={appState.campaignDescription}
        name={Object.keys(appState)[1]}
      />
      <Buttons />
    </div>
  );
}

export default Campaign;
