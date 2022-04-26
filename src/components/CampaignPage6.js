import React, { useContext } from "react";
import { AppContext } from "../App";
import Buttons from "./Buttons";
import Warnings from "./Warnings";

function CampaignPage6() {
  const {
    appState,
    setAppState,
    warning,
    setWarning,
    setEnable,
    message,
    setMessage,
  } = useContext(AppContext);

  const handleOnChange = (e) => {
    let { ...newState } = appState;
    if (!e.target.value.replace(/\D/g, "")) {
      setWarning(true);
      setMessage("Only numbers are allowed");
      newState.followers = "";
    } else {
      setEnable(true);
      setWarning(false);
      newState.followers = e.target.value.replace(/\D/g, "");
    }
    setAppState(newState);
  };
  return (
    <div className="campaign-section">
      <h3 className="heading">Minimum Followers</h3>
      <input
        type="text"
        placeholder="Enter minimum followers required"
        onChange={(e) => handleOnChange(e)}
        value={appState.followers}
      />
      {warning && <Warnings message={message} />}
      <Buttons />
    </div>
  );
}

export default CampaignPage6;
