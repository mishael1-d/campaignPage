import React, { useContext } from "react";
import { AppContext } from "../App";

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

function Campaigns() {
  const { setEnable, page, nextPage, prevPage } = useContext(AppContext);
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
      return <CampaignPage9 setEnable={setEnable} />;
    } else if (page === 9){
      return <Preview setEnable={setEnable} />
    }
  };

  return (
    <div className="campaign-section">
      {page === 9 ? (
        <Preview prevPage={prevPage} nextPage={nextPage} />
      ) : (
        <>
          {displayPage()}
          {/* <CampaignPage1 setEnable={setEnable} />
          <CampaignPage2 setEnable={setEnable} />
          <CampaignPage3 setEnable={setEnable} />
          <CampaignPage4 setEnable={setEnable} />
          <CampaignPage5 setEnable={setEnable} />
          <CampaignPage6 setEnable={setEnable} />
          <CampaignPage7 setEnable={setEnable} />
          <CampaignPage8 setEnable={setEnable} />
          <CampaignPage9 setEnable={setEnable} /> */}
        </>
      )}
    </div>
  );
}

export default Campaigns;
