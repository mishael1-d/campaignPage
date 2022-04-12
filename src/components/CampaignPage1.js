import React, { useContext } from "react";
import { AppContext } from "../App";
import Buttons from "./Buttons"

function CampaignPage1({setEnable}) {
  const {appState, handleStateChange, addClass} = useContext(AppContext);
  
  return (
    <div className={`page-inactive ${addClass}`}>
      <h3 className="heading">What's your campaign name?</h3>
      <input
        type="text"
        placeholder="for e.g 'Flytant collab'"
        onChange={(e)=>handleStateChange(e)}
        value={appState.campaignName}
        name={Object.keys(appState)[0]}
      />
      <Buttons />
    </div>
  );
}

export default CampaignPage1;
