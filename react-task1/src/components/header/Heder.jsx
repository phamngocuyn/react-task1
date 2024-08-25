import React, { useEffect, useState } from 'react';
import { useBannerContext } from '../../context/BannerContext';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.scss';
import LoadingSpinner from '../loader/LoadingSpinner';

const Header = () => {
  const { screen, isScrolled } = useBannerContext();
  const [imgError, setImgError] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('https://picsum.photos/seed/picsum/200/300');
        if (response.ok) {
          setLogoSrc(response.url);
        } else {
          setImgError(true);
        }
      } catch {
        setImgError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className={`header ${screen ? 'fixed' : ''} ${isScrolled && screen ? 'scrolled' : ''}`}>
      <div className="logo">
        {loading ? (
          <LoadingSpinner />
        ) : imgError ? (
          <span>Image logo page</span>
        ) : (
          <img
            src={logoSrc}
            alt="Logo"
          />
        )}
      </div>
      <div className="item">
        <ul className='list-item'>
          <li>Home</li>
          <li>About</li>
          <li>Video</li>
          <li>Article</li>
        </ul>
      </div>
      <div className="auth-buttons">
        <button className="btn-login">Login</button>
        <button className="btn-register">Register</button>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <MenuIcon />
      </button>
      {menuOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="item">
              <ul className='list-item-modal'>
                <li>Home</li>
                <li>About</li>
                <li>Video</li>
                <li>Article</li>
              </ul>
            </div>
            <div className="auth-buttons-modal">
              <button className="btn-login">Login</button>
              <button className="btn-register">Register</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
