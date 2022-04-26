import React, { useContext } from "react";
import { AppContext } from "../App";
import Buttons from "./Buttons"

function CampaignPage1() {
  const {appState, setAppState, addClass, setEnable} = useContext(AppContext);
  const handleNameChange = (e)=>{
    const {...newName} = appState
    newName.campaignName = e.target.value
    if (newName.campaignName !== "") {
      setEnable(true);
    } else {
      setEnable(false);
    }
    setAppState(newName)
  }
  return (
    <div className="campaign-section">
      <h3 className="heading">What's your campaign name?</h3>
      <input
        type="text"
        placeholder="for e.g 'Flytant collab'"
        onChange={(e)=>handleNameChange(e)}
        value={appState.campaignName}
      />
      <Buttons />
    </div>
  );
}

export default CampaignPage1;
