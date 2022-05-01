import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";
// import Buttons from "./Buttons"
function CampaignPage9() {
  const { prevPage, nextPage, submitCampaign } =
    useContext(AppContext);
  return (
    <>
      <div className="campaign-section submit-section">
        <div>

        <button className="inactive preview" onClick={nextPage}>
          Preview
        </button>
        <Link to="campaign-details">
        <button className="active submit" onClick={submitCampaign}>
          Submit
        </button>
        </Link>
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
