import React, { useContext } from "react";
import addBtn from "../assets/plus.png";
import { AppContext } from "../App";
import Buttons from "./Buttons"
function CampaignPage3() {
  const { appState, setAppState,setEnable } = useContext(AppContext);

  
  const onFileChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        const { ...newImage } = appState;
        newImage.campaignImage.push(reader.result);
        if (newImage.campaignImage.length > 0) {
          setEnable(true);
        } else {
          setEnable(false);
        }
        setAppState(newImage);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <>
    <div className="imagePage">
      <h3 className="heading">Please Select Image</h3>
      <div className="imageContainer">
        <div className="addImage addBtn">
          <input type="file" multiple id="image" onChange={onFileChange} />
          <label htmlFor="image">
            <img src={addBtn} alt="" />
          </label>
        </div>
        <div className="addImage image">
        {appState.campaignImage.map((src) => {
          return (
              <img src={src} alt="" key={src}/>
              );
            })}
            </div>
      </div>
    </div>
      <Buttons />
      </>
  );
}

export default CampaignPage3;
