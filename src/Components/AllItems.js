import "../App.css";
import { Item } from "./Item";

export const TODOItems = ({ items, setItems }) => {
  return (
    <div className="sm:w-[1000px] border-[#ff9d00] rounded-md border-2 px-4 pr-8 py-4 my-4 mx-4">
      <h4 class="text-2xl font-bold text-[#ff9d00] px-2">TASKS TO DO :</h4>
      {items.map((val, idx) => (
        <Item
          key={val._id}
          item={val}
          idx={idx}
          items={items}
          setItems={setItems}
        />
      ))}
    </div>
  );
};
