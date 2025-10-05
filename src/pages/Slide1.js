import React from 'react';

const Slide1 = () => {
  return (
    <div className="slide">
      <h1>Verileri Nasıl Elde Ediyoruz?</h1>
      
      <img 
        src="/static/sar.jpeg" 
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

export default Slide1;