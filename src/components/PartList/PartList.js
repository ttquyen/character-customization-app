import React from "react";
import "./PartList.css";

function PartList({ total, type, selected, handleSelect }) {
  const accessories = ["earrings", "glasses", "hats", "neckwear"];
  const clothes = ["layer_1", "layer_2", "layer_3"];
  let tmpType = type;
  if (accessories.includes(tmpType)) {
    tmpType = `accessories\\${tmpType}`;
  } else if (clothes.includes(tmpType)) {
    tmpType = `clothes\\${tmpType}`;
  }

  let parts = [];
  for (let i = 0; i < total; i++) {
    parts.push(
      <div
        key={type + i}
        className={selected === i ? "selected button-55" : "button-55"}
        onClick={() => handleSelect(i, type)}
      >
        <img
          src={`./character/${tmpType}/${i + 1}.png`}
          alt=""
          height={50}
          className="img-center"
        />
      </div>
    );
  }
  return <div className="part-list">{parts}</div>;
}

export default PartList;
