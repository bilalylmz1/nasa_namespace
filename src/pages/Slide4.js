import React from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

const Slide4 = () => {
  return (
    <div className="slide">
      
      <BeforeAfterSlider
        beforeImage="/static/yangin_before.jpeg"
        afterImage="/static/yangin_after.jpeg"
        />

        <p style={{ marginTop: '20px', fontSize: '1em', color: '#666' }}>
        
      </p>
      
    </div>
  );
};

export default Slide4;