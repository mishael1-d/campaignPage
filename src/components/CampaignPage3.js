import React, { useContext } from "react";
import addBtn from "../assets/plus.png";
import { AppContext } from "../App";
function Campaign({ setEnable }) {
  const { appState, setAppState } = useContext(AppContext);

  if (appState.campaignImage !== "") {
    setEnable(true);
  }
  const onFileChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        const { ...newData } = appState;
        newData.campaignImage = reader.result;
        setAppState(newData);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <div className="imagePage">
      <h3 className="heading">Please Select Image</h3>
      <div className="imageContainer">
        <div className="addImage addBtn">
          <input type="file" id="image" onChange={onFileChange} />
          <label htmlFor="image">
            <img src={addBtn} alt="" />
          </label>
        </div>
        <div className="addImage image">
          <img src={appState.campaignImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Campaign;
