import { createContext } from "react";

interface SearchContextValue {
  search: boolean;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SearchContext = createContext<SearchContextValue>({
  search: false,
  setSearch: () => {},
});
