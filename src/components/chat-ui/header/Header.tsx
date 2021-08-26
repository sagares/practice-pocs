import React, { useState } from "react";
import { HeaderProps } from "../../../types/PropTypes";
import ActionItem from "../../common/ActionItem";
import "./Header.scss";

const Header = ({ text, type, actionItems }: HeaderProps) => {
  const person = {
    name: "santosh",
    dob: "24 July",
    address: { city: "Belgaum", state: "Karnatka" },
  }

  return (
    <header className="section-header">
      <div className="profile-picture">
        <div className="avatar"></div>
        <div className="header-text">{text}</div>
      </div>
      <div className="actions">
        {actionItems.map((actionItem) => (
          <ActionItem
            key={actionItem.name}
            {...actionItem}
            originalObj={person}
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
