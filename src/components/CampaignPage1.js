import React, { useContext } from "react";
import { AppContext } from "../App";

function Campaign({ setEnable }) {
  const state = useContext(AppContext);
  // console.log(state.appState);
  // const [campaignName, setCampaignName] = useState("")
  if (state.appState.campaignName !== "") {
    setEnable(true);
  } 

  return (
    <>
      <h3 className="heading">What's your campaign name?</h3>
      <input
        type="text"
        placeholder="for e.g `Flytant collab"
        onChange={(e)=>state.handleStateChange(e)}
        value={state.appState.campaignName}
        name= {Object.keys(state.appState)[0]}
      />
    </>
  );
}

export default Campaign;
