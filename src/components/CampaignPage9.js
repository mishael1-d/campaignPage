import React, { useContext } from "react";
import { AppContext } from "../App";
// import Buttons from "./Buttons"
function CampaignPage9() {
  const { appState, prevPage, nextPage, submitCampaign } =
    useContext(AppContext);
  console.log(appState);
  return (
    <>
      <div className="submit-section">
        <button className="inactive preview" onClick={nextPage}>
          Preview
        </button>
        <button className="active submit" onClick={submitCampaign}>
          Submit
        </button>
      </div>
      {/* <Buttons /> */}
      <button className="prev-back-btn" onClick={prevPage}>
        Go Back
      </button>
    </>
  );
}

export default CampaignPage9;
