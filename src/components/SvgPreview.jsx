import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SvgPreview = ({ svgContent, onDownload, isLoading }) => {
  const { t } = useTranslation();

  return (
    <div className="svg-preview">
      <div className="preview-container">
        {isLoading ? (
          <div className="loading-overlay">
            <p>{t('convert.processing')}</p>
          </div>
        ) : null}
        <div className="preview-svg" dangerouslySetInnerHTML={{ __html: svgContent() }} />
        <h6 className='P2S-version'>P2S Version-1</h6>
      </div>
      
      {svgContent && !isLoading && (
        <>
          <div className="tool-button">
            <Link to="/convert" className="add-new-file-button">
              {t('convert.newFile')}
            </Link>
            <button className="download-button" onClick={onDownload}>
              {t('convert.download')}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SvgPreview;