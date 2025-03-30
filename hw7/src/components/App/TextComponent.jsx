import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';


const TextComponent = () => {
    const { currentLanguageData } = useContext(LanguageContext);

    return (
    <div>
        <h1 className="language-text">{currentLanguageData.text}</h1>
        <p>{currentLanguageData.selectLanguage}</p>
    </div>
    );
};

export default TextComponent;

