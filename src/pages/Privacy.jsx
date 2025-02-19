import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="privacy-policy">
      <div className="policy-container">
        <h1>{t('privacy.title')}</h1>
        
        <section className="policy-section">
          <h2>{t('privacy.sections.processing.title')}</h2>
          <p>{t('privacy.sections.processing.content')}</p>
          <ul>
            <li>{t('privacy.sections.processing.items.localProcessing')}</li>
            <li>{t('privacy.sections.processing.items.noUpload')}</li>
            <li>{t('privacy.sections.processing.items.noStorage')}</li>
            <li>{t('privacy.sections.processing.items.privateSvg')}</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>{t('privacy.sections.technical.title')}</h2>
          <p>{t('privacy.sections.technical.content')}</p>
          <ul>
            <li>{t('privacy.sections.technical.items.potrace')}</li>
            <li>{t('privacy.sections.technical.items.svgGeneration')}</li>
            <li>{t('privacy.sections.technical.items.noApiCalls')}</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>{t('privacy.sections.usage.title')}</h2>
          <p>{t('privacy.sections.usage.content')}</p>
          <ul>
            <li>{t('privacy.sections.usage.items.theme')}</li>
            <li>{t('privacy.sections.usage.items.language')}</li>
            <li>{t('privacy.sections.usage.items.cookies')}</li>
            <li>{t('privacy.sections.usage.items.noTracking')}</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>{t('privacy.sections.thirdParty.title')}</h2>
          <p>{t('privacy.sections.thirdParty.content')}</p>
          <ul>
            <li>{t('privacy.sections.thirdParty.items.potrace')}</li>
            <li>{t('privacy.sections.thirdParty.items.react')}</li>
            <li>{t('privacy.sections.thirdParty.items.compression')}</li>
            <li>{t('privacy.sections.thirdParty.items.local')}</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>{t('privacy.sections.updates.title')}</h2>
          <p>{t('privacy.sections.updates.content')}</p>
          <ul>
            <li>{t('privacy.sections.updates.items.periodic')}</li>
            <li>{t('privacy.sections.updates.items.lastUpdate')}</li>
            <li>
              {t('privacy.sections.updates.items.contact')}{' '}
              <Link to="/contact">{t('privacy.sections.updates.items.contactLink')}</Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;