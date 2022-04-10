import React, {useContext} from "react";
import {AppContext} from "../App"
import Buttons from "./Buttons"
function Campaign() {
  const {appState, nextPage} = useContext(AppContext)
  console.log(appState)
  return (
    <>
    <div className="submit-section">
      <button className="inactive preview" onClick={nextPage}>Preview</button>
      <button className="active submit">Submit</button>
  </div>
  <Buttons />
  </>
  );
}

export default Campaign;
