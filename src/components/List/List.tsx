import ListItem from "../ListItem/ListItem";
import { useState, useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import { ValueContext } from "../../contexts/InputValueContext";

export default function List() {
  const { search, setSearch } = useContext(SearchContext);
  const { inputValue, setInputValue } = useContext(ValueContext);
  const [listItems, setListItems] = useState([]);

  if (search) {
    console.log(inputValue);
  }
  return (
    <div className="mx-auto p-4 w-[530px]">
      <ul className="space-y-2">
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    </div>
  );
}
