import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Campaigns from "./components/Campaigns";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";
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

  const [warning, setWarning] = useState(false);
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

  const stateKeys = [
    "campaignName",
    "campaignDescription",
    "campaignImage",
    "serviceOption",
    "serviceDescription",
    "platform",
    "followers",
    "targetGender",
    "categories",
    "selected",
  ];

  const prevPage = () => {
    setPage((currentPage) => currentPage - 1);
    setAddClass("prev-page-active");
    const value = stateKeys.map((keys) => appState[keys].length > 0);
    if (value[page - 1]) {
      setEnable(true);
    } else {
      setEnable(false);
    }
    console.log(value);
  };
  const nextPage = () => {
    setAddClass("next-page-active");
    const value = stateKeys.map((keys) => appState[keys].length > 0);
    if (!value[page + 1]) {
      setEnable(false);
    } else {
      setEnable(true);
    }
    setPage((currentPage) => currentPage + 1);
    console.log(value[page + 1]);
  };

  const handleStateChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let { ...newState } = appState;
    newState[name] = value;
    setAppState(newState);
  };

  const postRef = collection(db, "users");
  const submitCampaign = async () => {
    setPage((currentPage) => currentPage + 2);
    setAddClass("next-page-active");
    setEnable(false);
    await addDoc(postRef, {
      campaignName: appState.campaignName,
      campaignDescription: appState.campaignDescription,
      campiagnImage: appState.campaignImage,
      followers: appState.followers,
      categories: appState.categories,
      platforms: appState.platform,
      servicOptions: appState.serviceOption,
      serviceDescription: appState.serviceDescription,
      gender: appState.targetGender,
    });
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
          warning,
          setWarning,
          submitCampaign,
        }}
      >
        <Campaigns />
      </AppContext.Provider>
    </>
  );
}

export default App;
