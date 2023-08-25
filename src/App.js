import "./App.css";
import Avatar from "./components/Avatar/Avatar";
import PartGroup from "./components/PartGroup/PartGroup";
import { useEffect, useState } from "react";

function App() {
  const total = {
    body: 17,
    eyes: 17,
    hair: 73,
    mouth: 24,
    eyebrows: 15,
    hat: 28,
    glasses: 17,
    clothing1: 5,
    clothing2: 5,
    clothing3: 9,
  };
  const [body, setBody] = useState(0);
  const [eyes, setEyes] = useState(2);
  const [hair, setHair] = useState(0);
  const [mouth, setMouth] = useState(2);
  const [eyebrows, setEyebrows] = useState(2);
  const [hat, setHat] = useState(0);
  const [glasses, setGlasses] = useState(2);
  const [clothing1, setClothing1] = useState(0);
  const [clothing2, setClothing2] = useState(0);
  const [clothing3, setClothing3] = useState(0);
  const [partGroup, setPartGroup] = useState(Object.keys(total));
  const [selectedItems, setselectedItems] = useState({
    body: 0,
    eyes: 0,
    hair: 0,
    mouth: 0,
    eyebrows: 0,
    hat: 0,
    glasses: 0,
    clothing1: 0,
    clothing2: 0,
    clothing3: 0,
  });
  useEffect(() => {
    handleRandomize();
    console.log(total[partGroup[1]]);
  }, []);
  const handleRandomize = () => {
    const randomItems = { ...selectedItems };

    for (let [key, value] of Object.entries(randomItems)) {
      value = Math.floor(Math.random() * total[key]);
    }
    setselectedItems(randomItems);
  };
  const handleSelectItem = (a, b) => {
    console.log(a, b);
  };

  return (
    <div className="App">
      <div className="title">CHARACTER</div>
      <div className="sub-title">🛠️ USTOMIZATION 🛠️</div>
      <div className="divider"></div>
      <div className="avata-group">
        <Avatar
          body={body}
          eyes={eyes}
          hair={hair}
          clothing1={clothing1}
          clothing2={clothing2}
          clothing3={clothing3}
          mouth={mouth}
          eyebrows={eyebrows}
          hat={hat}
          glasses={glasses}
        />
        <PartGroup
          partGroup={partGroup}
          total={total}
          selectedItems={selectedItems}
          handleSelectItem={handleSelectItem}
        />
      </div>
    </div>
  );
}

export default App;
