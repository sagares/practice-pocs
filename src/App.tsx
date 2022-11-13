import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ChatUIContainer, ImageEditorContainer } from "./containers";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <div className="main-app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatApp" element={<ChatUIContainer />} />
          <Route path="/imageEditor" element={<ImageEditorContainer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
