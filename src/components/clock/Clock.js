import React, { useState, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import './clock.css';

const Clock = () => {

  const theme = React.useContext(ThemeContext); /* тема - прописать дальше */

  const [useChange, setUseChange] = useState(4);

  const [useTime, setUseTime] = useState(4*60);

  const [useTimer, setUseTimer] = useState(false);

  let timer;

  useEffect(() => {
    if(useTimer === true && useTime > 0) {
      const interval = setInterval(() => setUseTime(useTime => useTime - 1), 1000);
      return () => clearInterval(interval);
    }
}, [useTimer, useTime]);

  const changeState = (change) => {
    setUseChange(change);
    if(change === 4) {
      setUseTime(4*60);
    }
    else {
      setUseTime(1*60);
    }
  }

  const changeTime = () => {
    setUseTime(useTime - 1)
  }

  const start = () => {
    if(!useTimer) {
      /*timer = setInterval(changeTime, 1000);*/
    }
    setUseTimer(true);
  }

  return (
    <div className='clock'>
      <input maxLength='20' placeholder='player 1' className='clock__input'/>
      <input maxLength='20' placeholder='player 2' className='clock__input'/>
      <div className='clock__dial'>
        <p className='clock__dia_text'>{`${Math.trunc(useTime/60)}:${useTime - Math.trunc(useTime/60)*60}`}</p>
      </div>
      <div className='clock__dial'>
        <p className='clock__dia_text'>{`${Math.trunc(useTime/60)}:${useTime - Math.trunc(useTime/60)*60}`}</p>
      </div>
      <button className='clock__button-main clock__button-main_active' onClick={start}>start</button>
      <button className='clock__button-main'>switch</button>
      <button className={useChange === 1 ? 'clock__button-mini clock__button-mini_active clock__button-mini_position_left' : 'clock__button-mini clock__button-mini_position_left'} onClick={() => changeState(1)}>1 min</button>
      <button className={useChange === 4 ? 'clock__button-mini clock__button-mini_active' : 'clock__button-mini'} onClick={() => changeState(4)}>4 min</button>
      <button className='clock__button-mini clock__button-mini_image_desktop'></button>
      <button className='clock__button-mini clock__button-mini_image_dark-mode clock__button-mini_position_right'></button>
    </div>
  )
}

export default Clock;