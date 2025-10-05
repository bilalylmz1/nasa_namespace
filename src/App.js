import React, { useState } from 'react';
import './App.css';
import Slide1 from './pages/Slide1';
import Slide2 from './pages/Slide2';
import Slide3 from './pages/Slide3';
import Slide4 from './pages/Slide4';
import Slide5 from './pages/Slide5';



function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    <Slide1 />,
    <Slide2 />,
    <Slide3 />,
    <Slide4 />,
    <Slide5 />,
    
    
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="app">
      <div className="slideshow-container">
        <div className="slide-content">
          {slides[currentSlide]}
        </div>
        
        <div className="navigation">
          <button 
            className="nav-btn prev" 
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            &#10094;
          </button>
          
          <div className="slide-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          
          <button 
            className="nav-btn next" 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;