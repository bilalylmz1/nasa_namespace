import React from 'react';

const Slide7 = () => {
  return (
    <div className="slide">
      <h1>🎯 Sonuç</h1>
      <div style={{ maxWidth: '800px' }}>
        <p style={{ fontSize: '1.3em', marginBottom: '30px' }}>
          Doğal afetler kaçınılmaz olsa da, etkilerini minimize edebiliriz.
        </p>
        
        <div style={{ 
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          padding: '30px',
          borderRadius: '15px',
          marginBottom: '30px',
          border: '2px solid #dee2e6'
        }}>
          <h3 style={{ color: '#495057', marginBottom: '20px' }}>Temel İlkeler:</h3>
          <ul style={{ 
            textAlign: 'left', 
            lineHeight: '2', 
            fontSize: '1.1em',
            listStyle: 'none',
            paddingLeft: '0'
          }}>
            <li>🔍 <strong>Farkındalık:</strong> Afet risklerini bilmek</li>
            <li>📋 <strong>Hazırlık:</strong> Acil durum planları yapmak</li>
            <li>🤝 <strong>İşbirliği:</strong> Toplumsal dayanışma</li>
            <li>🌱 <strong>Sürdürülebilirlik:</strong> Çevreyi korumak</li>
            <li>📚 <strong>Eğitim:</strong> Sürekli öğrenme ve gelişim</li>
          </ul>
        </div>
        
        <p style={{ 
          fontSize: '1.2em', 
          fontStyle: 'italic', 
          color: '#6c757d',
          marginTop: '30px'
        }}>
          "Hazırlıklı olmak, afetlerin etkisini azaltmanın en etkili yoludur."
        </p>
        
        <div style={{ 
          marginTop: '40px',
          fontSize: '2em'
        }}>
          🙏 Teşekkürler
        </div>
      </div>
    </div>
  );
};

export default Slide7;