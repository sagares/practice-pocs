import React, {useEffect, useState} from "react";
import useIcons from "../../hooks/useIcons";
import { ActionItemProps } from "../../types/PropTypes";

import "./ActionItem.scss";

const ActionItem = ({ name, actionHandler, originalObj }: ActionItemProps) => {
  const [obj, setObj] = useState(originalObj)
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

  useEffect(() => {
    console.log(originalObj);
    console.log("original object changed");
  }, [originalObj]);

  useEffect(() => {
    console.log(obj);
    console.log("state object changed");
  }, [obj]);

  return (
    <div className="action-item" onClick={handleActionClick}>
        {GetIcon(name)}
    </div>
  );
};

export default ActionItem;
