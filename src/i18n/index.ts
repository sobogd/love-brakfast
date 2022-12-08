import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import i18nRu from "./ru";
import i18nEn from "./en";
import i18nUa from "./ua";
import i18nTr from "./tr";

const i18n = createInstance({
  fallbackLng: "ru",
  resources: {
    ru: {
      translation: i18nRu,
    },
    tr: {
      translation: i18nTr,
    },
    ua: {
      translation: i18nUa,
    },
    en: {
      translation: i18nEn,
    },
  },
});

i18n.use(initReactI18next).init();

export default i18n;
