import { useEffect, useState, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Contacts.module.scss';
import TextComponent from '@/components/text-component/TextComponent';
import Button from '@/components/ui/button/Button';
import { getPageById } from '@/data/api/pages';
import type { Page } from '@/data/models/page';

interface ContentIdProps {
  content_id: string;
}

const Contacts: FC<ContentIdProps> = ({ content_id }) => {
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
    return null;
  }

  return (
    <section className={styles.contacts}>
      <div className={styles.about_main__content}>
        <div className={styles.about_main__content__img_wrapper}>
          <img
            className={styles.about_main__content__img_wrapper__img}
            src="./assets/images/people.png"
            alt="logo"
          />
        </div>
        <div className={styles.about_main__content__text}>
          <TextComponent pageContent={pageContent} />
          <Button text="Подробнее" onClick={() => navigate('/about')} />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
