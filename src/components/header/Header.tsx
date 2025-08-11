import HeaderLogo from '@components/header/header-logo/HeaderLogo';
import Navigation from '@components/header/navigation/Navigation';
// import LanguageSwitcher from '@components/lang-switcher/lang-switcher';
import type { FC } from 'react';
// import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';

const Header: FC = () => {
  // const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <HeaderLogo />
      <Navigation />

      {/* <LanguageSwitcher /> */}
    </header>
  );
};

export default Header;
