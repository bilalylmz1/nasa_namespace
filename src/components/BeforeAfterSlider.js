import React, { useState } from 'react';
import './BeforeAfterSlider.css';

const BeforeAfterSlider = ({ beforeImage, afterImage, title }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="before-after-container">
      <h3>{title}</h3>
      <div className="before-after-slider">
        <div className="image-container">
          <div className="before-image">
            <img src={beforeImage} alt="Before" />
            <div className="image-label before-label">ÖNCESİ</div>
          </div>
          <div 
            className="after-image"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img src={afterImage} alt="After" />
            <div className="image-label after-label">SONRASI</div>
          </div>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={sliderPosition}
          onChange={handleSliderChange}
          className="slider"
        />
        <div 
          className="slider-line"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="slider-handle"></div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;