import React from "react";

function Avatar(params) {
  const {
    body,
    eyes,
    haiz,
    clothing1,
    clothing2,
    clothing3,
    mouth,
    eyebrows,
    hat,
    glasses,
  } = params;
  return (
    <div>
      <div className="avata-wrapper">
        <div className="avatar">
          <img
            src="././././././s././s./././public/character/body/1.png"
            alt="horse"
          />
        </div>
        <button>RAMDOMIZE</button>
      </div>
    </div>
  );
}

export default Avatar;
