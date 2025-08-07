import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useDocumentTitle = (key: string) => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t(key);
  }, [t, key]);
};
