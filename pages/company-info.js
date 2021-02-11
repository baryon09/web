import Layout from '../components/layout';
import styles from '../styles/companyInfo.module.css';
import FadeInWhenVisible from '../components/fadeInWhenVisible';

const CompanyInfoPage = () => {
  return (
    <Layout>
      <FadeInWhenVisible>
        <section className='container'>
          <h1>会社概要</h1>
          <div className={styles.row}>
            <img
              height='150px'
              width='260px'
              src='assets/baryon_logo.png'
              alt='baryon logo'
            />
            <table className={styles['company-info']}>
              <thead>
                <tr>
                  <th colSpan='1'></th>
                  <th colSpan='2'></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>会社名</td>
                  <td>株式会社バリオンパートナーズ</td>
                </tr>
                <tr>
                  <td>業務内容</td>
                  <td>
                    海外投資、新規事業立ち上げ等の助言、共同投資などを主たる業務とする。
                  </td>
                </tr>
                <tr>
                  <td>メールアドレス</td>
                  <td>info@bayon.jp</td>
                </tr>
                <tr>
                  <td>代表取締役</td>
                  <td>姫野泰光</td>
                </tr>
                <tr>
                  <td>代表略歴</td>
                  <td>
                    大学卒業後、30年近く大企業から中小企業にいたる幅広い企業において新規事
                    業の立ち上げに携わる。立ち上げ時の戦略立案と実行、メンバーの雇用、予算の
                    獲得や資金調達、監督官庁の許認可取得、リスク管理等を実際に経験して、多く
                    の事業を成功に導く。また新興国の事業投資やファイナンスにも多くの経験を持
                    つ。世界銀行グループ多数国間投資保証機関の前東京事務所長。三井住友信託銀
                    行、メリルリンチ日本証券、モルガンスタンレー証券、マークリッチ・アンド・
                    カンパニー、日商岩井などでの勤務経験を持つ。ファイナンスや会計にも詳しい。
                    広島大学理学部物理学科卒業
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </FadeInWhenVisible>
    </Layout>
  );
};

export default CompanyInfoPage;
