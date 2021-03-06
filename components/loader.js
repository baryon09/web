import { useEffect, useState } from 'react';
import styles from '../styles/components.module.css';

const Loader = () => {
  const [isLoaded, setIsLoadedTo] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoadedTo(true);
    }, 2100);
    return () => clearTimeout(timeout);
  }, []);

  return isLoaded ? null : (
    <div className={styles.loader}>
      <div>
        <span className={`${styles.mask}`}></span>
        <span className={styles['lower-mask']}></span>
        <img
          height='180px'
          width='280px'
          src='assets/baryon_loading.png'
          alt='baryon loading mask'
        />
      </div>
    </div>
  );
};

export default Loader;
