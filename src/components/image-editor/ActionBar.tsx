import React from "react";
import ActionItem from "../common/ActionItem";

import "./ActionBar.scss";

const ActionBar = () => {
  //const [action, setAction] = useState()
  const actionHandler = (action) => {
    console.log(action);
  }

  return (
    <div className="action-bar">
      <div className="action-btn open-image">
        <ActionItem name="photo_size_select_actual" actionHandler={actionHandler}/>
      </div>
      <div className="action-btn resize">
        <ActionItem name="aspect_ratio" actionHandler={actionHandler}/>
      </div>
      <div className="action-btn move">
        <ActionItem name="open_with" actionHandler={actionHandler}/>
      </div>
      <div className="action-btn select">
        <ActionItem name="check_box_outline_blank" actionHandler={actionHandler}/>
      </div>
      <div className="action-btn draw-shape">
        <ActionItem name="format_shapes" actionHandler={actionHandler}/>
      </div>
      <div className="action-btn rich-text">
        <ActionItem name="title " actionHandler={actionHandler}/>
      </div>
      <div className="action-btn gradient">
        <ActionItem name="gradient " actionHandler={actionHandler}/>
      </div>
    </div>
  );
};

export default ActionBar;