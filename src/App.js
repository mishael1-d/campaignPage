import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Campaigns from "./components/Campaigns";
export const AppContext = React.createContext();
function App() {
  const [appState, setAppState] = useState({
    campaignName: "",
    campaignDescription: "",
    campaignImage: "",
    serviceOption: "",
    serviceDescription: "",
    platform: [],
    followers: "",
    targetGender: "Select your gender",
    categories: [],
    selected: []
  });

  const handleStateChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let {...newState} = appState
    newState[name]=value
    setAppState(newState);
  };
  return (
    <>
      <Navbar />
      <AppContext.Provider value={{ appState, handleStateChange, setAppState }}>
        <Campaigns  />
      </AppContext.Provider>
    </>
  );
}

export default App;
