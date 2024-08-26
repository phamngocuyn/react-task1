import React, { useState, useEffect, useCallback } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './Slider.scss';
import imageApi from '@/apis/sliderApi';
import { NUMBER_SLIDE_MOBILE, NUMBER_SLIDE_PC } from '@/constants/constants';

const Slider = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const imagesPerSlide = isMobile ? NUMBER_SLIDE_MOBILE : NUMBER_SLIDE_PC;

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

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const startAutoSlide = useCallback(() => {
    const id = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + imagesPerSlide) % images.length);
    }, 5000);
    setIntervalId(id);
    return id;
  }, [images, imagesPerSlide]);

  useEffect(() => {
    const id = startAutoSlide();
    return () => clearInterval(id);
  }, [startAutoSlide]);

  const setCurrent = (index) => {
    setCurrentIndex(index);
    clearInterval(intervalId);
    startAutoSlide();
  };

  const moveSlide = (direction) => {
    const step = direction === 'next' ? imagesPerSlide : -imagesPerSlide;
    let newIndex = (currentIndex + step + images.length) % images.length;

    if (!isMobile) {
      newIndex = Math.floor(newIndex / imagesPerSlide) * imagesPerSlide;
    }

    setCurrent(newIndex);
  };

  const slidesCount = Math.ceil(images.length / imagesPerSlide);

  const controlPrevClassName = 'control prev';
  const controlNextClassName = 'control next';

  const activeDotIndex = Math.floor(currentIndex / imagesPerSlide);
  const dotClassName = (index) => `dot ${index === activeDotIndex ? 'active' : ''}`;

  return (
    <div className="container slider1">
      <div className="main">
        <span className={controlPrevClassName} onClick={() => moveSlide('prev')}>
          <ChevronLeftIcon fontSize="large" />
        </span>
        <span className={controlNextClassName} onClick={() => moveSlide('next')}>
          <ChevronRightIcon fontSize="large" />
        </span>
        <div className="img-wrap">
          {images.length > 0 &&
            images.slice(currentIndex, currentIndex + imagesPerSlide).map((image, index) => (
              <img key={index} src={image} alt={`Slide ${index}`} />
            ))
          }
        </div>
        <div className="dots">
          {Array.from({ length: slidesCount }).map((_, index) => (
            <span
              key={index}
              className={dotClassName(index)}
              onClick={() => setCurrent(index * imagesPerSlide)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
