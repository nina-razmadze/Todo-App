import { createContext, useState, PropsWithChildren } from "react";

type tValue = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};
export const ValueContext = createContext<tValue>({
  value: "",
  setValue: () => {},
});

export default function ValueProvider({ children }: PropsWithChildren) {
  const [value, setValue] = useState("");

  return (
    <ValueContext.Provider value={{ value, setValue }}>
      {children}
    </ValueContext.Provider>
  );
}
