import React from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

const Slide3 = () => {
  return (
    <div className="slide">
      
      <BeforeAfterSlider
        beforeImage="/static/tsunami_before.jpeg"
        afterImage="/static/tsunami after.jpeg"
        />
      <p style={{ marginTop: '20px', fontSize: '1em', color: '#666' }}>
        Slider'ı hareket ettirerek öncesi ve sonrası durumu karşılaştırabilirsiniz.
      </p>
    </div>
  );
};

export default Slide3;