import Head from 'next/head';
import Footer from './footer';
import Drawer from './drawer';

const Layout = ({ children, head, shouldDrawerTriggerBeVisible }) => {
  return (
    <>
      <Head>{head}</Head>
      <main>
        <Drawer
          shouldDrawerTriggerBeVisible={
            shouldDrawerTriggerBeVisible === undefined
              ? true
              : shouldDrawerTriggerBeVisible
          }
        />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
