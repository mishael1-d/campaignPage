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
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
newImage.campaignImage = fileArray
      setSelectedImages((prevImages) => prevImages.concat(fileArray));
    }
    setAppState(newImage)
    if (newImage.campaignImage.length > 0) {
      setEnable(true)
    }

  };
  const renderPhotos = (source) => {
    return source.map((photo) => {
      return <img src={photo} alt="" key={photo} />;
    });
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
          <div className="addImage image">{renderPhotos(selectedImages)}</div>
        </div>
      </div>
      <Buttons />
    </>
  );
}

export default CampaignPage3;
