import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="not-found">
      <h1>{t('error.title')}</h1>
      <p>{t('error.message')}</p>
      <Link to="/" className="btn">
        {t('error.return')}
      </Link>
    </div>
  );
};

export default NotFound;