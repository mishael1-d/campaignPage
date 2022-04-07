import React, { useContext } from "react";
import { AppContext } from "../App";

function Preview() {
  const { appState } = useContext(AppContext);
  return (
    <div className="preview-container">
      <div className="preview-image">
          <img src={appState.campaignImage} alt=""/>
      </div>
      <button className="back-btn">Go Back</button>
      <h6>{appState.campaignName}</h6>
      <p>{appState.campaignDescription}</p>
      <h6>Description</h6>
      <p>{appState.campaignDescription}</p>
      <h6>Categories</h6>
      {appState.categories.map((category) => {
        return <p>{category}</p>;
      })}
      <h6>Minimum Followers</h6>
      <p>{appState.followers}</p>
      <h6>Platform Required</h6>
      {appState.platform.map((platform)=>{
          return (
              <p>{platform}</p>
          )
      })}
    </div>
  );
}

export default Preview;
