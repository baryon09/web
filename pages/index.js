import styles from '../styles/home.module.css';
import { useInView } from 'react-intersection-observer';
import Button from '../components/button';
import { FaMedapps } from 'react-icons/fa';
import Layout from '../components/layout';
import Link from 'next/link';
import FadeInWhenVisible from '../components/fadeInWhenVisible';
import Carousel from '../components/carousel';

const HomePage = () => {
  const [ref, inView] = useInView({ threshold: 0 });

  return (
    <Layout shouldDrawerTriggerBeVisible={!inView}>
      <FadeInWhenVisible>
        <section id='top' ref={ref} className={styles.hero}>
          <ul className={styles.navbar}>
            <li>
              <Link href='#top'>TOP</Link>
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
          <div className={styles.content}>
            <img
              className={styles['company-logo']}
              height='50px'
              width='80px'
              src='assets/baryon_logo.png'
              alt='baryon logo'
            />
            <h1>
              未来のために、<span className='invert'>知恵を生かそう</span>
            </h1>
            <h2>新規事業・海外投資のプロ</h2>
          </div>
          <Carousel />
          <div className={styles['move-cursor']}>
            <span />
          </div>
        </section>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <section className={styles['investment-section']}>
          <h2 style={{ fontSize: '3.5rem', margin: 0 }}>
            新規事業立ち上げと海外投資は
          </h2>
          <h3 style={{ fontSize: '2.5rem', margin: 0 }}>
            バリオン・パートナーズへ
          </h3>
          <div className={styles['investment-section--content']}>
            <img src='assets/hero-img.jpg' alt='busy road' />
            <div>
              <h4>
                常に未来を見据えて、事業機会を探索し、
                市場のニーズに応える事業立ち上げや投資 を行ってきたスキル
              </h4>
              <p>
                法人・個人を問わず、いつもお客様のために考えるパー
                トナーとして、気軽に相談できる相手として、いつも一
                緒に歩む併走者でありたいと思っています。
              </p>
              <Link href='/company-info'>
                <Button>私たちについて</Button>
              </Link>
            </div>
          </div>
        </section>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <section className='section'>
          <h2
            style={{
              margin: 0,
              marginBottom: '2.825rem',
              textAlign: 'center',
            }}
          >
            新規事業を考えたい、海外に進出・投資をしたい
            と思ったら、まずご相談ください
          </h2>
          <img
            style={{ objectFit: 'cover', width: '90%' }}
            src='assets/hero-img.jpg'
            alt='busy road'
          />
        </section>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <section className={styles.services}>
          <h2
            style={{
              margin: 0,
              marginBottom: '2.825rem',
              textAlign: 'center',
            }}
          >
            バリオン・パートナーズのサービス内容の一例
          </h2>

          <ul>
            <li>
              <FaMedapps />
              <h4>海外投資支援</h4>
            </li>
            <li>
              <FaMedapps />
              <h4>貿易業務支援</h4>
            </li>
            <li>
              <FaMedapps />
              <h4>海外進出支援</h4>
            </li>
            <li>
              <FaMedapps />
              <h4>新規事業 立ち上げ支援</h4>
            </li>
            <li>
              <FaMedapps />
              <h4>貿易業務支援 デジタル化支援</h4>
            </li>
            <li>
              <FaMedapps />
              <h4>国内戸建住宅 建設助言</h4>
            </li>
            <li>
              <FaMedapps />
              <h4>海外移住助言</h4>
            </li>
            <li>
              <FaMedapps />
              <h4>農業支援</h4>
            </li>
            <li>
              <FaMedapps />
              <h4>不動産開発支援</h4>
            </li>
            <li>
              <FaMedapps />
              <h4>ネット営業支援</h4>
            </li>
          </ul>
          <Link href='/services'>
            <Button>サービスについて</Button>
          </Link>
        </section>
      </FadeInWhenVisible>
    </Layout>
  );
};

export default HomePage;
