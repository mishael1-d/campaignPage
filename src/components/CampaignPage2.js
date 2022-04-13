import React, { useContext } from "react";
import { AppContext } from "../App";
import Buttons from "./Buttons"
function CampaignPage2() {
  const {appState, setEnable, setAppState} = useContext(AppContext);
  const handleDescChange = (e)=>{
    const {...newDesc} = appState
    newDesc.campaignDescription = e.target.value
    setAppState(newDesc)
    if (newDesc.campaignDescription !== "") {
      setEnable(true);
    } else {
      setEnable(false);
    }
  }
  return (
    <div className="descPage">
      <h3 className="heading">What's your campaign description?</h3>
      <textarea
        placeholder="for e.g Type every details that you required from influencers"
        onChange={(e)=>handleDescChange(e)}
        value={appState.campaignDescription}
      />
      <Buttons />
    </div>
  );
}

export default CampaignPage2;
