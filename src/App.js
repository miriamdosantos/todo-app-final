import { useEffect, useState } from "react";
import Database from "./storage/items";
import "./App.css";
import { CreateItem } from "./Components/CreateItem";
import { TODOItems } from "./Components/AllItems";

function App() {
  const [items, setItems] = useState([]);

  const getAllItems = () => {
    Database.find({}, (err, docs) => {
      if (!err) {
        setItems(docs);
      }
    });
  };

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <div className="App">
      <h4 class="text-2xl font-bold text-[#ff9d00] px-2 mt-4">
        REACT & ELECTRON JS TODO APP :
      </h4>
      <h3 class="text-1xl font-bold text-[#ff9d00] px-2">
        Developed by : Miriam & Ronaldo
      </h3>
      <CreateItem items={items} setItems={setItems} />
      <TODOItems items={items} setItems={setItems} />
    </div>
  );
}

export default App;
