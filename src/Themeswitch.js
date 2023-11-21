import React, { useState } from 'react';

const ThemeSwitching = ({ themes }) => {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);

  const switchTheme = () => {
    const nextThemeIndex = (currentThemeIndex + 1) % themes.length;
    setCurrentThemeIndex(nextThemeIndex);
  };

  const currentTheme = themes[currentThemeIndex];

  return (
    <div style={{ backgroundColor: currentTheme.background, color: currentTheme.text, margin: '0px', padding: '25%', textAlign: 'center', }}>
      <button onClick={switchTheme} style={{ backgroundColor: 'green', color: 'white', padding: '10px', borderRadius: '10px', borderWidth: '0px'}}>Change BackgroundColor</button>
    </div>
  );
};

const App = () => {
  const themes = [
    { background: '#3cb371', },
    { background: '#ee82ee', },
    { background: '#ff6347', },
  ];

  return <ThemeSwitching themes={themes} />;
};

export default App;