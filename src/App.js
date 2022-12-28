import { useState } from 'react';
import { ThemeContext } from './contexts/ThemeContext';
import Header from './components/header/Header';
import Clock from './components/clock/Clock';

function App() {

  const [useTheme, setUseTheme] = useState('day');

  const [inputState, setInputState] = useState(false);

  const [animationLeft, setAnimationLeft] = useState(false);//
  const [animationRight, setAnimationRight] = useState(false);//

  const changeTheme = (theme) => {
    setUseTheme(theme);
  }

  const changeAnimationDay = (dial, bool) => {
    if (dial === 'left') {
      setAnimationLeft(bool);
    }
    else {
      setAnimationRight(bool);
    }
  }

  const changeInputStateClick = (bool) => {
    setInputState(bool);
  }

  return (
    <div className={`
    ${useTheme === 'day' ? 'App' : 'App App_dark'}`}
    onClick={() => changeInputStateClick(false)}>
      <ThemeContext.Provider value={useTheme}>
        <Header />
        <Clock
          changeTheme={changeTheme}
          changeAnimationDay={changeAnimationDay}
          inputStateActive={inputState}
          changeInputStateClick={changeInputStateClick}/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
