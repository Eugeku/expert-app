import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './About.module.scss';
import ImageOverlay from '@/components/img-overlay/ImageOverlay';
import Button from '@/components/ui/button/Button';

const About: FC = () => {
  const navigate = useNavigate();
  return (
    <section className={styles.about}>
      <div className={styles.about__content}>
        <div className={styles.about__content__img_wrapper}>
          <ImageOverlay src="./src/assets/images/cert.png" alt="cert" />
        </div>
        <div className={styles.about__content__text_wrapper}>
          <div className={styles.about__content__text_wrapper__text}>
            <p className={styles.about__content__text_wrapper__text__paragraph}>
              Компания ООО «Витебский технический центр» основана в городе
              Витебск в 2011 году тремя специалистами по аттестации рабочих мест
              каждый из которых с более чем 15-летним опытом работы в этой
              области.
            </p>
            <p className={styles.about__content__text_wrapper__text__paragraph}>
              Каждый год мы проходим обучение и повышение квалификации и следим
              за всеми внесенными изменениями в законодательстве в этой области.
            </p>
            <p className={styles.about__content__text_wrapper__text__paragraph}>
              Мы работаем по всей Республике Беларусь. Наш опыт работы
              простирается в самых разных отраслях человеческой деятельности.
              Среди наших клиентов: компании пищевой промышленности,
              строительные компании, легкая промышленность (ткацкое
              происводство, швейное), медицинские и фармацевтические компании,
              предприятия лесного хозяйства, транспортной логистики, учреждения
              образования и многие другие.
            </p>
            <p className={styles.about__content__text_wrapper__text__paragraph}>
              Все годы нашей деятельности и по сей день мы ставим своей целью
              достижение самого высокого уровня сервиса и качества наших услуг.
            </p>
            <p className={styles.about__content__text_wrapper__text__paragraph}>
              Все наши специалисты разделяют это стремление, в любой ситуации мы
              остаемся на стороне клиента и готовы помочь со всеми возникающими
              трудностями.
            </p>
          </div>
          <Button text="Наши услуги" onClick={() => navigate('/offers')} />
        </div>
      </div>
    </section>
  );
};

export default About;
