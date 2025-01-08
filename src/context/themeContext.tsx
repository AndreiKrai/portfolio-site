import React, { createContext, useState, useContext, ReactNode } from "react";

// Define the context value type
export interface ThemeContextType {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

// Define the provider's props type
interface ThemeProviderProps {
  children: ReactNode;
}

// Create the Context with a default value of `null`
export const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

