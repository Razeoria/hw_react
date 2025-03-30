import React from 'react';
import { LanguageProvider } from '../../context/LanguageContext';
import TextComponent from './TextComponent';
import LanguageSwitcher from './LanguageSwitcher';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <TextComponent />
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
}

export default App;


