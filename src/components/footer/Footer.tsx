import type { FC } from 'react';
import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div>Contacts</div>
      <div>Socials</div>
    </div>
  );
};

export default Footer;
