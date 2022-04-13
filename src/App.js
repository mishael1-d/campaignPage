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
  const prevPage = (e) => {
    setPage((currentPage) => currentPage - 1);
    setAddClass("prev-page-active");
    setEnable(true);
    // if (!enable) {
    //   setEnable((currentEnable)=> !currentEnable && true )
    // } 

    console.log(e.target);
  };
  const nextPage = (e) => {
    setPage((currentPage) => currentPage + 1);
    // if (enable) {
    //   setEnable((currentEnable)=> !currentEnable && true)
    // } else if (!enable) {
    //   setEnable((currentEnable)=> currentEnable && true)
    // }
    setAddClass("next-page-active");
    setEnable(false);
  };
  const lastPage =()=>{
    setPage((currentPage) => currentPage + 2);
    setAddClass("next-page-active");
    setEnable(false);
  }
  const handleStateChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let { ...newState } = appState;
    newState[name] = value;
    setAppState(newState);
   
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
          lastPage
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
