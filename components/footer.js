import styles from '../styles/components.module.css';
import { FaPhone, FaRegEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.card}>
        <img src='assets/hero-img.jpg' alt='farmer' />
        <div>
          <span>RECRUIT</span>
          <h3>仲 間 募 集 中</h3>
          <p>
            当社では一緒に楽しむ仲間（アルバイト、契約社員、正社員）
            を随時募集しています。年齢・性別・学歴・経歴は一切問いま
            せんが、やる気と向上心と誠実さは重要です。ご関心のある方
            はお気軽にご連絡ください。
          </p>
        </div>
      </div>
      <footer className={styles.footer}>
        <div className={styles.contactInfo}>
          <div className={styles.phone}>
            <p>
              <a href='tel:0237435303'>
                <FaPhone /> 0237-43-5303
              </a>
            </p>
            <small>8:00～17:30（第2・4土曜、日曜、祝日定休</small>
          </div>
          <span className={styles.divider}></span>
          <div className={styles.message}>
            <Link href='/contact'>
              <>
                <p>
                  <FaRegEnvelope /> お問い合わせ
                </p>
                <small>インターネットで24時間受付</small>
              </>
            </Link>
          </div>
        </div>

        <div className={styles.brandInfo}>
          <img
            height='120px'
            width='200px'
            src='assets/baryon_logo.png'
            alt='baryon logo'
          />
          <ul className='navbar'>
            <li>
              <Link href='#'>TOP</Link>
            </li>
            <li>
              <Link href='/services'>業務内容</Link>
            </li>
            <li>
              <Link href='/company-info'>会社概要</Link>
            </li>
            <li>
              <Link href='/contact'>お問い合わせ</Link>
            </li>
          </ul>
          <small>
            © 2021 ALL RIGHTS RESERVED. BARYON PARTNERS CORPORATION LTD
          </small>
          <span
            style={{ display: 'block', marginTop: '10px', color: 'lightgray' }}
          >
            <strong>
              POWERED BY{' '}
              <span>
                <Link href='https://mozarc.jp/'>MOZARC</Link>
              </span>
            </strong>
          </span>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
