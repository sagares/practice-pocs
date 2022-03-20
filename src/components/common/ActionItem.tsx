import React from "react";
import useIcons from "../../hooks/useIcons";
import { ActionItemProps } from "../../types/PropTypes";

import "./ActionItem.scss";

const ActionItem = ({ name, actionHandler, originalObj }: ActionItemProps) => {
  const handleActionClick = () => {
    actionHandler(name);
    originalObj.name = originalObj.name  + " s";
    // setObj({
    //   ...obj,
    //   dob: obj.db + ">"
    // });
  };

  const GetIcon = (iconName: string) => {
    const Icon = useIcons(iconName);
    return <Icon/>
  };

  return (
    <div className="action-item" onClick={handleActionClick}>
        {GetIcon(name)}
    </div>
  );
};

export default ActionItem;
