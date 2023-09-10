import ListItem from "../ListItem/ListItem";
import { useState, useContext } from "react";
import { ListContext } from "../../contexts/ListContext";
import { ValueContext } from "../../Providers/ValueProvider";
import { v4 as uuidv4 } from "uuid";

export default function List() {
  const { list } = useContext(ListContext);
  const { value } = useContext(ValueContext);
  const [numbers, setNumbers] = useState([0]);
  const uniqueId = uuidv4();

  return (
    <div className="mx-auto p-4 w-[530px]">
      <ul className="space-y-2">
        {list.map((index, item) => (
          <ListItem key={index} inputValue={value} />
        ))}
      </ul>
    </div>
  );
}
