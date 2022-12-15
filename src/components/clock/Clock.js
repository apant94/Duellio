import React, { useState, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './clock.css';

const Clock = (props) => {

  const theme = React.useContext(ThemeContext);

  const [useTimeLeft, setUseTimeLeft] = useState(240); // state значения
  const [useTimeRight, setUseTimeRight] = useState(240);

  const [useTimerLeftActive, setUseTimerLeftActive] = useState(true); // state активности циферблата
  const [useTimerRightActive, setUseTimerRightActive] = useState(false);

  const [useTimer, setUseTimer] = useState(false); // state ативности часов

  const [useChange, setUseChange] = useState(4);

  useEffect(() => {
    if (useTimer === true && useTimeLeft > 0 && useTimeRight > 0) {
      if (useTimerLeftActive) {
        const interval = setInterval(() => setUseTimeLeft(useTimeLeft => useTimeLeft - 1), 1000);
        return () => clearInterval(interval);
      }
      else if (useTimerRightActive) {
        const interval = setInterval(() => setUseTimeRight(useTimeRight => useTimeRight - 1), 1000);
        return () => clearInterval(interval);
      }
    }
  }, [useTimer, useTimeLeft, useTimeRight, useTimerLeftActive, useTimerRightActive]);

  const changeButtonTime = (change) => {
    setUseChange(change);
    if (change === 4) {
      setUseTimeLeft(240);
      setUseTimeRight(240);
    }
    else {
      setUseTimeLeft(60);
      setUseTimeRight(60);
    }
  }

  const startButton = () => {
    setUseTimer(true);
  }

  const switchButton = () => {
    if(useTimerLeftActive){
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

  return (
    <div className={theme === 'day' ? 'clock' : 'clock clock_dark'}>
      <input maxLength='20' placeholder='player 1' className={theme === 'day' ? 'clock__input' : 'clock__input clock__input_dark'}/>
      <input maxLength='20' placeholder='player 2' className={theme === 'day' ? 'clock__input' : 'clock__input clock__input_dark'}/>
      <div className='clock__dial'>
        <p className='clock__dia_text'>
          {`${Math.trunc(useTimeLeft / 60)}:`}
          {useTimeLeft - Math.trunc(useTimeLeft / 60) * 60 <= 9 ? `0${useTimeLeft - Math.trunc(useTimeLeft / 60) * 60}` : `${useTimeLeft - Math.trunc(useTimeLeft / 60) * 60}`}
        </p>
      </div>
      <div className='clock__dial'>
        <p className='clock__dia_text'>
          {`${Math.trunc(useTimeRight / 60)}:`}
          {useTimeRight - Math.trunc(useTimeRight / 60) * 60 <= 9 ? `0${useTimeRight - Math.trunc(useTimeRight / 60) * 60}` : `${useTimeRight - Math.trunc(useTimeRight / 60) * 60}`}
        </p>
      </div>
      <button className='clock__button-main clock__button-main_active' onClick={startButton}>start</button>
      <button className='clock__button-main' onClick={switchButton}>switch</button>
      <button className={useChange === 1 ? 'clock__button-mini clock__button-mini_active clock__button-mini_position_left' : 'clock__button-mini clock__button-mini_position_left'} onClick={() => changeButtonTime(1)}>1 min</button>
      <button className={useChange === 4 ? 'clock__button-mini clock__button-mini_active' : 'clock__button-mini'} onClick={() => changeButtonTime(4)}>4 min</button>
      <button className='clock__button-mini clock__button-mini_image_desktop'></button>
      <button className='clock__button-mini clock__button-mini_image_dark-mode clock__button-mini_position_right' onClick={themeButtonChange}></button>
    </div>
  )
}

export default Clock;