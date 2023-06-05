// ** I18n Imports
import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "@src/assets/data/locales/en.json";
import translationFA from "@src/assets/data/locales/fa.json";

const resources = {
    en: {
      translation: translationEN,
    },
    fa: {
      translation: translationFA,
    },
  };
i18n
.use(initReactI18next)
.init({
  resources,
  lng:"fa", //default language
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});
    // // Enables the i18next backend
    // .use(Backend)

    // // Enable automatic language detection
    // .use(LanguageDetector)

    // // Enables the hook initialization module
    // .use(initReactI18next)
    // .init({
    //     lng: "fa",
    //     backend: {
    //         /* translation file path */
    //         loadPath: "/assets/data/locales/{{lng}}.json",
    //     },
    //     fallbackLng: i18nextLng ?? "fa",
    //     debug: false,
    //     keySeparator: false,
    //     react: {
    //         useSuspense: false,
    //     },
    //     interpolation: {
    //         escapeValue: false,
    //         formatSeparator: ",",
    //     },
    // });

export default i18n;
