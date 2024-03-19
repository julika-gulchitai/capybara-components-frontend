import i18next from 'i18next';
import { useState } from 'react';
import { LOCALS } from '../../i18n/constants';
import { LanguageContainer } from './LanguageSwitcher.styled';

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);

  const changeLanguage = (language) => {
    i18next.changeLanguage(language);
    setCurrentLanguage(language);
  };
  return (
    <LanguageContainer>
      {/* <h2>{i18next.language}</h2> */}
      <button
        disabled={currentLanguage === LOCALS.UK}
        onClick={() => changeLanguage(LOCALS.UK)}
      >
        UK
      </button>
      <button
        disabled={currentLanguage === LOCALS.EN}
        onClick={() => changeLanguage(LOCALS.EN)}
      >
        EN
      </button>
    </LanguageContainer>
  );
};

export default LanguageSwitcher;
