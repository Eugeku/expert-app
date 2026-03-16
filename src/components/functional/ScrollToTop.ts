import { useEffect, type FC } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: FC = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
