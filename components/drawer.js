import { useState } from 'react';
import Link from 'next/link';
import Button from './button';

const DrawerTrigger = ({ isDrawerClosed, toggleDrawer }) => {
  return (
    <div onClick={toggleDrawer} className='drawer-wrapper'>
      <div className='three col'>
        <div
          className={isDrawerClosed ? 'hamburger' : 'hamburger is-active'}
          id='hamburger-1'
        >
          <span className='line'></span>
          <span className='line'></span>
          <span className='line'></span>
        </div>
      </div>
    </div>
  );
};

const Drawer = ({ shouldDrawerTriggerBeVisible }) => {
  const [isDrawerClosed, setIsDrawerCloseTo] = useState(true);

  const toggleDrawer = () => {
    setIsDrawerCloseTo((isDrawerClosed) => !isDrawerClosed);
  };

  if (shouldDrawerTriggerBeVisible) {
    return (
      <>
        <DrawerTrigger
          isDrawerClosed={isDrawerClosed}
          toggleDrawer={toggleDrawer}
        />
        <div className={isDrawerClosed ? 'drawer close' : 'drawer'}>
          <ul>
            <li data-position='00'>
              <Link href='/'>ホーム</Link>
            </li>
            <li data-position='01'>
              <Link href='/services'>業務内容</Link>
            </li>
            <li data-position='02'>
              <Link href='/company-info'>会社概要</Link>
            </li>
            <li data-position='03'>
              <Link href='/contact'>お問い合わせ</Link>
            </li>
            <li className='mt-2'>
              <Button>お問い合わせ</Button>
            </li>
            <li className='contact'>
              <span>電気のことなら、お気軽にご相談ください。</span>
              <a href='tel:0237435303'>
                <p>0237-43-5303</p>
              </a>
              <span>8:00～17:30（第2・4土曜、日曜、祝日定休）</span>
            </li>
          </ul>
        </div>
      </>
    );
  }
  return null;
};

export default Drawer;
