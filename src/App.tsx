import React, { useState } from "react";
import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import ContentContainer from "./components/ContentContainer";
import { IsLoginClicked } from "./Contexts/LoginContext";

const App = () => {
  const [isLoginClicked, setIsLoginClicked] = useState(true);
  return (
    <IsLoginClicked.Provider value={{ isLoginClicked, setIsLoginClicked }}>
      <div className="flex bg-[#F9FBFC]">
        <SideBar />
        <div className="px-5 flex flex-col gap-10">
          <TopBar />
          <ContentContainer />
        </div>
      </div>
    </IsLoginClicked.Provider>
  );
};

export default App;
