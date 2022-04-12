import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Campaigns from "./components/Campaigns";
// import CampaignDetails from "./components/CampaignDetails";
// import Preview from "./components/Preview"
export const AppContext = React.createContext();
const useOnEnterKeyPress = (key, cb) => {
  const callbackRef = useRef(cb);
  useEffect(() => {
    callbackRef.current = cb;
  });
  useEffect(() => {
    function handle(e) {
      if (e.code === key) {
        callbackRef.current(e);
      }
    }
    document.addEventListener("keypress", handle);
    return () => document.removeEventListener("keypress", handle);
  }, [key]);
};
function App() {
  const [page, setPage] = useState(0);
  const [addClass, setAddClass] = useState("");
  const [enable, setEnable] = useState(false);
  const [preview, setPreview] = useState(false);
  const [appState, setAppState] = useState({
    campaignName: "",
    campaignDescription: "",
    campaignImage: [],
    serviceOption: "",
    serviceDescription: "",
    platform: [],
    followers: "",
    targetGender: "Select your gender",
    categories: [],
    selected: [],
  });
  const prevPage = () => {
    setPage((currentPage) => currentPage - 1);
    setAddClass("prev-page-active");
    setEnable(true);
  };
  const nextPage = () => {
    setPage((currentPage) => currentPage + 1);
    setAddClass("next-page-active");
    setEnable(false);
    if (page === 9) {
      setPreview(!preview);
    }
  };
  const handleStateChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let { ...newState } = appState;
    newState[name] = value;
    setAppState(newState);

   
    if (appState.campaignDescription !== "") {
      setEnable(true);
    } else {
      setEnable(false);
    }
    if (appState.campaignImage.length > 0) {
      setEnable(true);
    } else {
      setEnable(false);
    }
    if (appState.serviceOption && appState.serviceDescription > 0) {
      setEnable(true);
    } else {
      setEnable(false);
    }
    if (appState.followers !== "") {
      setEnable(true);
    } else {
      setEnable(false);
    }
    if (appState.selected.length > 0) {
      setEnable(true);
    } else {
      setEnable(false);
    }
  };

  return (
    <>
      <Navbar />
      <AppContext.Provider
        value={{
          appState,
          handleStateChange,
          setAppState,
          page,
          setPage,
          prevPage,
          nextPage,
          setEnable,
          enable,
          useOnEnterKeyPress,
          addClass,
        }}
      >
        <Campaigns />
        {/* <CampaignDetails /> */}
        {/* <Preview /> */}
      </AppContext.Provider>
    </>
  );
}

export default App;
