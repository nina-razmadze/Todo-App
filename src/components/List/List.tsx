import ListItem from "../ListItem/ListItem";
import { useState, useContext } from "react";
import { ListContext } from "../../contexts/ListContext";
import { ValueContext } from "../../Providers/ValueProvider";
import { v4 as uuidv4 } from "uuid";

export default function List() {
  const { list, setList } = useContext(ListContext);

  const deleteAllItems = () => {
    setList([]);
  };

  return (
    <div className="mx-auto p-4 w-[530px]">
      <ul className="space-y-2">
        {list.map((item, index) => (
          <ListItem key={index} item={item}></ListItem>
        ))}
      </ul>
      <button onClick={deleteAllItems}>delete All</button>
    </div>
  );
}
