import React, { useState, useEffect } from 'react';
import './Slider.scss';
import '@/apis/sliderApi'

const Slider = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const firstFiveImages = await imageApi.fetchImages();
        setImages(firstFiveImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);
    setIntervalId(id);

    return () => clearInterval(id);
  }, [images]);

  const setCurrent = (index) => {
    setCurrentIndex(index);
    clearInterval(intervalId);
    const id = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);
    setIntervalId(id);
  };

  return (
    <div className="container slider1">
      <div className="main">
        <span className="control prev" onClick={() => setCurrent((currentIndex - 1 + images.length) % images.length)}>
          <button>prev</button>
        </span>
        <span className="control next" onClick={() => setCurrent((currentIndex + 1) % images.length)}>
          <button>next</button>
        </span>
        <div className="img-wrap">
          {images.length > 0 && <img src={images[currentIndex]} alt="Slideshow" />}
        </div>
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
