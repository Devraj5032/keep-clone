
import React from "react";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

function Home(props) {
  return (
    <div className="flex">
    <Sidebar showSidebar={props.showSidebar}/>
    <MainContent />
    </div>
  );
}

export default Home;
