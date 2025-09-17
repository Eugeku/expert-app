import FooterContact, {
  LinkType,
} from '@components/footer/footer-contact/FooterContact';
import type { FC } from 'react';
import styles from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__content}>
        <div>ООО «Витебский технический центр»</div>
        <div>УНП 391365905</div>
        <div className={styles.footer__content__contacts}>
          <FooterContact
            img="./src/assets/icons/icon-phone.svg"
            img_alt="phone"
            text_lines={[
              { value: 'Рабочий тел./факс:', isInteractive: false },
              { value: '8-0212-24-90-93', isInteractive: true },
              { value: 'Специалисты:', isInteractive: false },
              { value: '+375-29-898-61-05', isInteractive: true },
              { value: '+375-29-112-79-56', isInteractive: true },
              { value: '+375-29-713-36-42', isInteractive: true },
            ]}
            link_type={LinkType.phone}
          />
          <FooterContact
            img="./src/assets/icons/icon-email.svg"
            img_alt="email"
            text_lines={[{ value: 'vitteh@tut.by', isInteractive: true }]}
            link_type={LinkType.email}
          />
          <FooterContact
            img="./src/assets/icons/icon-marker.svg"
            img_alt="map"
            text_lines={[
              { value: '210029, Республика Беларусь', isInteractive: true },
              { value: 'г. Витебск, ул. Правды, д. 25', isInteractive: true },
              { value: '3 этаж, офис 39', isInteractive: true },
              {
                value:
                  '(вход со двора, пристройка слева от входа в магазин "Грошик")',
                isInteractive: false,
              },
            ]}
            custom_link="https://yandex.com/maps/154/vitebsk/?ll=30.213226%2C55.188134&mode=poi&poi%5Bpoint%5D=30.213187%2C55.188106&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D82842723396&tab=gallery&z=20.8"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
