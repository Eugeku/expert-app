import { useEffect, useState, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Info.module.scss';
import TextComponent from '@/components/text-component/TextComponent';
import Button from '@/components/ui/button/Button';
import { getPageById } from '@/data/api/pages';
import type { Page } from '@/data/models/page';

interface ContentIdProps {
  content_id: string;
}

const Info: FC<ContentIdProps> = ({ content_id }) => {
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
    <section className={styles.info}>
      <div className={styles.info__content}>
        <div className={styles.info__content__text_wrapper}>
          <TextComponent pageContent={pageContent} />
          <Button text="Наши услуги" onClick={() => navigate('/offers')} />
        </div>
      </div>
    </section>
  );
};

export default Info;
