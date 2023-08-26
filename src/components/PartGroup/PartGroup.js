import React from "react";
import PartList from "../PartList/PartList";
import "./PartGroup.css";

function PartGroup({ partGroup, total, handleSelectItem, selectedItems }) {
  return (
    <div className="group-wrapper">
      {partGroup.map((part, index) => {
        return (
          <div className="list-section" key={part + index}>
            <h2 className="list-title">
              {partGroup[index].replace("_", " ").replace("layer", "clothing")}
            </h2>
            <PartList
              total={total[partGroup[index]]}
              type={partGroup[index]}
              selected={selectedItems[partGroup[index]]}
              handleSelect={handleSelectItem}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PartGroup;
