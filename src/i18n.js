import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationID from './locales/id/translation.json';
import translationSD from './locales/sd/translation.json';

const resources = {
  en: { translation: translationEN },
  id: { translation: translationID },
  sd: { translation: translationSD }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'id',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;