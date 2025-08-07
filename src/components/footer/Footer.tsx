import type { FC } from 'react';
import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      {/* Contacts */}
      <div>Contacts</div>

      {/* Socials */}
      <div>Socials</div>
    </div>
  );
};

export default Footer;
