import React, { createContext, useState } from 'react';
import textsForLanguages from '../data/textsForLanguages.js';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [currentLang, setCurrentLang] = useState('english');

    const currentLanguageData = textsForLanguages.find(
        (item) => item.language === currentLang
    );

    const switchLanguage = (lang) => {
        setCurrentLang(lang);
    };

    return (
        <LanguageContext.Provider
        value={{ currentLang, switchLanguage, currentLanguageData }}
        >
        {children}
        </LanguageContext.Provider>
    );
};
