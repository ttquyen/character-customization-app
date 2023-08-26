import React from "react";
import "./Avatar.css";
function Avatar({ selectedItems, handleRandomize }) {
  const accessories = ["earrings", "glasses", "hats", "neckwear"];
  const clothes = ["layer_1", "layer_2", "layer_3"];
  let parts = [];
  for (let i in selectedItems) {
    let tmpType = i;
    if (accessories.includes(tmpType)) {
      tmpType = `accessories\\${tmpType}`;
    } else if (clothes.includes(tmpType)) {
      tmpType = `clothes\\${tmpType}`;
    }

    parts.push(
      <img
        src={`./character/${tmpType}/${selectedItems[i] + 1}.png`}
        alt={`${i}/${selectedItems[i]}`}
        height={100}
        style={{ position: "absolute", zoom: "2.5" }}
        key={i + selectedItems[i]}
      />
    );
  }
  return (
    <div>
      <div className="avatar-wrapper">
        <div className="avatar">
          {parts}
          <img
            src={`./character/noses/1.png`}
            alt="noses"
            height={100}
            style={{ position: "absolute", zoom: "2.5" }}
          />
        </div>
        <div>
          <button className="random-btn" onClick={handleRandomize}>
            RANDOMIZE
          </button>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
