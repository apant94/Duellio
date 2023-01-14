import './app.css';

import { useState, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import Header from '../header/Header';
import Clock from '../clock/Clock';

import useSound from 'use-sound'; // импорт звуков
import endingSound from '../../sounds/Jukianas_club_timer_15_sec_2.mp3';

function App() {

  const [useTheme, setUseTheme] = useState('day');

  const [inputState, setInputState] = useState(false);

  const [useTimer, setUseTimer] = useState(false); // state ативности часов

  const [useTimeLeft, setUseTimeLeft] = useState(240); // state значения таймера
  const [useTimeRight, setUseTimeRight] = useState(240);

  const [useTimerSoundLeftStart, setUseTimerSoundLeftStart] = useState(false);
  const [useTimerSoundRightStart, setUseTimerSoundRightStart] = useState(false);
  
  const [play] = useSound(endingSound);

  useEffect(() => {
    if(useTimeLeft <= 14.6 && !useTimerSoundLeftStart) {
      setUseTimerSoundLeftStart(true);
      play();
    }
    if(useTimeRight <= 14.5 && !useTimerSoundRightStart) {
      setUseTimerSoundRightStart(true);
      play();
    }
  }, [play, useTimeLeft, useTimeRight, useTimerSoundLeftStart, useTimerSoundRightStart])

  const changeTheme = (theme) => {
    setUseTheme(theme);
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

  const changeTimerStart = (bool) => {
    setUseTimer(bool)
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
          useTimer={useTimer}
          changeTimerStart={changeTimerStart}
          useTimeLeft={useTimeLeft}
          useTimeRight={useTimeRight}
          inputStateActive={inputState}
          changeInputStateClick={changeInputStateClick}/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
