import React, { useState } from "react";
// import { AppContext } from "../App";

import CampaignPage1 from "./CampaignPage1";
import CampaignPage2 from "./CampaignPage2";
import CampaignPage3 from "./CampaignPage3";
import CampaignPage4 from "./CampaignPage4";
import CampaignPage5 from "./CampaignPage5";
import CampaignPage6 from "./CampaignPage6";
import CampaignPage7 from "./CampaignPage7";
import CampaignPage8 from "./CampaignPage8";
import CampaignPage9 from "./CampaignPage9";
import Preview from "./Preview";
import tick from "../assets/done-tick.png";
import arrowUp from "../assets/arrow-up.png";
import arrowDown from "../assets/arrow-down.png";

function Campaings({ setAppState }) {
  const [page, setPage] = useState(0);
  const [enable, setEnable] = useState(false);
  const [preview, setPreview] = useState(false);
  const displayPage = () => {
    if (page === 0) {
      return <CampaignPage1 setEnable={setEnable} />;
    } else if (page === 1) {
      return <CampaignPage2 setEnable={setEnable} />;
    } else if (page === 2) {
      return <CampaignPage3 setEnable={setEnable} />;
    } else if (page === 3) {
      return <CampaignPage4 setEnable={setEnable} />;
    } else if (page === 4) {
      return <CampaignPage5 setEnable={setEnable} />;
    } else if (page === 5) {
      return <CampaignPage6 setEnable={setEnable} />;
    } else if (page === 6) {
      return <CampaignPage7 setEnable={setEnable} />;
    } else if (page === 7) {
      return <CampaignPage8 setEnable={setEnable} />;
    } else if (page === 8) {
      return <CampaignPage9 setEnable={setEnable} nextPage={nextPage} />;
    }
  };
  const prevPage = () => {
    setPage((currentPage) => currentPage - 1);
    setEnable(true);
  };
  const nextPage = () => {
    setPage((currentPage) => currentPage + 1);
    setEnable(false);

    if (page === 9) {
      setPreview(!preview);
    }
  };

  const handleDone = () => {
    setEnable(true);
  };

  return (
    <div className="campaign-section">
      {page===9 ? (
        <Preview />
      ) : (
        <div>
          {displayPage()}
          {(page !==8 ) && (
            <button
              disabled={!enable}
              className={!enable ? "inactive" : "active"}
              onClick={handleDone}
              onKeyUp={handleDone}
            >
              Done{" "}
              <span>
                <img src={tick} alt="" />
              </span>
            </button>
          )}
          {(page !== 8) && (
            <span className="subtitle-container">
              Press <span className="left-subtitle">'Enter'</span>
            </span>
          )}
          {(page !== 8 && page !== 9) && (
            <div className="arrow-btn-container">
              <button
                className={enable === false ? "active" : "inactive"}
                onClick={prevPage}
                disabled={page === 0}
              >
                <img src={arrowUp} alt="Back" />
              </button>
              <button
                className={enable === true ? "active" : "inactive"}
                onClick={nextPage}
                disabled={enable === false || page === 8}
              >
                <img src={arrowDown} alt="Next" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Campaings;
