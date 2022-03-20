import React, { useContext, useEffect, useState } from "react";
import ChatUIContext from "../../../context/ChatUIContext";
import Outline from "../../outline-cards/Outline";
import Header from "../header/Header";

import "./LeftSideBar.scss";

const LeftSideBar = () => {
  const { getActionItems, setActionItems } = useContext(ChatUIContext);

  const [someState, setSomeState] = useState("initial value");

  const actionHandler = (name) => {
    console.log("left action>>> ", name);

    setSomeState(name);
  };

  useEffect(() => {
    setActionItems("leftActions", [
      { name: "GitHub", actionHandler },
      { name: "LocalPhone", actionHandler },
      { name: "MoreVert", actionHandler },
    ]);
  }, []);

  useEffect(() => {
    console.log("1");
    console.log(someState);
  }, [someState]);

  return (
    <div className="left-side-bar">
      <Header type="left" actionItems={getActionItems("left")} />
      <Outline/>
    </div>
  );
};

export default LeftSideBar;
