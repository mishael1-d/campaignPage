/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import arrowDown from "../assets/arrow-down-black.png";
import Modal from "./Modal";
import Buttons from "./Buttons";

function CampaignPage8({ setEnable }) {
  const [showCategory, setShowCategory] = useState(false);
  const [categories, setCategories] = useState("Select categories");
  const { appState } = useContext(AppContext);
  const handleCategorySelect = () => {
    if (appState.categories !== "") {
      setEnable(true);
    }
    setShowCategory(!showCategory);
  };
  const closeModal = () => {
    setShowCategory(false);
  };

  return (
    <>
      <div className="audience-section">
        <h3 className="heading">Choose categories for your product</h3>
        <div
          className={
            appState.selected.length > 0
              ? "categories-value"
              : "optionContainer"
          }
          onClick={handleCategorySelect}
        >
          <p className="option-value">
            {categories.length < 0 ? "Select categories" : categories}
          </p>
          {appState.categories.length > 0 ? undefined : (
            <img src={arrowDown} alt="" />
          )}
        </div>
        {showCategory && (
          <Modal closeModal={closeModal} setCategories={setCategories} />
        )}
      </div>
      <Buttons />
    </>
  );
}

export default CampaignPage8;
