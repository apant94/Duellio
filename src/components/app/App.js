import './app.css';

import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ThemeContext } from '../../contexts/ThemeContext';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Clock from '../clock/Clock';
import Cases from '../cases/Сases';
import CasePage from '../casePage/CasePage';
import Rules from '../rules/Rules';

import useSound from 'use-sound'; // импорт звуков
import endingSound from '../../sounds/Jukianas_club_timer_15_sec_2.mp3';
import PageNotFound from '../pageNotFound/PageNotFound';


function App() {

  const [useTheme, setUseTheme] = useState('day');

  const [inputState, setInputState] = useState(false);

  const [useTimer, setUseTimer] = useState(false); // state ативности часов

  const [useTimeLeft, setUseTimeLeft] = useState(240); // state значения таймера
  const [useTimeRight, setUseTimeRight] = useState(240);

  const [useTimerLeftActive, setUseTimerLeftActive] = useState(true); // state активности циферблата
  const [useTimerRightActive, setUseTimerRightActive] = useState(false);

  const [useTimerSoundLeftStart, setUseTimerSoundLeftStart] = useState(false);
  const [useTimerSoundRightStart, setUseTimerSoundRightStart] = useState(false);

  const [playLeft, { pause: pauseOne }] = useSound(endingSound);
  const [playRight, { pause: pauseTwo }] = useSound(endingSound);

  useEffect(() => {
    if (useTimeLeft <= 0 && useTimerLeftActive) {
      changeTimerStart(false);
    }
    if (useTimeRight <= 0 && useTimerRightActive) {
      changeTimerStart(false);
    }
  }, [useTimeLeft, useTimeRight, useTimerLeftActive, useTimerRightActive])

  useEffect(() => {
    if (!useTimer) {
      pauseOne();
      pauseTwo();
    }
    else {
      if (useTimeLeft <= 14.5 && !useTimerSoundLeftStart) {
        setUseTimerSoundLeftStart(true);
      }
      if (useTimeRight <= 14.5 && !useTimerSoundRightStart) {
        setUseTimerSoundRightStart(true);
      }
    }
  }, [useTimeLeft, useTimeRight, useTimer, useTimerSoundLeftStart, useTimerSoundRightStart, pauseOne, pauseTwo]);

  useEffect(() => {
    if (useTimerSoundLeftStart && useTimer && useTimerLeftActive) {
      playLeft();
    }
    if (useTimerSoundRightStart && useTimer && useTimerRightActive) {
      playRight();
    }
  }, [playLeft, playRight, useTimer, useTimerLeftActive, useTimerRightActive, useTimerSoundLeftStart, useTimerSoundRightStart]);

  const changeTheme = (theme) => {
    setUseTheme(theme);
  }

  const changeInputStateClick = (bool) => {
    setInputState(bool);
  }

  const changeTimerActive = () => {
    if (useTimerLeftActive) {
      setUseTimerLeftActive(false);
      setUseTimerRightActive(true);
    }
    else {
      setUseTimerLeftActive(true);
      setUseTimerRightActive(false);
    }
  }

  const changeTimerActiveWithParams = (type) => {
    if (type === 'left') {
      setUseTimerLeftActive(true);
      setUseTimerRightActive(false);
    }
    else {
      setUseTimerLeftActive(false);
      setUseTimerRightActive(true);
    }
  }

  const timeChange = (timerPosition, time) => {
    if (timerPosition === 'left') {
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
    <div className={`${useTheme === 'day' ? 'app' : 'app app_dark'}`}
      style={
        ((useTimeLeft <= 5 && useTimerLeftActive) || (useTimeRight <= 5 && useTimerRightActive))
          && useTimer ? { animationPlayState: 'running' }
          :
          (useTheme === 'day' ? { background: '#F5F5F6', animationPlayState: 'paused' } : { animationPlayState: 'paused', background: '#2B2D33' })
      }
      onClick={() => changeInputStateClick(false)}>
      <ThemeContext.Provider value={useTheme}>

        <Header changeTheme={changeTheme} />

        <Routes>
          <Route path="/" element={
            <Clock
              changeTheme={changeTheme}
              timeChange={timeChange}
              useTimer={useTimer}
              changeTimerStart={changeTimerStart}

              useTimeLeft={useTimeLeft}
              useTimerLeftActive={useTimerLeftActive}
              useTimeRight={useTimeRight}
              useTimerRightActive={useTimerRightActive}
              changeTimerActive={changeTimerActive}
              changeTimerActiveWithParams={changeTimerActiveWithParams}

              inputStateActive={inputState}
              changeInputStateClick={changeInputStateClick} />
          } />
          <Route path="/rules" element={<Rules />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/casepage" element={<CasePage />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer />
        
      </ThemeContext.Provider>
    </div >
  );
}

export default App;
