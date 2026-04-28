import { type FC } from 'react';
import styles from './PageRenderComponent.module.scss';
import ImageOverlay from '@/components/img-overlay/ImageOverlay';
import type { Page } from '@/data/models/page';

interface PageRenderProps {
  pageContent: Page;
  activeBlockId?: string | null;
  onBlockToggle?: (id: string) => void;
}

const PageRenderComponent: FC<PageRenderProps> = ({
  pageContent,
  activeBlockId,
  onBlockToggle,
}) => {
  const isAccordion = Boolean(onBlockToggle);

  return (
    <div className={styles.text_component}>
      {pageContent.page_title && (
        <h2 className={styles.text_component__title}>
          {pageContent.page_title}
        </h2>
      )}
      {pageContent.page_blocks.map((block) => (
        <div className={styles.text_component__block} key={block.block_id}>
          {block.block_title && (
            <h3
              className={styles.text_component__block__title}
              onClick={() => onBlockToggle?.(block.block_id)}
            >
              {block.block_title}
            </h3>
          )}
          {(!isAccordion || activeBlockId === block.block_id) &&
            block.block_sections.map((section) => (
              <div
                className={styles.text_component__block__section}
                key={section.section_id}
              >
                {section.section_title && (
                  <h3 className={styles.text_component__block__section__title}>
                    {section.section_title}
                  </h3>
                )}

                {section.section_paragraphs.map((paragraph) => (
                  <div
                    className={styles.text_component__block__section__paragraph}
                    key={paragraph.paragraph_id}
                  >
                    {paragraph.paragraph_title && (
                      <h4
                        className={
                          styles.text_component__block__section__paragraph__title
                        }
                      >
                        {paragraph.paragraph_title}
                      </h4>
                    )}
                    <p
                      key={paragraph.paragraph_id}
                      className={
                        styles.text_component__block__section__paragraph__text
                      }
                    >
                      {paragraph.paragraph_text}
                    </p>

                    {paragraph.paragraph_list && (
                      <ul
                        className={
                          styles.text_component__block__section__paragraph__list
                        }
                      >
                        {paragraph.paragraph_list.map((item) => (
                          <li
                            className={
                              styles.text_component__block__section__paragraph__list__item
                            }
                            key={item.item_id}
                          >
                            {item.item_title && (
                              <h5
                                className={
                                  styles.text_component__block__section__paragraph__list__item__title
                                }
                              >
                                {item.item_title}
                              </h5>
                            )}
                            <p
                              className={
                                styles.text_component__block__section__paragraph__list__item__text
                              }
                            >
                              {item.item_text}
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}

                    {paragraph.paragraph_img && (
                      <div
                        className={
                          styles.text_component__block__section__paragraph__img
                        }
                      >
                        <h6
                          className={
                            styles.text_component__block__section__paragraph__img__label
                          }
                        >
                          {paragraph.paragraph_img.img_label}
                        </h6>
                        <div
                          className={
                            styles.text_component__block__section__paragraph__img__image
                          }
                        >
                          <ImageOverlay
                            src={paragraph.paragraph_img?.img_src}
                            alt={paragraph.paragraph_img?.img_alt}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default PageRenderComponent;
