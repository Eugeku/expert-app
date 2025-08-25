import type { FC } from 'react';
// import Footer from '@/components/footer/Footer';
import AboutMain from '@/components/about-main/AboutMain';
import Header from '@/components/header/Header';
// import styles from './Home.module.scss';

const Home: FC = () => {
  return (
    <>
      <Header />
      <AboutMain />
      {/* <Footer /> */}
    </>
  );
};

export default Home;
