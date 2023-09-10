import { useState } from "react";
import { ListContext } from "../contexts/ListContext";

export function ListProvider({ children }: any) {
  const [list, setList] = useState<string[]>([]); // Initialize with string array

  return (
    <ListContext.Provider value={{ list, setList }}>
      {children}
    </ListContext.Provider>
  );
}
