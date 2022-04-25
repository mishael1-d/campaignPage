import React, { useContext } from "react";
import { AppContext } from "../App";
// import Buttons from "./Buttons"
function CampaignPage9() {
  const { prevPage, nextPage, submitCampaign } =
    useContext(AppContext);
  return (
    <>
      <div className="submit-section">
        <div>

        <button className="inactive preview" onClick={nextPage}>
          Preview
        </button>
        <button className="active submit" onClick={submitCampaign}>
          Submit
        </button>
        </div>
      <button className="prev-back-btn" onClick={prevPage}>
        Go Back
      </button>
      </div>
      {/* <Buttons /> */}
    </>
  );
}

export default CampaignPage9;
