import '../styles/globals.css';
import Loader from '../components/loader';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Loader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
