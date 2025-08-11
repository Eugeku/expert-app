import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import NavigationItem from './navigation-item/NavigationItem';
import styles from './Navigation.module.scss';

const Navigation: FC = () => {
  const { t } = useTranslation();

  return (
    <ul className={styles.navigation}>
      <NavigationItem route="/" itemName={t('naviagation_about')} />
      <NavigationItem route="/offers" itemName={t('naviagation_offers')} />
      <NavigationItem route="/contacts" itemName={t('naviagation_contacts')} />
      <NavigationItem route="/info" itemName={t('naviagation_info')} />
      <NavigationItem route="/request" itemName={t('naviagation_request')} />
    </ul>
  );
};

export default Navigation;
