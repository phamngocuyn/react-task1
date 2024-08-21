import React from 'react';
import { useBannerContext } from '../../context/BannerContext';
import './Banner.scss';

const Banner = () => {
  const { screen, toggleScreen, isScrolled } = useBannerContext();

  return (
    <div className={`banner ${screen ? 'fixed' : ''} ${isScrolled ? 'position' : ''}`}>
      <img
        src="https://img.lovepik.com/photo/40022/1515.jpg_wh860.jpg"
        alt="Blurred Background"
        className="banner-bg"
      />
      <div className={`banner-content ${screen ? 'expanded' : ''}`}>
        <img src="https://img.lovepik.com/photo/40022/1515.jpg_wh860.jpg" alt="Banner" />
        <button className='screen' onClick={toggleScreen}></button>
      </div>
    </div>
  );
}

export default Banner;
