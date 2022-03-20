import React, { useEffect, useState } from "react";
import ActionLink from "./ActionLink";

const ActionTray = ({ options }) => {
  //const [isValid, setIsValid] = useState(true);

  const actions = [
    "replace",
    "content",
    "properties",
    "style",
    "admin",
    "add",
    "delete",
  ];
  const actionHandler = (action) => {
    console.log(action);
    //setIsValid(false);
    if(!action) {
      throw new Error("I crashed");
    }
  };

  // useEffect(() => {
  //   if(!isValid) {
  //     throw new Error("I crashed");
  //   }
  // }, [isValid]);

  return (
    <div className="action-tray">
      {actions.map(
        (action) =>
          options[action] && (
            <ActionLink key={action} action={action} onAction={actionHandler} />
          )
      )}
    </div>
  );
};

export default ActionTray;
