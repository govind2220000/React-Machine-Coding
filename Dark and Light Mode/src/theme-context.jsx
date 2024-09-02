import { useEffect, useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !isDarkMode);
  };

  const theme = isDarkMode ? "Dark" : "light";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
