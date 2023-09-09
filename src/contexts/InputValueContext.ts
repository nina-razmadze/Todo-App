import { createContext } from "react";

interface InputValueContext {
  inputValue: string;
  setInputValue: React.Dispatch<string>;
}

export const ValueContext = createContext<InputValueContext>({
  inputValue: "",
  setInputValue: () => {},
});
