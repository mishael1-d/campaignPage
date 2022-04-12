import React, { useContext } from "react";
import { AppContext } from "../App";

function Preview({ prevPage }) {
  const { appState } = useContext(AppContext);
  return (
    <>
      <div className="preview-container">
        <div className="details-content">
          <div className="preview-image">
            <img src={appState.campaignImage[0]} alt="" />
          </div>
          <h3>{appState.campaignName}</h3>
          <p className="content">{appState.campaignDescription}</p>
          <h3 className="desc title">Description</h3>
          <p>{appState.campaignDescription}</p>
          <h3 className="cate title">Categories</h3>
          <div className="categories-section">
            {appState.categories.map((category) => {
              return <span key={category}>{category}</span>;
            })}
          </div>
          <h3 className="followers title">Minimum Followers</h3>
          <p className="content">{appState.followers}</p>
          <h3 className="rPlatform title">Platform Required</h3>
          <div className="categories-section">
            {appState.platform.map((platform) => {
              return <span key={platform}>{platform}</span>;
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
