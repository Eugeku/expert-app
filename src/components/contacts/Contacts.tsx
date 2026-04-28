import { useEffect, useState, type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Contacts.module.scss';
import Button from '@/components/ui/button/Button';
import { getPageById } from '@/data/api/pages';
import { getParagraphById, type Page } from '@/data/models/page';

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

  const sheduleParagraph = getParagraphById(pageContent, 'schedule');
  const emailParagraph = getParagraphById(pageContent, 'email');
  const phoneParagraph = getParagraphById(pageContent, 'phone');
  const addressParagraph = getParagraphById(pageContent, 'address');
  const mapParagraph = getParagraphById(pageContent, 'map_section', 'map');

  return (
    <section className={styles.contacts}>
      <div className={styles.contacts__content}>
        <div className={styles.contacts__content__text_wrapper}>
          <div className={styles.contacts__content__text_wrapper__text}>
            <h2 className={styles.contacts__content__text_wrapper__text__title}>
              {pageContent.page_title}
            </h2>
            {sheduleParagraph && (
              <div className={styles.contacts__content__item}>
                <h3 className={styles.contacts__content__item__title}>
                  {sheduleParagraph.paragraph_title}
                </h3>
                <p className={styles.contacts__content__item__text}>
                  {sheduleParagraph.paragraph_text}
                </p>
              </div>
            )}
            {emailParagraph && (
              <div className={styles.contacts__content__item}>
                <h3 className={styles.contacts__content__item__title}>
                  {emailParagraph.paragraph_title}
                </h3>
                <p className={styles.contacts__content__item__text}>
                  {emailParagraph.paragraph_text}
                </p>
              </div>
            )}
            {phoneParagraph && (
              <div className={styles.contacts__content__item}>
                <h3 className={styles.contacts__content__item__title}>
                  {phoneParagraph.paragraph_title}
                </h3>
                <p className={styles.contacts__content__item__text}>
                  {phoneParagraph.paragraph_text}
                </p>
              </div>
            )}
            {addressParagraph && (
              <div className={styles.contacts__content__item}>
                <h3 className={styles.contacts__content__item__title}>
                  {addressParagraph.paragraph_title}
                </h3>
                <p className={styles.contacts__content__item__text}>
                  {addressParagraph.paragraph_text}
                </p>
              </div>
            )}
            {mapParagraph && (
              <div className={styles.contacts__content__item}>
                <h3 className={styles.contacts__content__item__title}>
                  {mapParagraph.paragraph_title}
                </h3>
                <p className={styles.contacts__content__item__text}>
                  {mapParagraph.paragraph_text}
                </p>
              </div>
            )}
          </div>
          <Button text="Наши услуги" onClick={() => navigate('/offers')} />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
