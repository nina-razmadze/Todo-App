import { createContext } from "react";

interface ListContextValue {
  list: string[];
  setList: React.Dispatch<React.SetStateAction<string[]>>;
}

export const ListContext = createContext<ListContextValue>({
  list: [],
  setList: () => {},
});
