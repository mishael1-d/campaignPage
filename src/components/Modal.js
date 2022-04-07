/* eslint-disable array-callback-return */
import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import checkbox from "../assets/checkbox.png";
function Modal({ closeModal }) {
  const [select, setSelect] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { appState, setAppState } = useContext(AppContext);
  const handleSelect = (data, e) => {
    setSelect(!select);
    const { ...newData } = appState;
    if (!appState.categories.includes(data)) {
      newData.categories.push(data);
      setAppState(newData);
    } else {
      setAppState(...newData);
    }
  };
  const categories = [
    {
      name: "Category1",
    },
    {
      name: "Category2",
    },
    {
      name: "Category3",
    },
    {
      name: "Category4",
    },
    {
      name: "Category5",
    },
    {
      name: "Category6",
    },
  ];

  return (
    <div className="modal-container">
      <div className="overlay"></div>
      <div className="modal">
        <h3>Select Categories</h3>
        <div className="search-bar">
          <input
            type="search"
            placeholder="Search category here"
            className="search-field"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {categories
          .filter(category => {
            if (searchTerm === "") {
              return category;
            } else if (
              category.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return category;
            }
          })
          .map((category) => {
            return (
              <div className="categories" key={category.name}>
                <p onClick={(e) => handleSelect(category.name, e)}>
                  {category.name}
                </p>
                {select && <img src={checkbox} alt="Selected" />}
              </div>
            );
          })}
        <button
          type="submit"
          className="search-btn"
          onClick={() => closeModal()}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default Modal;
