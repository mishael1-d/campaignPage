/* eslint-disable array-callback-return */
import React, { useContext, useState } from "react";
import { AppContext } from "../App";
import checkbox from "../assets/checkbox.png";
function Modal({ closeModal, setCategories }) {
  const [searchTerm, setSearchTerm] = useState("");
  const { appState, setAppState } = useContext(AppContext);
  

  const handleSelect = (data) => {
    let { ...newData } = appState;
    
    const exist = newData.selected.find((val) => val === data);
    if (!exist) {
      newData.selected.push(data);
      
      setCategories(newData.selected.join(', '));
    } else {
      const filtered = newData.selected.filter((val) => val !== data);
      newData.selected=filtered
    }
    setCategories(newData.selected.join(', '));
    
    if (!newData.categories.includes(data)) {
      newData.categories.push(data);
      setAppState(newData);
    } else {
      setAppState(newData)
    }
  };

  const categories = [
    {
      name: "Adventure",
    },
    {
      name: "Racing",
    },
    {
      name: "Athlete",
    },
    {
      name: "Technology",
    },
    {
      name: "Advertisment",
    },
    {
      name: "Blogging",
    },
    {
      name: "Science",
    },
    {
      name: "Arts",
    },
    {
      name: "Publications",
    },
    {
      name: "Real Estate",
    },
    {
      name: "Social media",
    },
    {
      name: "Networking",
    },
    {
      name: "Freelancing",
    },
    {
      name: "Web Development",
    },
    {
      name: "Data Science",
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
          .filter((category) => {
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
              <div
                className="categories"
                key={category.name}
                onClick={(e) => handleSelect(category.name, e)}
              >
                <p>{category.name}</p>
                {appState.selected.includes(category.name) && (
                  <img src={checkbox} alt="Selected" />
                )}
              </div>
            );
          })}
        <button
          type="submit"
          className={appState.selected.length > 0 ? "search-btn-active" : "search-btn-inactive"}
          onClick= {() => closeModal()}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default Modal;
