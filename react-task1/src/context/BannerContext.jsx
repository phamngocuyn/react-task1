import React, { createContext, useState, useContext, useEffect } from 'react';

const BannerContext = createContext();

export const BannerProvider = ({ children }) => {
  const [screen, setScreen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleScreen = () => {
    setScreen((prev) => !prev);
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
    <BannerContext.Provider value={{ screen, toggleScreen, isScrolled }}>
      {children}
    </BannerContext.Provider>
  );
};

export const useBannerContext = () => useContext(BannerContext);
