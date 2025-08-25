import FooterContact from '@components/footer/footer-contact/FooterContact';
import type { FC } from 'react';
import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <FooterContact
          img="./src/assets/icons/icon-phone.svg"
          img_alt="phone"
          text_lines={['+375 29 123 45 67', '+375 29 123 45 67']}
        />
        <FooterContact
          img="./src/assets/icons/icon-email.svg"
          img_alt="email"
          text_lines={['vitteh@tut.by']}
        />
      </div>
    </div>
  );
};

export default Footer;
