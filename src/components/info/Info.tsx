import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Info.module.scss';
import ImageOverlay from '@/components/img-overlay/ImageOverlay';
import Button from '@/components/ui/button/Button';

const Info: FC = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.info}>
      <div className={styles.info__content}>
        <div className={styles.info__content__img_wrapper}>
          <ImageOverlay src="./src/assets/images/cert.png" alt="cert" />
        </div>
        <div className={styles.info__content__text_wrapper}>
          <div className={styles.info__content__text_wrapper__text}>
            <h2>Аттестация рабочих мест</h2>
            <h3>Аттестация рабочих мест по условиям труда – что это?</h3>
            <p className={styles.info__content__text_wrapper__text__paragraph}>
              Аттестация рабочих мест в Беларуси — это комплекс мер, который
              включает в себя выявление рабочих мест с вредными условиями труда,
              их оценку, а также разработку мероприятий по улучшению условий
              труда.
            </p>

          </div>

          <Button text="Наши услуги" onClick={() => navigate('/offers')} />
        </div>
      </div>
    </section>
  );
};

export default Info;
