import ListItem from "../ListItem/ListItem";
import { useState } from "react";

export default function List() {
  const [listItems, setListItems] = useState<string[]>([]);

  return (
    <div className="mx-auto p-4 w-[530px]">
      <ul className="space-y-2">
        {listItems.map((index) => (
          <ListItem key={index} />
        ))}
      </ul>
    </div>
  );
}
