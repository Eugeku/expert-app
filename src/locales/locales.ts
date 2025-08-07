import locales from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './lang/en.json';
import ru from './lang/ru.json';

locales.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
  },
  lng: 'ru',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  react: { useSuspense: false },
});

export default locales;
