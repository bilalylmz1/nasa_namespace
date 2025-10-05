import React from 'react';

const Slide2 = () => {
  return (
    <div className="slide">
      <h2>Zaman Serisi Analizi Neden Önemlidir?</h2>
      
      <img 
        src="/static/zaman.jpeg" 
        alt="Açıklama" 
        style={{
          maxWidth: '80%',
          maxHeight: '60vh',
          objectFit: 'contain',
          borderRadius: '10px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
        }}
      />
          
  </div>
  );
};

export default Slide2;