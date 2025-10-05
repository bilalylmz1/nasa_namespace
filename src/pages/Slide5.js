import React from 'react';

const Slide5 = () => {
  return (
    <div className="slide">
      <h2>📊 Etki Analizi</h2>
      <p>
        Doğal afetlerin çevresel, sosyal ve ekonomik etkileri:
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '30px', 
        marginTop: '30px',
        maxWidth: '900px'
      }}>
        <div>
          <h4 style={{ color: '#dc3545' }}>🌊 Tsunami Etkileri</h4>
          <ul style={{ textAlign: 'left', lineHeight: '1.8' }}>
            <li>Kıyı erozyonu</li>
            <li>Altyapı hasarları</li>
            <li>Ekolojik dengenin bozulması</li>
            <li>İnsan yaşamı kayıpları</li>
            <li>Ekonomik zararlar</li>
          </ul>
        </div>
        
        <div>
          <h4 style={{ color: '#fd7e14' }}>🔥 Yangın Etkileri</h4>
          <ul style={{ textAlign: 'left', lineHeight: '1.8' }}>
            <li>Orman kayıpları</li>
            <li>Hava kirliliği</li>
            <li>Habitat yok olması</li>
            <li>Toprak erozyonu</li>
            <li>Karbondioksit salınımı</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Slide5;