import * as icons from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import stringSimilarity from "string-similarity";

function useIcons(name: string) {
  const [icon, setIcon] = useState("i");

  useEffect(() => {
    const iconsNames = Object.keys(icons);
    var matches = stringSimilarity.findBestMatch(name, iconsNames);
    const bestMatch = matches.bestMatch.target;
    setIcon(icons[bestMatch]);
  }, [name]);

  return icon;
}

export default useIcons;
