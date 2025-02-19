import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FileUpload = ({ onFileSelect, dropzoneText }) => {
  const [dragActive, setDragActive] = useState(false);
  const { t } = useTranslation();

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      onFileSelect(e.target.files[0]);
    }
  };

  return (
    <div 
      className={`file-upload ${dragActive ? 'drag-active' : ''}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        accept="image/*"
        onChange={handleChange}
        id="file-input"
      />
      <label className='file-input' htmlFor="file-input">
        <div>
          <p>{dropzoneText || t('convert.dropzone')}</p>
          <span className="upload-icon">📁</span>
        </div>
      </label>
    </div>
  );
};

export default FileUpload;