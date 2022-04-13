import React, { useContext } from "react";
import { AppContext } from "../App";
import Buttons from "./Buttons"

function CampaignPage6({ setEnable }) {
  const { appState, setAppState } = useContext(AppContext);
  const state = useContext(AppContext);
  
  const handleOnChange = (e) => {
    let { ...newState } = appState;
    newState.followers = e.target.value.replace(/\D/g, "");
    if (newState.followers > 0) {
      setEnable(true);
    } else {
      setEnable(false);
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
        name={Object.keys(state.appState)[6]}
      />
      <Buttons />
    </>
  );
}

export default CampaignPage6;
