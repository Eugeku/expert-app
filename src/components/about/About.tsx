import type { FC } from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TextComponent from '../text-component/TextComponent';
import styles from './About.module.scss';
import ImageOverlay from '@/components/img-overlay/ImageOverlay';
import Button from '@/components/ui/button/Button';
import { getPageById } from '@/data/api/pages';
import type { Page } from '@/data/models/page';

interface ContentIdProps {
  content_id: string;
}

const About: FC<ContentIdProps> = ({ content_id }) => {
  const navigate = useNavigate();
  const [pageContent, setPage] = useState<Page | null>(null);

  useEffect(() => {
    getPageById(content_id).then((data) => {
      if (data) {
        setPage(data);
      }
    });
  }, [content_id]);

  if (!pageContent) {
    return null; // или loader
  }

  return (
    <section className={styles.about}>
      <div className={styles.about__content}>
        <div className={styles.about__content__img_wrapper}>
          <ImageOverlay src="./assets/images/cert.png" alt="cert" />
        </div>

        <div className={styles.about__content__text_wrapper}>
          <TextComponent pageContent={pageContent} />
          <Button text="Наши услуги" onClick={() => navigate('/offers')} />
        </div>
      </div>
    </section>
  );
};

export default About;
