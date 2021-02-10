import { useState } from 'react';
import Link from 'next/link';
import Button from './button';

const DrawerTrigger = ({ isDrawerClosed, toggleDrawer }) => {
  return (
    <div onClick={toggleDrawer} className='wrapper'>
      <div className={isDrawerClosed ? 'trigger' : 'trigger cross'}>
        <svg id='icon' viewBox='0 0 800 600'>
          <path
            d='M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200'
            id='top'
          ></path>
          <path d='M300,320 L540,320' id='middle'></path>
          <path
            d='M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190'
            id='bottom'
            transform='translate(480, 320) scale(1, -1) translate(-480, -318) '
          ></path>
        </svg>
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
              <Link href='/'>業務内容</Link>
            </li>
            <li data-position='02'>
              <Link href='/'>会社概要</Link>
            </li>
            <li data-position='03'>
              <Link href='/'>お問い合わせ</Link>
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
