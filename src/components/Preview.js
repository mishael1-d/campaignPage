import React, { useContext } from "react";
import { AppContext } from "../App";

function Preview({ prevPage }) {
  const { appState } = useContext(AppContext);
  return (
    <>
      <div className="preview-container">
        <div>
          <div className="preview-image">
            <img src={appState.campaignImage[0]} alt="" />
          </div>
          <h3>{appState.campaignName}</h3>
          <p>{appState.campaignDescription}</p>
          <h3>Description</h3>
          <p>{appState.campaignDescription}</p>
          <h3>Categories</h3>
          <div className="preview-categories">
            {appState.categories.map((category) => {
              return <p key={category}>{category}</p>;
            })}
          </div>
          <h3>Minimum Followers</h3>
          <p>{appState.followers}</p>
          <h3>Platform Required</h3>
          <div className="preview-categories">
            {appState.platform.map((platform) => {
              return <p key={platform}>{platform}</p>;
            })}
          </div>
        </div>
        <div>
          <button className="back-btn" onClick={prevPage}>
            Go Back
          </button>
        </div>
      </div>
    </>
  );
}

export default Preview;
