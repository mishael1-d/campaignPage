/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import addBtn from "../assets/plus.png";
import { AppContext } from "../App";
import Buttons from "./Buttons";
function CampaignPage3() {
  const { appState, setAppState, setEnable } = useContext(AppContext);
  const [selectedImages, setSelectedImages] = useState([]);

  const onFileChange = (e) => {
    const { ...newImage } = appState;
    if (e.target.files) {
      if (e.target.files.length > 5 || newImage.campaignImage > 5) {
        return alert("Maximum number of seleted images is 5");
      } else {
        const fileArray = Array.from(e.target.files).map((file) =>
          URL.createObjectURL(file)
        );
        console.log(fileArray);
        if (newImage.campaignImage.length > 0) {
          newImage.campaignImage.concat(fileArray)
        } else {
          newImage.campaignImage = fileArray;
        }
        setSelectedImages((prevImages) => prevImages.concat(fileArray));
      }
    }
    setAppState(newImage);
    if (newImage.campaignImage.length > 0) {
      setEnable(true);
    }
  };
  // const renderPhotos = (source) => {
  //   return source.map((photo) => {
  //     return <img src={photo} alt="" key={photo} />;
  //   });
  // };
  return (
    <>
      <div className="imagePage">
        <h3 className="heading">Please Select Images</h3>
        <div className="imageContainer">
          <div className="addImage addBtn">
            <input type="file" multiple id="image" onChange={onFileChange} />
            <label htmlFor="image">
              <img src={addBtn} alt="" />
            </label>
          </div>
          <div className="addImage image">
            {/* {renderPhotos(appState.campaignImage)} */}
            {appState.campaignImage.map((photo)=>{
              return <img src={photo} alt="" key={photo} />
            })}
          </div>
        </div>
      </div>
      <Buttons />
    </>
  );
}

export default CampaignPage3;
