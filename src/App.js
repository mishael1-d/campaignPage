import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
// import Campaigns from "./components/Campaigns";
import CampaignPage1 from "./components/CampaignPage1"
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";
// import Preview from "./components/Preview";
import CampaignDetails from "./components/CampaignDetails";
export const AppContext = React.createContext();

//Functionality for ENTER KEY press
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
  const [auth, setAuth] = useState(false)
  const [enable, setEnable] = useState(false);
  const [message, setMessage] = useState("");
  const [activeOptionA, setActiveOptionA] = useState(false);
  const [activeOptionB, setActiveOptionB] = useState(false);
  const [warning, setWarning] = useState(false);
  const [appState, setAppState] = useState({
    campaignName: "",
    campaignDescription: "",
    campaignImage: [],
    serviceOption: 0,
    platform: [],
    followers: "",
    targetGender: "Select your gender",
    categories: [],
    selected: [],
  });

  //Get the values of the in each key-value pair of the state
  const stateKeys = Object.values(appState);
  const prevPage = () => {
    setPage((currentPage) => currentPage - 1);
    if (
      stateKeys[page - 1].length > 0 &&
      (stateKeys[page - 1] !== "" || stateKeys[page - 1] !== [])
    ) {
      setEnable(true);
    } else {
      setEnable(false);
    }
  };
  const nextPage = () => {
    setPage((currentPage) => currentPage + 1);
    if (page !== 8) {
      if (
        stateKeys[page + 1].length > 0 &&
        (stateKeys[page + 1] !== "" ||
          stateKeys[page + 1] !== [] ||
          stateKeys[page + 1] !== "Select your gender")
      ) {
        setEnable(true);
      } else {
        setEnable(false);
      }
      setWarning(false);
    }
  };

  const postRef = collection(db, "users");
  const submitCampaign = async () => {
    setPage((currentPage) => currentPage + 2);
    setEnable(false);
    await addDoc(postRef, {
      campaignName: appState.campaignName,
      campaignDescription: appState.campaignDescription,
      campiagnImage: appState.campaignImage,
      followers: appState.followers,
      categories: appState.categories,
      platforms: appState.platform,
      servicOptions: appState.serviceOption,
      gender: appState.targetGender,
    });
    setAuth(true)
  };


  return (
    <BrowserRouter>
      <Navbar />
      <AppContext.Provider
        value={{
          appState,
          setAppState,
          page,
          setPage,
          prevPage,
          nextPage,
          setEnable,
          enable,
          useOnEnterKeyPress,
          warning,
          setWarning,
          submitCampaign,
          activeOptionA,
          setActiveOptionA,
          activeOptionB,
          setActiveOptionB,
          message,
          setMessage,
          auth
        }}
      >
        <Routes>
          <Route path="/" exact element={<CampaignPage1 />} />
          <Route path="campaign-details" exact element={<CampaignDetails />} />
          </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
