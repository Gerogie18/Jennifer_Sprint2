//ThemeProvider enables theme to dynamically change and to toggle the light mode and change theme variants
import React, { useState, useEffect } from 'react';
import theme from './theme.js';

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
  const [themeVariant, setThemeVariant] = useState('defaultTheme');
  const [lightMode, setLightMode] = useState(true);

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersLightScheme = window.matchMedia('(prefers-color-scheme: light)');
    if (prefersDarkScheme.matches) {
      setLightMode(false);
    } else if (prefersLightScheme.matches) {
      setLightMode(true);
    }
  }, []);

  const currentTheme = theme[themeVariant][lightMode ? 'light' : 'dark'];

  const changeThemeVariant = (variant) => {
    setThemeVariant(variant);
  };

  const toggleLightMode = () => {
    setLightMode(!lightMode);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, changeThemeVariant, toggleLightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;