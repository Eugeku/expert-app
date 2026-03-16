import { useDocumentTitle } from '@utils/hooks/useDocumentTitle';
import { type FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';
import AboutCompany from '@/components/about/About';
import AboutMain from '@/components/about-main/AboutMain';
import Footer from '@/components/footer/Footer';
import ScrollToTop from '@/components/functional/ScrollToTop';
import Header from '@/components/header/Header';
import Info from '@/components/info/Info';

const App: FC = () => {
  useDocumentTitle('page_title');

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Header />
        <main className={styles.app__main}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<AboutMain content_id={'about_main'} />} />
            <Route
              path="/about"
              element={<AboutCompany content_id={'about'} />}
            />
            <Route path="/offers" element={<div>Offers</div>} />
            <Route path="/contacts" element={<div>Contacts</div>} />
            <Route path="/info" element={<Info content_id={'info'} />} />
            <Route path="/request" element={<div>Request</div>} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
