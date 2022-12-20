import React, { useRef, useState, useEffect } from 'react';
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

  const inputRef = useRef();


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

  const startButton = (bool) => {
    setUseTimer(bool);
  }

  const switchButton = () => {
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

  return (
    <section className={theme === 'day' ? 'clock' : 'clock clock_dark'}>
      {/*props.newYear && 
        <input placeholder='Введите URL адрес до изображения' className={theme === 'day' ? 'clock__input clock__input_new-year' : 'clock__input clock__input_new-year clock__input_dark'} onKeyDown={(e) =>props.listenButton(e, inputRef)} ref={inputRef}/>
      */}
      <div className='clock__container-date'>
        <input maxLength='20' placeholder='Player 1' className={theme === 'day' ? 'clock__input' : 'clock__input clock__input_dark'} />
        <input maxLength='20' placeholder='Player 2' className={theme === 'day' ? 'clock__input' : 'clock__input clock__input_dark'} />
        {/*<div className={useTimerLeftActive ? useTimeLeft === 0 ? 'clock__dial clock__dial_active clock__dial-animation' : 'clock__dial clock__dial_active' : 'clock__dial'} onClick={switchButton} style={props.newYear ? { 'background': '#FFFFFF80' } : { 'background': '#FFFFFF' }}> */}
        <div className={useTimer ?
          (useTimerLeftActive ?
            (theme === 'day' ? 'clock__dial clock__dial_status_work' : 'clock__dial clock__dial_dark clock__dial_status_work clock__dial_status_work_dark')
            :
            (theme === 'day' ? 'clock__dial' : 'clock__dial clock__dial_dark'))
          :
          (useTimerLeftActive ?
            (theme === 'day' ? 'clock__dial clock__dial_active' : 'clock__dial clock__dial_dark clock__dial_active clock__dial_active_dark')
            :
            (theme === 'day' ? 'clock__dial' : 'clock__dial clock__dial_dark')
          )}
          onClick={switchButton}>
          <p className={useTimer ?
            (useTimerLeftActive ?
              (theme === 'day' ? 'clock__dia-text clock__dia-text_status_work' : 'clock__dia-text clock__dia-text_dark clock__dia-text_status_work clock__dia-text_status_work_dark')
              :
              (theme === 'day' ? 'clock__dia-text' : 'clock__dia-text clock__dia-text_dark'))
            :
            (theme === 'day' ? 'clock__dia-text' : 'clock__dia-text clock__dia-text_dark')}>
            {`${Math.trunc(useTimeLeft / 60)}:`}
            {useTimeLeft - Math.trunc(useTimeLeft / 60) * 60 <= 9 ? `0${useTimeLeft - Math.trunc(useTimeLeft / 60) * 60}` : `${useTimeLeft - Math.trunc(useTimeLeft / 60) * 60}`}
          </p>
        </div>
        <div className={useTimer ?
          (useTimerRightActive ?
            (theme === 'day' ? 'clock__dial clock__dial_status_work' : 'clock__dial clock__dial_dark clock__dial_status_work clock__dial_status_work_dark')
            :
            (theme === 'day' ? 'clock__dial' : 'clock__dial clock__dial_dark'))
          :
          (useTimerRightActive ?
            (theme === 'day' ? 'clock__dial clock__dial_active' : 'clock__dial clock__dial_dark clock__dial_active clock__dial_active_dark')
            :
            (theme === 'day' ? 'clock__dial' : 'clock__dial clock__dial_dark')
          )}
          onClick={switchButton}>
          <p className={useTimer ?
            (useTimerRightActive ?
              (theme === 'day' ? 'clock__dia-text clock__dia-text_status_work' : 'clock__dia-text clock__dia-text_dark clock__dia-text_status_work clock__dia-text_status_work_dark')
              :
              (theme === 'day' ? 'clock__dia-text' : 'clock__dia-text clock__dia-text_dark'))
            :
            (theme === 'day' ? 'clock__dia-text' : 'clock__dia-text clock__dia-text_dark')}>
            {`${Math.trunc(useTimeRight / 60)}:`}
            {useTimeRight - Math.trunc(useTimeRight / 60) * 60 <= 9 ? `0${useTimeRight - Math.trunc(useTimeRight / 60) * 60}` : `${useTimeRight - Math.trunc(useTimeRight / 60) * 60}`}
          </p>
        </div>
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