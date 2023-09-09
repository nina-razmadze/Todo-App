import { useState } from "react";
import { ValueContext } from "../contexts/InputValueContext";

export function SearchProvider({ children }: any) {
  const [inputValue, setInputValue] = useState("");

  return (
    <ValueContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </ValueContext.Provider>
  );
}
