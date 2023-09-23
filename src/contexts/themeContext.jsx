import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme1, setTheme1] = useState(true);
  const [theme2, setTheme2] = useState(false);
  const [theme3, setTheme3] = useState(false);

  function handleChangeTheme1() {
    setTheme1(true);
    setTheme2(false);
    setTheme3(false);
  }

  function handleChangeTheme2() {
    setTheme1(false);
    setTheme2(true);
    setTheme3(false);
  }

  function handleChangeTheme3() {
    setTheme1(false);
    setTheme2(false);
    setTheme3(true);
  }

  return (
    <ThemeContext.Provider
      value={{
        theme1,
        theme2,
        theme3,
        handleChangeTheme1,
        handleChangeTheme2,
        handleChangeTheme3,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
