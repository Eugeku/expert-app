import Home from '@pages/home/Home';
import { useDocumentTitle } from '@utils/hooks/useDocumentTitle';
import { type FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.scss';

const App: FC = () => {
  useDocumentTitle('page_title');

  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
