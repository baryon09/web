import Button from '../components/button';
import Layout from '../components/layout';
import styles from '../styles/contact.module.css';
import FadeInWhenVisible from '../components/fadeInWhenVisible';

const ContactPage = () => {
  return (
    <Layout>
      <FadeInWhenVisible>
        <section className='container'>
          <h2 style={{ margin: 0, marginTop: '2rem' }}>お問い合わせ</h2>
          <h3
            style={{
              margin: 0,
              marginBottom: '2rem',
              textAlign: 'center',
              fontSize: '1.2rem',
              width: '60%',
            }}
          >
            投資、事業立ち上げ、海外投資・進出の
            あんな要望、こんな悩み。何でもお気軽にご相談ください。
          </h3>
          <form className={styles['contact-form']}>
            <table className={styles['contact']}>
              <thead>
                <tr>
                  <th colSpan='1'></th>
                  <th colSpan='2'></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <label>名前</label>
                  </td>
                  <td>
                    <input placeholder='バリオン 太郎' />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>メールアドレス</label>
                  </td>
                  <td>
                    <input placeholder='example@youremail.com' />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>メールアドレス（再確認）</label>
                  </td>
                  <td>
                    <input placeholder='example@youremail.com' />
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>相談内容</label>
                  </td>
                  <td>
                    <textarea placeholder='内容' />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <Button formID='contact-form' type='submit'>
            送信
          </Button>
        </section>
      </FadeInWhenVisible>
    </Layout>
  );
};

export default ContactPage;
