import React, { useContext } from "react";
import { AppContext } from "../App";
import Buttons from "./Buttons"

function Campaign() {
  const {appState, setEnable, handleStateChange} = useContext(AppContext);
  if (appState.campaignName !== "") {
    setEnable(true);
  } else {
    setEnable(false)
  }
  return (
    <div className="pageContainer">
      <h3 className="heading">What's your campaign name?</h3>
      <input
        type="text"
        placeholder="for e.g `Flytant collab"
        onChange={(e)=>handleStateChange(e)}
        value={appState.campaignName}
        name={Object.keys(appState)[0]}
      />
      <Buttons />
    </div>
  );
}

export default Campaign;
