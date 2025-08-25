import type { FC } from 'react';
import styles from './AboutMain.module.scss';
import Button from '@/components/ui/button/Button';

const AboutMain: FC = () => {
  return (
    <section className={styles.about_main}>
      <div className={styles.about_main__content}>
        <div className={styles.about_main__content__img_wrapper}>
          <img
            className={styles.about_main__content__img_wrapper__img}
            src="./src/assets/images/people.jpg"
            alt="logo"
          />
        </div>
        <div className={styles.about_main__content__text}>
          <h2 className={styles.about_main__content__text__title}>
            Аттестация рабочих мест с нами — вы уверены в завтрашнем дне!
          </h2>
          <ul>
            <li>
              Выезд специалиста на инструментальные замеры факторов
              производственной среды
            </li>
            <li>
              Оперативная и качественная подготовка документов по аттестации
              рабочих мест
            </li>
            <li>
              Полное сопровождение и консультация на всех этапах аттестации
            </li>
            <li>
              Мониторинг документов по аттестации рабочих мест да положительного
              ответа с государственной экспертизы Минтруда Республики Беларусь
            </li>
          </ul>
          <Button
            text="Подробнее"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
