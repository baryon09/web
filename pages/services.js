import { useState } from 'react';
import Layout from '../components/layout';
import styles from '../styles/services.module.css';
import { FaMedapps } from 'react-icons/fa';
import FadeInWhenVisible from '../components/fadeInWhenVisible';

const ServicesPage = () => {
  const [optionMap, setOptionMapTo] = useState({
    left: true,
    right: false,
  });

  const switchToLeft = () => {
    setOptionMapTo({ left: true, right: false });
  };
  const switchToRight = () => {
    setOptionMapTo({ left: false, right: true });
  };
  return (
    <Layout>
      <FadeInWhenVisible>
        <section className='container'>
          <h1>バリオン・パートナーズの業務内容</h1>
          <div className='card'>
            <img className='card-image' src='assets/hero-img.jpg' alt='' />
            <div className='card-content'>
              <h3>新しい事をするにはどうす{<br />}れば いいのか？</h3>
              <p style={{ fontSize: '1.2rem' }}>
                当社では個人・法人を問わずに新しいことにチャレンジ
                したくてもできない方に。伴走者として一緒に事業や投
                資を始める業務としております。
              </p>
            </div>
          </div>
        </section>
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <section className={`${styles.services} container`}>
          <div className={styles.switch}>
            <button onClick={switchToLeft} data-active={optionMap.left}>
              法人の方
            </button>
            <button onClick={switchToRight} data-active={optionMap.right}>
              法人の方
            </button>
          </div>
          {optionMap.left ? (
            <ul
              className={`${styles['services-list']} ${styles['left-service-list']}`}
            >
              <li>
                <FaMedapps />
                <h3>海外投資支援</h3>
                <p>
                  アジア、アフリカなどの途上 国での起業実績、欧米企業で
                  の勤務経験や取引経験を持つ 当社のメンバーが皆様の海外
                  投資を支援いたします。
                </p>
              </li>
              <li>
                <FaMedapps />
                <h3>海外進出支援</h3>
                <p>
                  欧米のみならず途上国にネッ トワークを持つメンバーが御
                  社の海外支援を円滑なものし ます。言葉、法律、社会制度
                  の違いも怖がる事なく、無事 に事業を立ち上げられるよう
                  に支援します。
                </p>
              </li>
              <li>
                <FaMedapps />
                <h3> 海外進出支援 立ち上げ支援</h3>
                <p>
                  企業は組織が大きくなると、 どうしても多様性を排除する
                  環境になります。そのような 環境では新しいアイデアや商
                  品はなかなか出てきません。 我々は外部からそのような
                  「芽」を植え付け、一緒に育 てます。
                </p>
              </li>
              <li>
                <FaMedapps />
                <h3>貿易業務支援</h3>
                <p>
                  日本の企業で海外に商品を販 売したい、あるいは海外から
                  商品を輸入したなどの貿易業 務の不慣れな企業様を御支援 します。
                </p>
              </li>
              <li>
                <FaMedapps />
                <h3>デジタル化支援</h3>
                <p>
                  多くの企業はデジタル化の人 材が不足しており、導入が遅
                  れています。我々は企業のデ ジタル部門として御社の立場
                  に立った助言、導入支援、運 用を行います。
                </p>
              </li>
              <li>
                <FaMedapps />
                <h3>農業支援</h3>
                <p>
                  法人として農業に取り組む企 業が増えていますが、まだま
                  だ無農薬農業を実践できてい る企業は少ないです。当社は
                  無農薬栽培の支援を行います。
                </p>
              </li>
              <li>
                <FaMedapps />
                <h3>不動産開発⽀援</h3>
                <p>
                  当社では海外のグループ企業 でリゾート開発を行っており
                  ます。日本でも海外の利用者 でも納得できるようなリゾー
                  ト不動産開発を支援していま す。
                </p>
              </li>
              <li>
                <FaMedapps />
                <h3>ネット営業支援</h3>
                <p>
                  ネットによる営業は日々進化 しています。営業担当の人手
                  不足を補い、販売の効率化を もたらすネット営業を支援し ます。
                </p>
              </li>
            </ul>
          ) : (
            <ul className={`${styles['services-list']}`}>
              <li>
                <FaMedapps />
                <h3>海外投資支援</h3>
                <p>
                  アジア、アフリカなどの途上 国での起業実績、欧米企業で
                  の勤務経験や取引経験を持つ 当社のメンバーが皆様の海外
                  投資を支援いたします。
                </p>
              </li>
              <li>
                <FaMedapps />
                <h3>海外移住助言</h3>
                <p>
                  マレーシアに移住経験のある メンバーが、世界の移住コン
                  サルタントとのネットワーク を元にした情報提供と調査を
                  ご提供できます。
                </p>
              </li>
              <li>
                <FaMedapps />
                <h3>国内戸建住宅 建設助言</h3>
                <p>
                  なぜ家を建てる事が安くなら ないのか、安い家は欠陥ばか
                  り、こんなお悩みの解決は、 建築をもっと知る事です。施
                  主の立場に立った助言をする のは私たちだけです。
                </p>
              </li>
              <li>
                <FaMedapps />
                <h3>農業支援</h3>
                <p>
                  慣行農法の真実、有機農法の 問題点など、食べ物を生産す
                  る農業の業界にメスを入れて、 消費者自ら無農薬農業を楽し
                  めるように支援します。
                </p>
              </li>
            </ul>
          )}
        </section>
      </FadeInWhenVisible>
    </Layout>
  );
};

export default ServicesPage;
