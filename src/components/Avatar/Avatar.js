import React from "react";
import { Group, Image, Layer, Stage } from "react-konva";
import "./Avatar.css";
function Avatar({ selectedItems, handleRandomize }) {
  const IMG_W = 250;
  const IMG_H = 250;
  const accessories = ["earrings", "glasses", "hats", "neckwear"];
  const clothes = ["layer_1", "layer_2", "layer_3"];

  let imageArr = [];
  for (let i in selectedItems) {
    let img = new window.Image();
    let tmpType = i;
    if (accessories.includes(tmpType)) {
      tmpType = `accessories\\${tmpType}`;
    } else if (clothes.includes(tmpType)) {
      tmpType = `clothes\\${tmpType}`;
    }
    img.src = `./character/${tmpType}/${selectedItems[i] + 1}.png`;
    imageArr.push(img);
  }
  const noseImg = new window.Image();
  noseImg.src = `./character/noses/1.png`;
  imageArr.push(noseImg);
  const stageRef = React.useRef(null);
  const handleExport = () => {
    const uri = stageRef.current.toDataURL(); //base64
    downloadURI(uri, "character.png");
  };
  function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div>
      <div className="avatar-wrapper">
        <div className="avatar">
          <Stage width={IMG_W} height={IMG_H} ref={stageRef}>
            <Layer>
              <Group>
                {imageArr
                  .filter((i, index) => index < 5)
                  .map((i, index) => (
                    <Image
                      key={i + index}
                      height={IMG_H}
                      width={IMG_W}
                      image={i}
                    />
                  ))}
              </Group>
            </Layer>
            <Layer>
              <Group>
                {imageArr
                  .filter((i, index) => index >= 5 && index < 10)
                  .map((i, index) => (
                    <Image
                      key={i + index}
                      height={IMG_H}
                      width={IMG_W}
                      image={i}
                    />
                  ))}
              </Group>
            </Layer>
            <Layer>
              <Group>
                {imageArr
                  .filter((i, index) => index >= 10)
                  .map((i, index) => (
                    <Image
                      key={i + index}
                      height={IMG_H}
                      width={IMG_W}
                      image={i}
                    />
                  ))}
              </Group>
            </Layer>
          </Stage>
        </div>
        <div>
          <button className="random-btn" onClick={handleRandomize}>
            RANDOMIZE
          </button>
          <button className="download-btn" onClick={handleExport}>
            <img src="./download-icon.png" height={20} alt="download" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
