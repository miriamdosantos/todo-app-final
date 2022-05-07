import { useState } from "react";
import db from "../storage/items";
import "../App.css";

export const CreateItem = ({ items, setItems }) => {
  const [item, setItem] = useState("");
  const saveItemToDB = (e) => {
    e.preventDefault();

    let doc = {
      item,
      dateAdded: String(
        new Date().getDate() +
          "/" +
          (new Date().getMonth() + 1) +
          "/" +
          new Date().getFullYear()
      ),
    };
    db.insert(doc, (err, newDoc) => {
      if (!err) {
        console.info("Item Added");
        setItems([...items, doc]);
        setItem("");
      }
    });
  };
  return (
    <div className="w-[1000px] h-[100px] bg-[#201f1f] border-2 rounded-md px-4 py-4 mx-4 my-4 border-[#ff9d00] flex flex-justify-between">
      <input
        type="text"
        placeholder="Add New Task Here ...."
        className="px-4 py-2 text-white bg-black w-[700px]"
        onChange={(e) => {
          setItem(e.target.value);
        }}
        value={item}
      />
      <button
        className="text-2xl text-[#ff9d00] font-bold w-[100px] mx-4 mr-0 px-2 py-2 bg-black border-[#ff9d00] border-2 rounded-md"
        onClick={saveItemToDB}
      >
        +
      </button>
    </div>
  );
};
