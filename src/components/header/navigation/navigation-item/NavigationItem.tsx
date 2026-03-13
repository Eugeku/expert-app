import type { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavigationItem.module.scss';

interface NavigationItemProps {
  itemName: string;
  route: string;
}

const NavigationItem: FC<NavigationItemProps> = (props) => {
  return (
    <li className={styles.item}>
      <NavLink
        to={props.route}
        end={props.route === '/'}
        className={({ isActive }) =>
          isActive
            ? `${styles.item__link} ${styles.item__link_active}`
            : styles.item__link
        }
      >
        {props.itemName}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
