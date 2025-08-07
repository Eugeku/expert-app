import Footer from '@components/footer/Footer';
import Header from '@components/header/Header';
import { useDocumentTitle } from '@utils/hooks/useDocumentTitle';
import { type FC } from 'react';
import './App.scss';

const App: FC = () => {
  useDocumentTitle('page_title');

  return (
    <>
      <div className="app">
        <Header />
        <div>Expert App</div>
        <Footer />
      </div>
    </>
  );
};

export default App;
