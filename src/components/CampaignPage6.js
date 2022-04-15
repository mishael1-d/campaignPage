import React, { useContext } from "react";
import { AppContext } from "../App";
import Buttons from "./Buttons"
import Warnings from "./Warnings";

function CampaignPage6() {
  const { appState, setAppState, warning, setWarning, setEnable } = useContext(AppContext);
  
  const handleOnChange = (e) => {
    let { ...newState } = appState;
    newState.followers = e.target.value.replace(/\D/g, "");
    if (!newState.followers > 0) {
      setEnable(false);
      setWarning(false)
    } else {
      setEnable(true);
    }
    setAppState(newState);
  };
  
  return (
    <>
      <h3 className="heading">Minimum Followers</h3>
      <input
        type="text"
        placeholder="Enter minimum followers required"
        onChange={(e)=>handleOnChange(e)}
        value={appState.followers}
      />
      {warning && <Warnings/>}
      <Buttons />
    </>
  );
}

export default CampaignPage6;
