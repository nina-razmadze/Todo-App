import ListItem from "../ListItem/ListItem";
import { useState, useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";

export default function List() {
  const { search, setSearch } = useContext(SearchContext);

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
