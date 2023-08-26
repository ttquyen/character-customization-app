import "./App.css";
import Avatar from "./components/Avatar/Avatar";
import PartGroup from "./components/PartGroup/PartGroup";
import { useEffect, useState } from "react";

function App() {
  const total = {
    body: 17,
    eyes: 17,
    hair: 73,
    facial_hair: 17,
    mouths: 24,
    eyebrows: 15,
    hats: 28,
    glasses: 17,
    earrings: 32,
    neckwear: 18,
    layer_1: 5,
    layer_2: 5,
    layer_3: 9,
  };

  const partGroup = Object.keys(total);
  const [selectedItems, setSelectedItems] = useState({
    body: 1,
    eyes: 1,
    hair: 1,
    facial_hair: 1,
    mouths: 1,
    eyebrows: 1,
    hats: 1,
    glasses: 1,
    earrings: 1,
    neckwear: 1,
    layer_1: 1,
    layer_2: 1,
    layer_3: 1,
  });
  useEffect(() => {
    handleRandomize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [partGroup]);
  const handleRandomize = () => {
    const randomItems = { ...selectedItems };
    for (let o in randomItems) {
      randomItems[o] = Math.floor(Math.random() * total[o]);
    }
    setSelectedItems(randomItems);
  };
  const handleSelectItem = (a, b) => {
    setSelectedItems({ ...selectedItems, [b]: a });
  };

  return (
    <div className="App">
      <div className="title">CHARACTER</div>
      <div className="sub-title">CUSTOMIZATION 👌 </div>
      <div className="divider"></div>
      <div className="avatar-group">
        <Avatar
          selectedItems={selectedItems}
          handleRandomize={handleRandomize}
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
