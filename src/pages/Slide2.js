import React from 'react';

const Slide2 = () => {
  return (
    <div className="slide">
      <h2>Doğal Afetler Nedir?</h2>
      <p>
        Doğal afetler, doğal süreçler sonucunda ortaya çıkan ve insan yaşamını, 
        çevreyi ve ekonomiyi olumsuz etkileyen olaylardır.
      </p>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '20px', 
        marginTop: '30px',
        maxWidth: '800px'
      }}>
        <div style={{ 
          padding: '20px', 
          background: '#f8f9fa', 
          borderRadius: '10px',
          textAlign: 'center'
        }}>
          <h4>🌊 Tsunami</h4>
          <p>Deniz tabanındaki hareketler sonucu oluşan dev dalgalar</p>
        </div>
        <div style={{ 
          padding: '20px', 
          background: '#f8f9fa', 
          borderRadius: '10px',
          textAlign: 'center'
        }}>
          <h4>🔥 Yangın</h4>
          <p>Doğal veya insan kaynaklı orman ve alan yangınları</p>
        </div>
        <div style={{ 
          padding: '20px', 
          background: '#f8f9fa', 
          borderRadius: '10px',
          textAlign: 'center'
        }}>
          <h4>🌀 Deprem</h4>
          <p>Yer kabuğundaki hareketle oluşan sarsıntılar</p>
        </div>
      </div>
    </div>
  );
};

export default Slide2;