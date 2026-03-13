import { useState, type FC } from 'react';
import { useTranslation } from 'react-i18next';
import NavigationItem from './navigation-item/NavigationItem';
import styles from './Navigation.module.scss';

const Navigation: FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={styles.navigation}>
      <button
        type="button"
        className={`${styles.navigation__burger} ${isOpen ? styles.navigation__burger_open : ''}`}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <span />
      </button>

      <div
        className={
          isOpen
            ? styles.navigation__list_overlay_open
            : styles.navigation__list_overlay
        }
        onClick={closeMenu}
      >
        <ul
          className={
            isOpen
              ? `${styles.navigation__list} ${styles.navigation__list_open}`
              : styles.navigation__list
          }
        >
          <NavigationItem route="/" itemName={t('navigation_home')} />
          <NavigationItem route="/about" itemName={t('navigation_about')} />
          <NavigationItem route="/offers" itemName={t('navigation_offers')} />
          <NavigationItem
            route="/contacts"
            itemName={t('navigation_contacts')}
          />
          <NavigationItem route="/info" itemName={t('navigation_info')} />
          <NavigationItem route="/request" itemName={t('navigation_request')} />
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
