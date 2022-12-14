import { useState } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import Header from './components/header/Header';
import Clock from './components/clock/Clock';

function App() {

  const [useTheme, setUseTheme] = useState('day');
  
  const changeTheme = (theme) => {
    setUseTheme(theme)
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={useTheme}>
        <Header />
        <Clock changeTheme={changeTheme}/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
