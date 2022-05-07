import db from "../storage/items";
import "../App.css";

export const Item = ({ item, idx, items, setItems }) => {
  const deleteItem = (e) => {
    e.preventDefault();
    db.remove({ _id: item._id }, {}, (err, numRemoved) => {
      if (!err) {
        console.log("DELETED: ", item._id);
        setItems([...items.slice(0, idx), ...items.slice(idx + 1)]);
      }
    });
  };
  return (
    <div className="bg-[#201f1f] border-[1px]  border-yellow-700 rounded-md px-2 py-2 my-2 ml-2 flex flex-row justify-between">
      <div className="text-white text-left py-2">{item.item}</div>
      <div className="text-white">
        Dated :{item.dateAdded}
        <button
          className="bg-[#ff9d00] mx-2 ml-10 px-4 py-2 rounded-md text-black font-bold"
          onClick={deleteItem}
        >
          DELETE
        </button>
      </div>
    </div>
  );
};
