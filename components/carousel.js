import React, { useEffect, useState } from 'react';
import styles from '../styles/components.module.css';

const IMAGES_LIST = ['assets/hero-img.jpg', 'assets/hero-img2.jpg'];

const Carousel = () => {
  const [currentImgIndex, setCurrentImgIndexTo] = useState(0);
  const [isFaded, setIsFadedTo] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(function () {
      setIsFadedTo(true);
      if (currentImgIndex === IMAGES_LIST.length - 1) {
        setCurrentImgIndexTo(0);
        setIsFadedTo(false);
        return;
      }
      setCurrentImgIndexTo((currentImgIndex) => currentImgIndex + 1);
      setIsFadedTo(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, [currentImgIndex]);
  return (
    <div className={styles['carousel-wrapper']}>
      <div
        key={`img-${currentImgIndex}`}
        className={styles.carousel}
        style={{ backgroundImage: `url(${IMAGES_LIST[currentImgIndex]})` }}
      ></div>
      <div className={styles['carousel-timer']}>
        <svg className={styles['carousel-line']} height='120' width='120'>
          <circle
            cx='60'
            cy='60'
            r='50'
            stroke='#428bca'
            stroke-width='20'
            fill='none'
          />
        </svg>
        <svg className={styles['carousel-path']} height='120' width='120'>
          <circle
            cx='60'
            cy='60'
            r='50'
            stroke='#fff'
            stroke-width='20'
            fill='none'
            opacity='0.5'
          />
        </svg>
      </div>
    </div>
  );
};

export default Carousel;
