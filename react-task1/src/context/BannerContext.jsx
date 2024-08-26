import React, { createContext, useState, useContext, useEffect } from 'react';

const BannerContext = createContext();

export const BannerProvider = ({ children }) => {
  const [isFullScreenBanner, setIsFullScreenBanner] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleFullScreenBanner = () => {
    setIsFullScreenBanner((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BannerContext.Provider value={{ isFullScreenBanner, toggleFullScreenBanner, isScrolled }}>
      {children}
    </BannerContext.Provider>
  );
};

export const useBannerContext = () => useContext(BannerContext);
