import React, {useContext} from "react";
import {AppContext} from "../App"
function Campaign({nextPage}) {
  const {appState} = useContext(AppContext)
  console.log(appState)
  return (
    <div className="submit-section">
      <button className="inactive preview" onClick={nextPage}>Preview</button>
      <button className="active submit">Submit</button>
  </div>
  );
}

export default Campaign;
