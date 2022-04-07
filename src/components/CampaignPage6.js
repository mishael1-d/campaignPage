import React, { useContext } from "react";
import { AppContext } from "../App";

function Campaign({setEnable}) {
  const state = useContext(AppContext);
  if (state.appState.followers > 0) {
    setEnable(true);
  } 

  return (
    <>
      <h3 className="heading">Minimum Followers</h3>
      <input type="text" placeholder="Enter minimum followers required" 
      onChange={(e)=>state.handleStateChange(e)}
      value={state.appState.followers}
      name= {Object.keys(state.appState)[6]}
      />
  </>
  );
}

export default Campaign;
