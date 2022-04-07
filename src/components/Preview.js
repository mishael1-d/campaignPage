import React, { useContext } from "react";
import { AppContext } from "../App";

function Preview({ prevPage }) {
  const { appState } = useContext(AppContext);
  return (
    <div className="preview-container">
      <div className="preview-image">
        <img src={appState.campaignImage} alt="" />
      </div>
      <button className="back-btn" onClick={prevPage}>
        Go Back
      </button>
      <h6>{appState.campaignName}</h6>
      <p>{appState.campaignDescription}</p>
      <h6>Description</h6>
      <p>{appState.campaignDescription}</p>
      <h6>Categories</h6>
      <div className="preview-categories">
        {appState.categories.map((category) => {
          return <p key={category}>{category}</p>;
        })}
      </div>
      <h6>Minimum Followers</h6>
      <p>{appState.followers}</p>
      <h6>Platform Required</h6>
      <div className="preview-categories">
        {appState.platform.map((platform) => {
          return <p key={platform}>{platform}</p>;
        })}
      </div>
    </div>
  );
}

export default Preview;
