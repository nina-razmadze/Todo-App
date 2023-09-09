import { useState } from "react";
import { SearchContext } from "../contexts/SearchContext";

export function SearchProvider({ children }: any) {
  const [search, setSearch] = useState<boolean>(false);

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
