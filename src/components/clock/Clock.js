import './clock.css';

import React, { useRef, useState, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import Dial from '../dial/Dial';

const Clock = (props) => {

  const theme = React.useContext(ThemeContext);

  const [useTimeLeft, setUseTimeLeft] = useState(240); // state значения
  const [useTimeRight, setUseTimeRight] = useState(240);

  const [useTimeLeftCount, setUseTimeLeftCount] = useState({ 'minutes': '4', 'seconds': '00' }); // state посчитанного значения
  const [useTimeRightCount, setUseTimeRightCount] = useState({ 'minutes': '4', 'seconds': '00' });

  const [useTimerLeftActive, setUseTimerLeftActive] = useState(true); // state активности циферблата
  const [useTimerRightActive, setUseTimerRightActive] = useState(false);

  const [useTimer, setUseTimer] = useState(false); // state ативности часов

  useEffect(() => {
    if (useTimer === true && useTimeLeft >= 0 && useTimeRight >= 0) {
      if (useTimerLeftActive) {
        const interval = setInterval(() => setUseTimeLeftCount(() => {
          setUseTimeLeft(useTimeLeft - 0.1);
          return countClock(useTimeLeft)
        }), 100);
        return () => clearInterval(interval);
      }
      else if (useTimerRightActive) {
        const interval = setInterval(() => setUseTimeRightCount(() => {
          setUseTimeRight(useTimeRight - 0.1);
          return countClock(useTimeRight)
        }), 100);
        return () => clearInterval(interval);
      }
    }
  }, [useTimer, useTimeLeft, useTimeRight, useTimerLeftActive, useTimerRightActive]);

  const countClock = (time) => {
    let minutes = Math.trunc(time / 60);
    let seconds = Math.trunc(time - Math.trunc(time / 60) * 60);
    if (String(seconds).length !== 2) {
      seconds = '0' + seconds;
    }
    return { 'minutes': minutes, 'seconds': seconds };
  }

  const changeButtonTime = (change) => {
    if (change === 4) {
      setUseTimeLeft(240);
      setUseTimeRight(240);
      setUseTimeLeftCount(countClock(240));
      setUseTimeRightCount(countClock(240));
    }
    else {
      setUseTimeLeft(60);
      setUseTimeRight(60);
      setUseTimeLeftCount(countClock(60));
      setUseTimeRightCount(countClock(60));
    }
  }

  const startButton = (bool) => {
    setUseTimer(bool);
  }

  const switchButton = () => {
    setUseTimer(false);
    if (useTimerLeftActive) {
      setUseTimerLeftActive(false);
      setUseTimerRightActive(true);
    }
    else {
      setUseTimerLeftActive(true);
      setUseTimerRightActive(false);
    }
  }

  const themeButtonChange = () => {
    if (theme === 'day') {
      props.changeTheme('night')
    }
    else {
      props.changeTheme('day')
    }
  }

  /**clock__end-animation */
  return (
    <section className={theme === 'day' ? (useTimeLeft > 5 ? 'clock' : 'clock ') : 'clock clock_dark'}>
      {/*props.newYear && 
        <input placeholder='Введите URL адрес до изображения' className={theme === 'day' ? 'clock__input clock__input_new-year' : 'clock__input clock__input_new-year clock__input_dark'} onKeyDown={(e) =>props.listenButton(e, inputRef)} ref={inputRef}/>
      */}
      <div className='clock__container-date'>
        <input maxLength='20' placeholder='Player 1' className={theme === 'day' ? 'clock__input' : 'clock__input clock__input_dark'} />
        <input maxLength='20' placeholder='Player 2' className={theme === 'day' ? 'clock__input' : 'clock__input clock__input_dark'} />
        {/*<div className={useTimerLeftActive ? useTimeLeft === 0 ? 'clock__dial clock__dial_active clock__dial-animation' : 'clock__dial clock__dial_active' : 'clock__dial'} onClick={switchButton} style={props.newYear ? { 'background': '#FFFFFF80' } : { 'background': '#FFFFFF' }}> */}
        <Dial timer={useTimer} timerActive={useTimerLeftActive} timeCount={useTimeLeftCount} />
        <Dial timer={useTimer} timerActive={useTimerRightActive} timeCount={useTimeRightCount} />
      </div>
      <div className='clock__container-button'>
        <button className={useTimer ?
          (theme === 'day' ? 'clock__button-main' : 'clock__button-main clock__button-main_dark')
          :
          (theme === 'day' ? 'clock__button-main clock__button-main_active' : 'clock__button-main clock__button-main_dark clock__button-main_active clock__button-main_active_dark')} onClick={() => startButton(!useTimer)}>{useTimer ? 'stop' : 'start'}</button>
        <button className={theme === 'day' ? 'clock__button-main' : 'clock__button-main clock__button-main_dark'} onClick={switchButton}>switch</button>
        <button className={theme === 'day' ? 'clock__button-mini' : 'clock__button-mini clock__button-mini_dark'} onClick={() => changeButtonTime(1)}>1 min</button>
        <button className={theme === 'day' ? 'clock__button-mini' : 'clock__button-mini clock__button-mini_dark'} onClick={() => changeButtonTime(4)}>4 min</button>
        <button className={theme === 'day' ? 'clock__button-mini' : 'clock__button-mini clock__button-mini_dark'}>set</button>
        <button className={theme === 'day' ? 'clock__button-mini clock__button-mini_image_moon' : 'clock__button-mini clock__button-mini_dark clock__button-mini_image_sun'} onClick={themeButtonChange}></button>
      </div>
    </section>
  )
}

export default Clock;
