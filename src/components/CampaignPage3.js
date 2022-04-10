import React, { useContext } from "react";
import addBtn from "../assets/plus.png";
import { AppContext } from "../App";
import Buttons from "./Buttons"
function Campaign() {
  const { appState, setAppState,setEnable } = useContext(AppContext);

  if (appState.campaignImage.length > 0) {
    setEnable(true);
  } else {
    setEnable(false);
  }
  const onFileChange = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        const { ...newData } = appState;
        newData.campaignImage.push(reader.result);
        setAppState(newData);
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

export default Campaign;
