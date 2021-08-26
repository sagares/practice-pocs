import React from "react";
import Search from "@material-ui/icons/Search";
import "./Home.scss";

const Home = () => {
  return (
    <div className="app-home">
      <div className="app-header">
        <h1>POC Laboratory</h1>
        <div className="app-header__left">
          <div className="search-bar">
            <input
              type="text"
              className="search-bar__input"
              placeholder="Enter keyword..."
              aria-label="search"
            />
            <button className="search-bar__submit" aria-label="submit search">
              <Search />
            </button>
          </div>
        </div>
      </div>

      <div className="link-container">
        <a className="btn-link neon-button" href="/chatApp">
          Chat App
        </a>
        <a className="btn-link neon-button" href="/imageEditor">
          Image Editor
        </a>
      </div>
    </div>
  );
};

export default Home;
