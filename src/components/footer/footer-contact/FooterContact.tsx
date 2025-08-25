import type { FC } from 'react';
import styles from './FooterContact.module.scss';

interface FooterContactProps {
  img: string;
  img_alt: string;
  text_lines: Array<string>;
}

const FooterContact: FC<FooterContactProps> = (props) => {
  return (
    <div className={styles.footer__contact}>
      <img
        className={styles.footer__contact__img}
        src={props.img}
        alt={props.img_alt}
      />
      <div className={styles.footer__contact__text}>
        {props.text_lines.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  );
};

export default FooterContact;
