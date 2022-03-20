import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import useIcons from "../../hooks/useIcons";
import Tooltip from "./Tooltip";

const ActionLink = ({ action, onAction }) => {
  const [hovered, setHovered] = useState(false);
  const actionMap = {
    properties: "DisplaySettings",
    style: "Brush",
    admin: "Person",
    add: "AddCircle",
    replace: "SwapHoriz",
    replaceOperation: true,
    content: "InsertDriveFile",
    delete: "Delete",
  };

  const handleActionClick = () => {
    onAction();
  };

  const GetIcon = (action: string) => {
    const Icon = useIcons(actionMap[action]);
    return <Icon />;
  };

  return (
    <>
      <div
        className={`action-link ${action}`}
        onClick={handleActionClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {GetIcon(action)}
      </div>
      {hovered &&
        createPortal(
          <Tooltip text={action} />,
          document.querySelector(`.action-link.${action}`)
        )}
    </>
  );
};

export default ActionLink;
