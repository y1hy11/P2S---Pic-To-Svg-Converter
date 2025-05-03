import InfoSection from '../components/InfoSection';
import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  const scrollToInfo = () => {
    document.querySelector('.info-section').scrollIntoView({ 
      behavior: 'smooth'
    });
  };

  return (
    <div className="home">
      <header className="hero">
        <div className="background-pattern"></div>
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.subtitle')}</p>
        <span className="scroll-arrow" onClick={scrollToInfo}>↓</span>
      </header>
      <InfoSection />
    </div>
  );
};

export default Home;