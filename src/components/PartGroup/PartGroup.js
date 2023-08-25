import React from "react";
import PartList from "../PartList/PartList";

function PartGroup({ partGroup, total, handleSelect, selectedItems }) {
  console.log(partGroup);
  return partGroup.map((part, index) => {
    return (
      <div className="list-section">
        <h2>{partGroup[index]}</h2>
        <PartList
          total={total[partGroup[index]]}
          type={partGroup[index]}
          selected={selectedItems[partGroup[index]]}
          handleSelect={handleSelect}
        />
      </div>
    );
  });
}

export default PartGroup;
