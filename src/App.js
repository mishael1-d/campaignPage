import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import Campaigns from "./components/Campaigns";
import CampaignDetails from "./components/CampaignDetails";
export const AppContext = React.createContext();
function App() {
  const [page, setPage] = useState(0);
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
    selected: []
  });
  const prevPage = () => {
    setPage((currentPage) => currentPage - 1);
    setEnable(true);
  };
  const nextPage = () => {
    setPage((currentPage) => currentPage + 1);
    setEnable(false);

    if (page === 9) {
      setPreview(!preview);
    }
  };
  const handleStateChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let {...newState} = appState;
    newState[name]=value;
    setAppState(newState);
  };
  return (
    <>
      <Navbar />
      <AppContext.Provider value={{ appState, handleStateChange, setAppState, page, setPage, prevPage, nextPage, setEnable, enable }}>
        {/* <Campaigns  /> */}
        <CampaignDetails />
      </AppContext.Provider>
    </>
  );
}

export default App;
