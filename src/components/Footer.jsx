import { memo } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = React.memo(() => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>{t('footer.header')}</h4>
          <p>{t('footer.description')}</p>
        </div>

        <div className="footer-section">
          <h4>{t('footer.help')}</h4>
          <ul>
            <li><a href="/contact">{t('footer.help_contact')}</a></li>
            <li><a href="/Privacy">{t('footer.help_privacy')}</a></li>  
          </ul>
        </div>

        <div className="footer-section">
          <h4>{t('footer.connect')}</h4>
          <div className="social-links">
            <a href="https://x.com/y1hy1_1" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/yahya-elalaoui/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Y1hy11" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>{t('footer.copyright')}</p>
      </div>
    </footer>
  );
});

export default memo(Footer);