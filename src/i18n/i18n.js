import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { LOCALS } from "./constants.js"
import { uk } from "./translations/uk.js";
import { en } from "./translations/en.js";

const resources = {
    [LOCALS.EN]: {
        translation: en
    },
    [LOCALS.UK]: {
        translation: uk
    }
};

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        fallbackLng: LOCALS.EN,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;