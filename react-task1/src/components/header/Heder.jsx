import React from 'react';
import { useBannerContext } from '../../context/BannerContext';
import './Header.scss';

const Header = () => {
  const { screen, isScrolled } = useBannerContext();

  return (
    <header className={`header ${screen ? 'fixed' : ''} ${isScrolled && screen ? 'scrolled' : ''}`}>
      <div className="logo">MyLogo</div>
      <div className="auth-buttons">
        <button className="auth-button">Login</button>
        <button className="auth-button">Register</button>
      </div>
    </header>
  );
}

export default Header;
