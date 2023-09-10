import ListItem from "../ListItem/ListItem";
import {  useContext } from "react";
import { ListContext } from "../../contexts/ListContext";
import { v4 as uuidv4 } from "uuid";

export default function List() {
  const { list, setList } = useContext(ListContext);

  const uniqueId = uuidv4();

  const deleteAllItems = () => {
    setList([]);
  };
  const handleRemove = (id: any) => {
    setList((prevlist) => prevlist.filter((item) => item !== id));
  };

  return (
    <div className="mx-auto p-4 w-[530px]">
      <ul className="space-y-2">
        {list.map((item, index) => (
          <ListItem
            key={index}
            id={uniqueId}
            item={item}
            onRemove={handleRemove}
          ></ListItem>
        ))}
      </ul>
      <button onClick={deleteAllItems}>delete All</button>
    </div>
  );
}
