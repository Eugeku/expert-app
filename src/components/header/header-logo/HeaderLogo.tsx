import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styles from './HeaderLogo.module.scss';

interface HeaderLogoProps {
  route: string;
}

const HeaderLogo: FC<HeaderLogoProps> = (props) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onHeaderLogoClick = () => {
    navigate(props.route);
  };

  return (
    <div className={styles.logo} onClick={() => onHeaderLogoClick()}>
      <div className={styles.logo__img}></div>
      <div className={styles.logo__text}>{t('company_name')}</div>
    </div>
  );
};

export default HeaderLogo;
