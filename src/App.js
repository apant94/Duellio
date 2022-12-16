import { useState } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import Header from './components/header/Header';
import Clock from './components/clock/Clock';

function App() {

  const [useTheme, setUseTheme] = useState('day');
  
  const [newYear, setNewYear] = useState(false);

  const [newYearImage, setNewYearImage] = useState('https://placepic.ru/wp-content/uploads/2018/11/97973bb5bf0097378fb0860159ddbb0d.jpg')

  const [inputNewYear, setInputNewYear] = useState('');

  const changeTheme = (theme) => {
    setUseTheme(theme);
  }

  const newYearTheme = (theme) => {
    setNewYear(theme);
  }

  const listenButton = (e, text) => {
    
    if(e.key === 'Enter') {
      setInputNewYear(text.current.value);
      setNewYearImage(inputNewYear)
    }
  }

  return (
    <div className={useTheme === 'day' ? newYear ? 'App App_new-year': 'App' : newYear ? 'App App_dark App_new-year': 'App App_dark'} style= {newYear ? {'backgroundImage': `url(${newYearImage})`} : {'backgroundImage': `url('')`}}>
      <ThemeContext.Provider value={useTheme}>
        <Header />
        <Clock changeTheme={changeTheme} newYearTheme={newYearTheme} newYear={newYear} listenButton={listenButton}/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
