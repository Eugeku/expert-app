import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import NavigationItem from './navigation-item/NavigationItem';
import styles from './Navigation.module.scss';

const Navigation: FC = () => {
  const { t } = useTranslation();

  return (
    <ul className={styles.navigation}>
      <NavigationItem route="/about" itemName={t('navigation_about')} />
      <NavigationItem route="/offers" itemName={t('navigation_offers')} />
      <NavigationItem route="/contacts" itemName={t('navigation_contacts')} />
      <NavigationItem route="/info" itemName={t('navigation_info')} />
      <NavigationItem route="/request" itemName={t('navigation_request')} />
    </ul>
  );
};

export default Navigation;
