import type { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './FooterContact.module.scss';

export const LinkType = {
  email: 'mailto:',
  phone: 'tel:',
} as const;

type LinkType = (typeof LinkType)[keyof typeof LinkType];

interface ContactLine {
  value: string;
  isInteractive: boolean;
}

interface FooterContactProps {
  img: string;
  img_alt: string;
  text_lines: Array<ContactLine>;
  link_type?: LinkType;
  custom_link?: string;
}

const FooterContact: FC<FooterContactProps> = (props) => {
  const defineLinkType = (
    line: string,
    linkType?: LinkType,
    customLink?: string
  ): string => {
    if (customLink) {
      return customLink;
    }
    if (linkType) {
      return `${linkType}${line}`;
    }
    return line;
  };

  return (
    <div className={styles.footer_contact}>
      <img
        className={styles.footer_contact__img}
        src={props.img}
        alt={props.img_alt}
      />
      <div className={styles.footer_contact__text}>
        {props.text_lines.map((line, index) =>
          line.isInteractive ? (
            <Link
              className={styles.footer_contact__text__link_interactive}
              key={index}
              to={defineLinkType(
                line.value,
                props.link_type,
                props.custom_link
              )}
              target="_blank"
            >
              {line.value}
            </Link>
          ) : (
            <div
              key={index}
              className={styles.footer_contact__text__link_no_interactive}
            >
              {line.value}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default FooterContact;
