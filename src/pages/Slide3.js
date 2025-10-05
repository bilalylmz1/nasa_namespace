import React from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

const Slide3 = () => {
  return (
    <div className="slide">
      <h2>🌊 Tsunami Etkisi</h2>
      <p>
        Tsunamiler kıyı bölgelerinde büyük yıkımlara neden olur. 
        Aşağıdaki karşılaştırmada tsunami öncesi ve sonrası durumu görebilirsiniz.
      </p>
      <BeforeAfterSlider
        beforeImage="/static/tsunami_before.jpeg"
        afterImage="/static/tsunami after.jpeg"
        title="Tsunami Öncesi ve Sonrası"
      />
      <p style={{ marginTop: '20px', fontSize: '1em', color: '#666' }}>
        Slider'ı hareket ettirerek öncesi ve sonrası durumu karşılaştırabilirsiniz.
      </p>
    </div>
  );
};

export default Slide3;