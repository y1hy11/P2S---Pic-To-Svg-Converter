// Helper function to validate file type and size
export const validateFile = (file) => {
    const validTypes = ['image/jpeg', 'image/png', 'image/svg+xml'];
    const maxSize = 10 * 1024 * 1024; // 10MB
  
    if (!validTypes.includes(file.type)) {
      throw new Error('Please upload a valid image file (JPEG, PNG, or SVG)');
    }
  
    if (file.size > maxSize) {
      throw new Error('File size must be less than 10MB');
    }
  };
  
  // Convert image to SVG using browser-compatible libraries
  export const convertImageToSvg = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = async (event) => {
        try {
          const Potrace = require('potrace');
          const image = new Image();
          image.src = event.target.result;
  
          image.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = image.width;
            canvas.height = image.height;
            ctx.drawImage(image, 0, 0);
  
            // Convert to grayscale and analyze brightness
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            let totalBrightness = 0;
            
            for (let i = 0; i < data.length; i += 4) {
              const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
              data[i] = data[i + 1] = data[i + 2] = avg;
              totalBrightness += avg;
            }
            
            // Calculate average brightness
            const avgBrightness = totalBrightness / (data.length / 4);
            console.log('Image Analysis:');
            console.log('Average Brightness:', avgBrightness);
            
            // Adjust threshold based on brightness
            let threshold = 128;
            if (avgBrightness > 180) { // Very bright image
              console.log('Bright image detected, adjusting threshold');
              threshold = 200;
            } else if (avgBrightness > 150) { // Moderately bright
              console.log('Moderately bright image detected, adjusting threshold');
              threshold = 170;
            }
  
            ctx.putImageData(imageData, 0, 0);
  
            // Configure Potrace options with dynamic threshold
            const options = {
              turdSize: 100,
              turnPolicy: Potrace.TURNPOLICY_MINORITY,
              alphaMax: 1,
              optCurve: true,
              optTolerance: 0.2,
              threshold: threshold, // Use dynamic threshold
              blackOnWhite: true,
              color: '#000000',
              background: 'transparent'
            };
  
            console.log('Using Potrace options:', options);
  
            // Convert to SVG
            Potrace.trace(imageData, options, (err, svg) => {
              if (err) {
                console.error('Potrace error:', err);
                reject(err);
              } else {
                console.log('Conversion successful');
                resolve(svg);
              }
            });
          };
  
          image.onerror = () => {
            reject(new Error('Error loading image'));
          };
        } catch (error) {
          console.error('Conversion error:', error);
          reject(error);
        }
      };
  
      reader.onerror = () => {
        reject(new Error('Error reading file'));
      };
  
      reader.readAsDataURL(file);
    });
  };
  
  // Enhanced SVG optimization with more options
  export const optimizeSvg = (svgContent, options = {}) => {
    let optimized = svgContent
      .replace(/\s+/g, ' ')
      .replace(/>\s+</g, '><')
      .trim();
  
    // Remove empty attributes
    optimized = optimized.replace(/=""/g, '');
  
    // Precision control
    const precision = options.precision || 2;
    optimized = optimized.replace(
      new RegExp(`(\\d+\\.\\d{${precision}})\\d+`, 'g'),
      '$1'
    );
  
    // Remove metadata if requested
    if (options.removeMetadata) {
      optimized = optimized.replace(/<metadata>.*?<\/metadata>/g, '');
    }
  
    // Remove comments if requested
    if (options.removeComments) {
      optimized = optimized.replace(/<!--.*?-->/g, '');
    }
  
    return optimized;
  };
  
  // Advanced SVG modification with more effects
  export const modifySvgAttributes = (svgContent, options, filterType) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgContent, 'image/svg+xml');
    const svgElement = doc.documentElement;
  
    // Clear existing filters
    const existingFilters = svgElement.querySelectorAll('filter');
    existingFilters.forEach(filter => filter.remove());
  
    // Apply new filters based on filterType
    if (filterType !== 'none') {
      const filter = doc.createElementNS('http://www.w3.org/2000/svg', 'filter');
      filter.setAttribute('id', 'vector-filter');
      
      const detailFactor = options.detailLevel === 'strong' ? 2 : 1;
  
      switch (filterType) {
        case 'internal':
          const feMorphology = doc.createElementNS('http://www.w3.org/2000/svg', 'feMorphology');
          feMorphology.setAttribute('operator', 'erode');
          feMorphology.setAttribute('radius', detailFactor);
          filter.appendChild(feMorphology);
          break;
  
        case 'edge':
          const feConvolve = doc.createElementNS('http://www.w3.org/2000/svg', 'feConvolveMatrix');
          feConvolve.setAttribute('kernelMatrix', '1 0 -1 0 0 0 -1 0 1');
          feConvolve.setAttribute('divisor', 1);
          filter.appendChild(feConvolve);
          break;
  
        case 'bright':
          // Add color matrix for brightness adjustment
          const feColorMatrix = doc.createElementNS('http://www.w3.org/2000/svg', 'feColorMatrix');
          feColorMatrix.setAttribute('type', 'matrix');
          feColorMatrix.setAttribute('values', 
            `1.5 0   0   0   0
             0   1.5 0   0   0
             0   0   1.5 0   0
             0   0   0   1   0`
          );
          filter.appendChild(feColorMatrix);
  
          // Add component transfer for gamma correction
          const feComponentTransfer = doc.createElementNS('http://www.w3.org/2000/svg', 'feComponentTransfer');
          ['R', 'G', 'B'].forEach(channel => {
            const feFunc = doc.createElementNS('http://www.w3.org/2000/svg', `feFunc${channel}`);
            feFunc.setAttribute('type', 'gamma');
            feFunc.setAttribute('amplitude', '1.2');
            feFunc.setAttribute('exponent', '0.8');
            feComponentTransfer.appendChild(feFunc);
          });
          filter.appendChild(feComponentTransfer);
          break;
  
        case 'contrast':
          // Add contrast adjustment
          const feContrast = doc.createElementNS('http://www.w3.org/2000/svg', 'feComponentTransfer');
          ['R', 'G', 'B'].forEach(channel => {
            const feFunc = doc.createElementNS('http://www.w3.org/2000/svg', `feFunc${channel}`);
            feFunc.setAttribute('type', 'linear');
            feFunc.setAttribute('slope', '1.5');
            feFunc.setAttribute('intercept', '-0.25');
            feContrast.appendChild(feFunc);
          });
          filter.appendChild(feContrast);
          break;
  
        default:
          console.warn(`Unknown filter type: ${filterType}`);
          break;
      }
  
      svgElement.appendChild(filter);
      svgElement.querySelectorAll('path').forEach(path => {
        path.setAttribute('filter', 'url(#vector-filter)');
      });
    }
  
    // Apply fill with opacity for bright colors
    if (options.fill) {
      svgElement.querySelectorAll('path').forEach(path => {
        path.setAttribute('fill', options.fill);
        if (filterType === 'bright') {
          path.setAttribute('fill-opacity', '0.85');
        }
      });
    }
  
    // Apply stroke with adjusted width for detail level
    if (options.stroke) {
      svgElement.querySelectorAll('path').forEach(path => {
        path.setAttribute('stroke', options.stroke);
        path.setAttribute('stroke-width', options.detailLevel === 'strong' ? '0.5' : '1');
      });
    }
  
    // Apply blur with detail level consideration
    if (options.blur) {
      const blurFilter = doc.createElementNS('http://www.w3.org/2000/svg', 'filter');
      blurFilter.setAttribute('id', 'blur');
      const feGaussianBlur = doc.createElementNS('http://www.w3.org/2000/svg', 'feGaussianBlur');
      feGaussianBlur.setAttribute('stdDeviation', options.blur * (options.detailLevel === 'strong' ? 0.7 : 1));
      blurFilter.appendChild(feGaussianBlur);
      svgElement.appendChild(blurFilter);
      
      svgElement.querySelectorAll('path').forEach(path => {
        const currentFilter = path.getAttribute('filter') || '';
        path.setAttribute('filter', `${currentFilter} url(#blur)`.trim());
      });
    }
  
    return new XMLSerializer().serializeToString(doc);
  };
  
  // New function for SVG preview and comparison
  export const createSvgPreview = (svgContent, options = {}) => {
    const preview = document.createElement('div');
    preview.className = 'svg-preview';
    
    const svgWrapper = document.createElement('div');
    svgWrapper.innerHTML = svgContent;
    
    if (options.size) {
      svgWrapper.style.width = `${options.size}px`;
      svgWrapper.style.height = `${options.size}px`;
    }
    
    preview.appendChild(svgWrapper);
    return preview;
  };
  
  // New function for SVG download
  export const downloadSvg = (svgContent, filename = 'image.svg') => {
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };  