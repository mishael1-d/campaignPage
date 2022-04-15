import React, { useContext } from "react";
import { AppContext } from "../App";
import tick from "../assets/done-tick.png";
import arrowUp from "../assets/arrow-up.png";
import arrowDown from "../assets/arrow-down.png";

function Buttons() {
  const { setPage, prevPage, nextPage, page, enable, setEnable, useOnEnterKeyPress } =
    useContext(AppContext);
  const handleEnter = () => {
    if (enable) {
      setPage((currentPage) => currentPage + 1);
    }
    setEnable(false)
  };
  
  useOnEnterKeyPress("Enter", handleEnter)
  return (
    <div>
      {page !== 8 && (
        <button disabled={!enable} className={!enable ? "inactive" : "active"} onClick={nextPage}>
          Done{" "}
          <span>
            <img src={tick} alt="" />
          </span>
        </button>
      )}
      {page !== 8 && (
        <span className="subtitle-container">
          Press <span className="left-subtitle">'Enter'</span>
        </span>
      )}
      <div className="arrow-btn-container">
        <button className={page !== 0 ? "active" : "inactive"} onClick={prevPage} disabled={page === 0}>
          <img src={arrowUp} alt="Back" />
        </button>
        <button
          className={enable === true ? "active" : "inactive"}
          onClick={nextPage}
          disabled={enable === false || page === 8}
        >
          <img src={arrowDown} alt="Next" />
        </button>
      </div>
    </div>
  );
}

export default Buttons;
