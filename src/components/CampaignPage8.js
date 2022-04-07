import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import arrowDown from "../assets/arrow-down-black.png";
import Modal from "./Modal";

function Campaign({ setEnable }) {
  const [showCategory, setShowCategory] = useState(false);
  const [categories, setCategories] = useState("Select categories");
  const { appState } = useContext(AppContext);
  const handleCategorySelect = (e) => {
    setShowCategory(!showCategory);
  };
  const closeModal = () => {
    setShowCategory(false);
    setCategories(appState.categories.toString())
    if (appState.categories !== []) {
      setEnable(true)
    }
  }
  
  return (
    <div className="audience-section">
      <h3 className="heading">Choose categories for your ptoduct</h3>
          <div className= {appState.categories.length > 0 ? "categories-value":"optionContainer"} onClick={handleCategorySelect} >
            <p className="option-value">{categories}</p>
            {appState.categories.length > 0 ? undefined : <img src={arrowDown} alt="" />}
          </div>
      {showCategory && <Modal closeModal={closeModal} />}
    </div>
  );
}

export default Campaign;
