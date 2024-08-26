import React, { useEffect, useState } from 'react';
import { useBannerContext } from '../../../context/BannerContext';
import './Banner.scss';
import LoadingSpinner from '../../../components/loader/LoadingSpinner';

const Banner = () => {
  const { isFullScreenBanner, toggleFullScreenBanner, isScrolled } = useBannerContext();
  const [bannerImage, setBannerImage] = useState('');
  const [bannerContentImage, setBannerContentImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const responseBanner = await fetch('https://picsum.photos/seed/picsum/200/300');
        const bannerImageUrl = responseBanner.url;

        const responseContent = await fetch('https://picsum.photos/seed/picsum/200/300');
        const bannerContentImageUrl = responseContent.url;

        setBannerImage(bannerImageUrl);
        setBannerContentImage(bannerContentImageUrl);
      } catch (error) {
        console.error("Failed to fetch images", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const bannerClassName = `banner ${isFullScreenBanner ? 'fixed' : ''} ${isScrolled ? 'position' : ''}`;

  const bannerContentClassName = `banner-content ${isFullScreenBanner ? 'expanded' : ''}`;

  return (
    <div className={bannerClassName}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <img
            src={bannerImage}
            alt="Blurred Background"
            className="banner-bg"
          />
          <div className={bannerContentClassName}>
            <img src={bannerContentImage} alt="Banner" />
            <button className='isFullScreenBanner' onClick={toggleFullScreenBanner}>
              <img src="https://www.svgrepo.com/show/379383/expand-wide.svg" alt="" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Banner;
