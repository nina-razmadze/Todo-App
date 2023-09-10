import ListItem from "../ListItem/ListItem";
import { useState, useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import { ValueContext } from "../../contexts/InputValueContext";

export default function List() {
  const { search, setSearch } = useContext(SearchContext);
  const { inputValue, setInputValue } = useContext(ValueContext);
  const [listItems, setListItems] = useState<string[]>([]);

  const handleAddItem = () => {
    if (search) {
      setListItems([...listItems, inputValue]);
      setInputValue("");
    }
  };
  return (
    <div className="mx-auto p-4 w-[530px]">
      <ul className="space-y-2">
        {listItems.map((index) => (
          <ListItem key={index} />
        ))}
        {search && (
          <div>
            <ListItem inputValue={inputValue} />
          </div>
        )}
        <ListItem />
        <ListItem />
      </ul>
    </div>
  );
}
