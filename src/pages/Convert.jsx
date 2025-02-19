import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import FileUpload from '../components/FileUpload';
import { validateFile, convertImageToSvg } from '../utils/conversion';

const Convert = () => {
  const [svgContent, setSvgContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleFileSelect = async (file) => {
    setLoading(true);
    setError('');
    
    try {
      validateFile(file);
      const svg = await convertImageToSvg(file);
      setSvgContent(svg);
      navigate('/tool', { state: { svgContent: svg } });
    } catch (err) {
      console.error('Conversion error:', err);
      if (err.message.includes('buffer')) {
        setError(t('errors.conversion.invalidFormat'));
      } else if (err.message.includes('memory')) {
        setError(t('errors.conversion.tooComplex'));
      } else {
        setError(t('errors.conversion.generic'));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="convert-page">
      <h1>{t('convert.title')}</h1>
      <FileUpload 
        onFileSelect={handleFileSelect} 
        dropzoneText={t('convert.dropzone')}
      />
      {loading && <div className="loader">{t('convert.processing')}</div>}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Convert;