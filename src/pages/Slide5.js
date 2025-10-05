import React from 'react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

const Slide5 = () => {
  return (
    <div className="slide">
      
      
     <BeforeAfterSlider
        beforeImage="/static/iyon_before.jpeg"
        afterImage="/static/iyon_after.jpeg"
        />
        <p style={{ marginTop: '20px', fontSize: '1em', color: '#666' }}>
        
      </p>
        
       
      
    </div>
  );
};

export default Slide5;