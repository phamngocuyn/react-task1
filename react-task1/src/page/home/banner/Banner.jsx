import React, { useEffect, useState } from 'react';
import { useBannerContext } from '../../../context/BannerContext';
import './Banner.scss';
import LoadingSpinner from '../../../components/loader/LoadingSpinner';

const Banner = () => {
  const { screen, toggleScreen, isScrolled } = useBannerContext();
  const [bannerImage, setBannerImage] = useState('');
  const [bannerContentImage, setBannerContentImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const responseBanner = await fetch('https://picsum.photos/seed/picsum/200/300');
        setBannerImage(responseBanner.url);

        const responseContent = await fetch('https://picsum.photos/seed/picsum/200/300');
        setBannerContentImage(responseContent.url);
      } catch (error) {
        console.error("Failed to fetch images", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className={`banner ${screen ? 'fixed' : ''} ${isScrolled ? 'position' : ''}`}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <img
            src={bannerImage}
            alt="Blurred Background"
            className="banner-bg"
          />
          <div className={`banner-content ${screen ? 'expanded' : ''}`}>
            <img src={bannerContentImage} alt="Banner" />
            <button className='screen' onClick={toggleScreen}>
              <img src="https://www.svgrepo.com/show/379383/expand-wide.svg" alt="" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Banner;
