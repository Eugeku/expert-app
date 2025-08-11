import type { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './NavigationItem.module.scss';

interface NavigationItemProps {
  itemName: string;
  route: string;
}

const NavigationItem: FC<NavigationItemProps> = (props) => {
  return (
    <li className={styles.item}>
      <Link to={props.route} className={styles.item__link}>
        {props.itemName}
      </Link>
    </li>
  );
};

export default NavigationItem;
