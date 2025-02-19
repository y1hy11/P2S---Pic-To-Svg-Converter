import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const InfoSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const { t } = useTranslation();

  const showcaseImages = [
    {
      original: '/showcase/original1.png',
      converted: '/showcase/converted1.svg'
    },
    {
      original: '/showcase/original2.png',
      converted: '/showcase/converted2.svg'
    },
    {
      original: '/showcase/original3.png',
      converted: '/showcase/converted3.svg'
    },
    {
      original: '/showcase/original4.png',
      converted: '/showcase/converted4.svg'
    }
  ];

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * showcaseImages.length);
    setCurrentImage(randomIndex);
  }, [showcaseImages.length]);

  // Helper function to safely get and map translation arrays
  const getTranslatedList = (key) => {
    try {
      const list = t(key, { returnObjects: true });
      if (!Array.isArray(list)) {
        console.error(`Expected an array for key "${key}", but got:`, list);
        return [];
      }
      return list;
    } catch (error) {
      console.error(`Error fetching translations for key "${key}":`, error);
      return [];
    }
  };

  return (
    <section className="info-section">
      <h2 className="info-header">{t('info.title_1')}</h2>
      <div className="conversion-showcase">
        <div className="conversion-example">
          <div className="example-image">
            <img
              src={showcaseImages[currentImage].original}
              alt="Original"
              className="original-image"
            />
            <span className="image-label">{t('info.originalLabel')}</span>
          </div>
          <div className="conversion-arrow">➜</div>
          <div className="example-image">
            <img
              src={showcaseImages[currentImage].converted}
              alt="Converted SVG"
              className="svg-image"
            />
            <span className="image-label">{t('info.convertedLabel')}</span>
          </div>
        </div>
      </div>

      <div className="SVG-info">
        <div>
          <h2 className="info-header">{t('info.title')}</h2>
          <p>{t('info.description')}</p>
        </div>
        <div>
          <h2 className="info-header">{t('info.subtitle')}</h2>
          <p>{t('info.whyConvert')}</p>
        </div>

        <div className="start-button">
          <div>
            <h1 className='info-header'>{t('info.startNow')}</h1>
            <p>{t('info.betaDescription')}</p>
          </div>
          <Link to="/convert" className="cta-button">
            {t('info.startConverting')}
          </Link>
        </div>
        
        <div>
          <h2 className="info-header">{t('info.howToUse')}</h2>
          <div className="info-basic-uses">
            <p>{t('info.usesDescription')}</p>
            <ul>
              {getTranslatedList('info.usesList').map((use, index) => (
                <li key={index}>{use}</li>
              ))}
            </ul>
          </div>

          <div className="info-tools">
            <h3>{t('info.toolsTitle')}</h3>
            <ul>
              {getTranslatedList('info.toolsList').map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>

          <div className="info-implementation">
            <h3>{t('info.implementationTitle')}</h3>
            <p>{t('info.implementationDescription')}</p>
            <code className="code-block">
              &lt;img src='image.svg' alt='Image' /&gt;
            </code>
            <p>{t('info.workflowsTitle')}</p>
            <ul>
              {getTranslatedList('info.workflowsList').map((workflow, index) => (
                <li key={index}>{workflow}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="features-container">
        <h2 className="info-header">{t('info.services')}</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>{t('info.features.fast')}</h3>
            <p>{t('info.features.fastDesc')}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>{t('info.features.quality')}</h3>
            <p>{t('info.features.qualityDesc')}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🖱️</div>
            <h3>{t('info.features.easy')}</h3>
            <p>{t('info.features.easyDesc')}</p>
          </div>
        </div>

        <h2 className="info-header">{t('features.advanced.title')}</h2>
        <div className="advanced-features-grid">
          <div className="advanced-feature-card">
            <div className="feature-content">
              <h3>{t('features.advanced.powerfulTools.title')}</h3>
              <ul className="feature-list">
                {t('features.advanced.powerfulTools.items', { returnObjects: true }).map((item, index) => (
                  <li key={index}>✅ {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="advanced-feature-card">
            <div className="feature-content">
              <h3>{t('features.advanced.advancedOptions.title')}</h3>
              <ul className="feature-list">
                {t('features.advanced.advancedOptions.items', { returnObjects: true }).map((item, index) => (
                  <li key={index}>🎨 {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
