import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styles from './HeaderLogo.module.scss';

const HeaderLogo: FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onHeaderLogoClick = () => {
    navigate('/');
  };

  return (
    <div className={styles.logo} onClick={() => onHeaderLogoClick()}>
      <div className={styles.logo__img}></div>
      <h1 className={styles.logo__text}>{t('company_name')}</h1>
    </div>
  );
};

export default HeaderLogo;
