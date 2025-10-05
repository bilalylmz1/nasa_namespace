import React from 'react';

const Slide6 = () => {
  return (
    <div className="slide">
      <h2>🛡️ Önleme ve Hazırlık</h2>
      <p>
        Doğal afetlere karşı alınabilecek önlemler ve hazırlık stratejileri:
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '25px', 
        marginTop: '40px',
        maxWidth: '1000px'
      }}>
        <div style={{ 
          padding: '25px', 
          background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)', 
          borderRadius: '15px',
          textAlign: 'center',
          border: '2px solid #2196f3'
        }}>
          <h4>🚨 Erken Uyarı Sistemleri</h4>
          <p>Tsunami ve diğer afetler için gelişmiş uyarı teknolojileri</p>
        </div>
        
        <div style={{ 
          padding: '25px', 
          background: 'linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)', 
          borderRadius: '15px',
          textAlign: 'center',
          border: '2px solid #4caf50'
        }}>
          <h4>🌳 Orman Yönetimi</h4>
          <p>Yangın önleme, yangın şeritleri ve sürdürülebilir orman uygulamaları</p>
        </div>
        
        <div style={{ 
          padding: '25px', 
          background: 'linear-gradient(135deg, #fff3e0 0%, #ffcc80 100%)', 
          borderRadius: '15px',
          textAlign: 'center',
          border: '2px solid #ff9800'
        }}>
          <h4>🏠 Dayanıklı Yapılar</h4>
          <p>Afete dayanıklı yapı tasarımları ve inşaat teknikleri</p>
        </div>
        
        <div style={{ 
          padding: '25px', 
          background: 'linear-gradient(135deg, #f3e5f5 0%, #ce93d8 100%)', 
          borderRadius: '15px',
          textAlign: 'center',
          border: '2px solid #9c27b0'
        }}>
          <h4>👥 Toplum Eğitimi</h4>
          <p>Afet bilinçlendirme ve acil durum müdahale eğitimleri</p>
        </div>
      </div>
    </div>
  );
};

export default Slide6;