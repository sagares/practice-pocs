import React from "react";
import ActionBar from "../components/image-editor/ActionBar";
import WorkBench from "../components/image-editor/WorkBench";

const ImageEditorContainer = () => {
  return (
    <div className="app-body image-editor">
      <div className="body-section left">
          <ActionBar />
      </div>
      <div className="body-section right">
          <WorkBench />
      </div>
    </div>
  );
};

export default ImageEditorContainer;
