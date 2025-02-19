import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SvgPreview from '../components/SvgPreview';
import { modifySvgAttributes } from '../utils/conversion';

const Tool = () => {
  const location = useLocation();
  const [svgContent, setSvgContent] = useState(location.state?.svgContent);
  const [editOptions, setEditOptions] = useState({
    fill: '#000000',
    stroke: 'none',
    blur: 0,
    detailLevel: 'strong'
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filterType, setFilterType] = useState('none');
  const { t } = useTranslation();

  const handleDownload = () => {
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'converted.svg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleEdit = (e) => {
    const { name, value } = e.target;
    const newOptions = { ...editOptions, [name]: value };
    setEditOptions(newOptions);

    // Apply filters with current filter type
    const modifiedSvg = modifySvgAttributes(svgContent, newOptions, filterType);
    setSvgContent(modifiedSvg);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFilterChange = (e) => {
    const newFilterType = e.target.value;
    setFilterType(newFilterType);
    
    // Reapply modifications with new filter type
    const modifiedSvg = modifySvgAttributes(svgContent, editOptions, newFilterType);
    setSvgContent(modifiedSvg);
  };

  const handleReset = () => {
    setEditOptions({
      fill: '#000000',
      stroke: 'none',
      blur: 0,
      detailLevel: 'strong'
    });
    setFilterType('none');
    setSvgContent(location.state?.svgContent);
  };

  if (!svgContent) {
    return <div className="error">{t('tool.noContent')}</div>;
  }

  return (
    <div className="tool-page">
      <h1>{t('tool.title')}</h1>
      <div className='editor-container-grid'>
        <div className="editor-controls">
          <label>
            {t('tool.fillColor')}
            <input type="color" name="fill" value={editOptions.fill} onChange={handleEdit} />
          </label>

          <div className="filter-control">
            <label>
              {t('tool.filter')}
              <select value={filterType} onChange={handleFilterChange}>
                <option value="none">{t('tool.filterOptions.none')}</option>
                <option value="internal">{t('tool.filterOptions.internal')}</option>
                <option value="edge">{t('tool.filterOptions.edge')}</option>
              </select>
            </label>
            <label>
              {t('tool.details')}
              <select value={editOptions.detailLevel} name="detailLevel" onChange={handleEdit}>
                <option value="strong">{t('tool.detailOptions.strong')}</option>
                <option value="minimal">{t('tool.detailOptions.minimal')}</option>
              </select>
            </label>
          </div>

          <label>
            {t('tool.strokeColor')}
            <input type="color" name="stroke" value={editOptions.stroke} onChange={handleEdit} />
          </label>

          <label>
            {t('tool.blur')}
            <input type="range" name="blur" min="0" max="5" value={editOptions.blur} onChange={handleEdit} />
          </label>

          <button className="reset-button" onClick={handleReset}>
            {t('tool.reset')}
          </button>
        </div>

        <SvgPreview
          svgContent={() => svgContent}
          onDownload={handleDownload}
        />
      </div>
    </div>
  );
};

export default Tool;