import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun, FaBars } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';


const Navbar = () => {
  const { t } = useTranslation();
  const { isDarkMode, toggleTheme, language, changeLanguage } = useContext(AppContext);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo">
            <img className="Navbar-logo" src="./Navbar-Logo.png" alt="P2S Converter" height="40" />
          </Link>
        </div>
        <div className="navbar-links desktop-links">
          <Link to="/">{t('nav.home')}</Link>
          <Link to="/convert">{t('nav.convert')}</Link>
          <Link to="/contact">{t('nav.contact')}</Link>
        </div>
        <div className="navbar-controls">
        <button
            onClick={toggleTheme}
            className="nav-button"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <FaMoon className="fa-moon" />
            ) : (
              <FaSun className="fa-sun" />
            )}
          </button>
          <div className="Navbar-language">
            <div className="language-selector">
              <button className="nav-button language-btn">
                <span>{t('nav.language')}</span>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier"> 
                    <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> 
                  </g>
                </svg>
              </button>
              <div className="language-dropdown">
                <button 
                  onClick={() => changeLanguage('en')} 
                  className={`language-option ${language === 'en' ? 'active' : ''}`}
                >
                  🇬🇧 English
                </button>
                <button 
                  onClick={() => changeLanguage('fr')} 
                  className={`language-option ${language === 'fr' ? 'active' : ''}`}
                >
                  🇫🇷 Français
                </button>
                <button 
                  onClick={() => changeLanguage('ar')} 
                  className={`language-option ${language === 'ar' ? 'active' : ''}`}
                >
                  🇸🇦 العربية
                </button>
                <button 
                  onClick={() => changeLanguage('es')} 
                  className={`language-option ${language === 'es' ? 'active' : ''}`}
                >
                  🇪🇸 Español
                </button>
              </div>
            </div>
          </div>
          <button
            className="menu-button"
            onClick={toggleSidebar}
            aria-label="Menu"
          >
            <FaBars />
          </button>
          <div className={`sidebar ${isSidebarOpen ? "open" : ""}`} dir={language === "AR" ? "rtl" : "ltr"}>
            <div className="sidebar-links">
              <Link to="/" onClick={toggleSidebar}>{t('nav.home')}</Link>
              <Link to="/convert" onClick={toggleSidebar}>{t('nav.convert')}</Link>
              <Link to="/contact" onClick={toggleSidebar}>{t('nav.contact')}</Link>
            </div>
              <div className="sidebar-theme">
                <button
                  onClick={toggleTheme}
                  className="nav-button"
                  aria-label="Toggle theme"
                >
                  <span>{isDarkMode ? t('nav.light_mode') : t('nav.dark_mode')}</span>
                </button>
              </div>
              <div className="sidebar-language">
                <div className="language-selector">
                  <button className="nav-button language-btn">
                    <span>{t('nav.language')}</span>
                  </button>
                  <div className="language-dropdown">
                    <button 
                      onClick={() => changeLanguage('en')} 
                      className={`language-option ${language === 'en' ? 'active' : ''}`}
                    >
                      🇬🇧 English
                    </button>
                    <button 
                      onClick={() => changeLanguage('fr')} 
                      className={`language-option ${language === 'fr' ? 'active' : ''}`}
                    >
                      🇫🇷 Français
                    </button>
                    <button 
                      onClick={() => changeLanguage('ar')} 
                      className={`language-option ${language === 'ar' ? 'active' : ''}`}
                    >
                      🇸🇦 العربية
                    </button>
                    <button 
                      onClick={() => changeLanguage('es')} 
                      className={`language-option ${language === 'es' ? 'active' : ''}`}
                    >
                      🇪🇸 Español
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </nav>
    </>
  );
};

export default Navbar;
