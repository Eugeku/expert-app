import LanguageSwitcher from '@components/lang-switcher/lang-switcher';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.scss';

const Header: FC = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      {/* <Logo /> */}
      <div>Header log</div>

      {/* Navigation */}
      <div>{t('welcome', { name: 'Yauhen' })}</div>

      {/* <Navigation /> */}
      <div>Navigation</div>

      <LanguageSwitcher />
    </header>
  );
};

export default Header;
