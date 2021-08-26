import React from "react";
import ChatUIContextProvider from "../context/ChatUIContextProvider";
import LeftSideBar from "../components/chat-ui/layout/LeftSideBar";
import RightSection from "../components/chat-ui/layout/RightSection";

const ChatUIContainer = () => {
  return (
    <ChatUIContextProvider>
      <div className="app-body">
        <div className="body-section left">
          <LeftSideBar />
        </div>
        <div className="body-section right">
          <RightSection />
        </div>
      </div>
    </ChatUIContextProvider>
  );
};

export default ChatUIContainer;
