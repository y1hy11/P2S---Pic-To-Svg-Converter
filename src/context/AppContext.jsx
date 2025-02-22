import React, { createContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });
  const [language, setLanguage] = useState(() => {
    const savedLang = localStorage.getItem("language");
    return savedLang || "en";
  });

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (language === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [language]);

  useEffect(() => {
    const title = document.querySelector('title');
    if (title) {
      title.textContent = title.getAttribute(`data-${language}`) || title.getAttribute('data-en');
    }
  }, [language]);

  return (
    <AppContext.Provider value={{
      isDarkMode,
      toggleTheme,
      language,
      changeLanguage
    }}>
      {children}
    </AppContext.Provider>
  );
};