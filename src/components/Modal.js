/* eslint-disable array-callback-return */
import React, { useContext, useState, useRef, useEffect } from "react";
import { AppContext } from "../App";
import checkbox from "../assets/checkbox.png";
import Warnings from "./Warnings";
function Modal({ closeModal, setCategories, setShowCategory }) {
  const ref = useRef(null);
  useOnClickOutside(ref, () => setShowCategory(false));
  const [searchTerm, setSearchTerm] = useState("");
  const { appState, setAppState, warning, setWarning, message, setMessage } =
    useContext(AppContext);
  const [catStyle, setCatStyle] = useState(false);

  const handleSelect = (data, index) => {
    let { ...newData } = appState;
    let filter = [];
    const exist = newData.selected.find((val) => val === data);
    if (newData.selected.length === 5) {
      filter = newData.selected.filter((val) => val !== data);
      newData.selected = filter;
      setCatStyle((v) => !v);
      setWarning(true);
      setMessage("Max number of category selected");
    } else if (!exist) {
      newData.selected.push(data);
      setCategories(newData.selected.join(", "));
      // setCatStyle(false)
      // setWarning(false)
    } else {
      filter = newData.selected.filter((val) => val !== data);
      newData.selected = filter;
      // setWarning(false)
    }
    setCategories(newData.selected.join(", "));
    if (!newData.categories.includes(data)) {
      newData.categories.push(data);
      setAppState(newData);
    } else {
      setAppState(newData);
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
      <div className="modal" ref={ref}>
        {warning && <Warnings message={message} />}
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
          .map((category, index) => {
            return (
              <div
                className="categories"
                key={category.name}
                onClick={() => handleSelect(category.name)}
              >
                <p className={catStyle ? "blackCat" : "whiteCat"}>
                  {category.name}
                </p>
                {appState.selected.includes(category.name) && (
                  <img src={checkbox} alt="Selected" />
                )}
              </div>
            );
          })}
        <button
          type="submit"
          className={
            appState.selected.length > 0
              ? "search-btn-active"
              : "search-btn-inactive"
          }
          onClick={() => closeModal()}
        >
          Done
        </button>
      </div>
    </div>
  );
}
function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

export default Modal;
