import React from "react";

function PartList({ total, type, selected, handleSelect }) {
  console.log(">>>total", total);
  console.log(">>>type", type);
  console.log(">>>selected", selected);
  console.log(">>handleSelect", handleSelect);

  let parts = [];
  for (let i = 0; i < total; i++) {
    parts.push(
      <div
        key={type + i}
        className={
          selected === i ? "selected clickable square" : "clickable square"
        }
        onClick={() => handleSelect(i)}
      >
        <img
          src={`./character/${type}/${i + 1}.png`}
          alt=""
          height={60 * 2}
          className="img-center"
          // style={{ top }}
        />
      </div>
    );
  }
  return <div>{parts}</div>;
}

export default PartList;
