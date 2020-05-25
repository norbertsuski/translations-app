import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "translated-paragraph": "We are going to translate this paragraph - how will it be in Polish?"
    }
  },
  pl: {
    translation: {
      "translated-paragraph": "Przetlumaczymy ten paragraf - jak to bedzie po Polsku?"
    }
  }
};

const DETECTION_OPTIONS = {
  order: ['localStorage', 'navigator'],
  caches: ['localStorage']
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: DETECTION_OPTIONS,
    resources,
    fallbackLng: 'en'
  });

export default i18n;
