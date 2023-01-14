import './app.css';

import { useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Header from '../header/Header';
import Clock from '../clock/Clock';

function App() {

  const [useTheme, setUseTheme] = useState('day');

  const [inputState, setInputState] = useState(false);

  const [useTimeLeft, setUseTimeLeft] = useState(240); // state значения таймера
  const [useTimeRight, setUseTimeRight] = useState(240);

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

  const timeChange = (timerPosition, time) => {
    if(timerPosition === 'left') {
      setUseTimeLeft(time);
    }
    else {
      setUseTimeRight(time);
    }
  }

  return (
    <div className={`
    ${useTheme === 'day' ? 'app' : 'app app_dark'}`}
    onClick={() => changeInputStateClick(false)}>
      <ThemeContext.Provider value={useTheme}>
        <Header />
        <Clock
          changeTheme={changeTheme}
          timeChange={timeChange}
          useTimeLeft={useTimeLeft}
          useTimeRight={useTimeRight}
          changeAnimationDay={changeAnimationDay}
          inputStateActive={inputState}
          changeInputStateClick={changeInputStateClick}/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
