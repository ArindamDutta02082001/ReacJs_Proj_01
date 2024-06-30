import { createContext } from "react";


interface ContextType {
  data: { name: string; age: number; mode: string };
  lightTheme: () => void;
  darkTheme: () => void;
  theme: string;
}

// creating a context i.e place to store the data 
// this is imported both in the child as well as the parent component
export const Context = createContext<ContextType | undefined>(
  undefined
);


