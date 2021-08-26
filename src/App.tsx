import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ChatUIContainer, ImageEditorContainer } from "./containers";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <div className="main-app">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/chatApp" component={ChatUIContainer} />
          <Route path="/imageEditor" component={ImageEditorContainer} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
