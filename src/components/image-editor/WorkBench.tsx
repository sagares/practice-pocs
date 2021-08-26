import React from "react";
import Ruler from "@scena/react-ruler";
import "./WorkBench.scss";


const WorkBench = () => {

  return (
    <div className="work-bench">
        <Ruler negativeRuler={false} type="horizontal" direction="start" scrollPos={-43} style={{ display: "grid", width: "100%", height: "30px", gridColumn: "1/4" }}  textAlign={"left"} />
        <Ruler negativeRuler={false}
                textAlign={"right"}
                type="vertical" direction="end" scrollPos={-16} style={{ display: "grid", width: "30px", height: "680px", gridColumn: "1/2"}} />
           
      <div className="image-canvas">
          
      </div>
    </div>
  );
};

export default WorkBench;