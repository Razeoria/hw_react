import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import textsForLanguages from '../../data/textsForLanguages.js';


const LanguageSwitcher = () => {
    const { switchLanguage, currentLanguageData } = useContext(LanguageContext);

    return (
        <div>
        <select
            onChange={(e) => switchLanguage(e.target.value)}
            value={currentLanguageData.language}
            className="language-select"
        >
            {Object.entries(currentLanguageData.languages).map(([key, value]) => (
            <option key={key} value={key}>
                {value}
            </option>
            ))}
        </select>
        </div>
    );
};

export default LanguageSwitcher;
