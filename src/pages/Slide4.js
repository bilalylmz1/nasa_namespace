import React from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

const Slide4 = () => {
  return (
    <div className="slide">
      <h2>🔥 Orman Yangını Etkisi</h2>
      <p>
        Orman yangınları doğal habitatları yok eder ve ekosistemleri büyük ölçüde etkiler.
        Yangın öncesi yeşil alanların yangın sonrası haline bakın.
      </p>
      <BeforeAfterSlider
        beforeImage="/static/yangin_before.jpeg"
        afterImage="/static/yangin_after.jpeg"
        title="Orman Yangını Öncesi ve Sonrası"
      />
      <p style={{ marginTop: '20px', fontSize: '1em', color: '#666' }}>
        Yangının çevresel etkisi açıkça görülmektedir.
      </p>
    </div>
  );
};

export default Slide4;