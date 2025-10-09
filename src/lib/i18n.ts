import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '@/locales/en.json';
import bm from '@/locales/bm.json';

const resources = {
  en: {
    translation: en,
  },
  bm: {
    translation: bm,
  },
};

// Initialize i18n without LanguageDetector to prevent hydration mismatches
if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'en', // Always start with English to prevent hydration mismatch
      fallbackLng: 'en',
      debug: false,
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });
}

export default i18n;

