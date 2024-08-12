import { createContext, useContext, useState } from "react";

const TranslateContext = createContext();

export const useTranslate = () => {
  return useContext(TranslateContext);
};

export function TranslateProvider({ children }) {
  const [lang, setLang] = useState("en");
  const TranslatedString = {
    en: {
      greeting: "Hello!",
      welcome: "Welcome To My App",
    },
    es: {
      greeting: "Hola Mundo!",
      welcome: "Bienvenido a mi aplicacion",
    },
  };

  const translate = (key) => {
    return TranslatedString[lang][key];
  };

  return (
    <TranslateContext.Provider value={{ lang, setLang, translate }}>
      {children}
    </TranslateContext.Provider>
  );
}
