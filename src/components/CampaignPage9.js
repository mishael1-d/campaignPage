import React, {useContext} from "react";
import {AppContext} from "../App"
import Buttons from "./Buttons"
function CampaignPage9() {
  const {appState, nextPage, lastPage} = useContext(AppContext)
  console.log(appState)
  return (
    <>
    <div className="submit-section">
      <button className="inactive preview" onClick={nextPage}>Preview</button>
      <button className="active submit" onClick={lastPage}>Submit</button>
  </div>
  <Buttons />
  </>
  );
}

export default CampaignPage9;
