import type { FC } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: FC = () => {
  const { i18n } = useTranslation();

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLang('ru')}>RU</button>
      <button onClick={() => changeLang('en')}>EN</button>
    </div>
  );
};

export default LanguageSwitcher;
