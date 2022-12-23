import './dial.css';

import React, { useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const Dial = (props) => {
  const theme = React.useContext(ThemeContext);

  const [inputValue, setInputValue] = useState(`${props.timeCount.minutes}:${props.timeCount.seconds}`);

  const [field, setField] = useState(false);

  const [useActiveStyle, setUseActiveStyle] = useState(false);

  const changeInputValue = (text) => {
    if(text.length <=5)
      setInputValue(text);
  }

  const changeField = (bool) => {
    setField(bool);
  }

  const changeActiveStyle = (state) => {
    setUseActiveStyle(state);
  }

  return (
    <div className={`${props.timer ?
      (props.timerActive ?
        (theme === 'day' ? 'dial dial_status_work' : 'dial dial_view_dark dial_status_work dial_status_work_dark')
        :
        (theme === 'day' ? 'dial' : 'dial dial_view_dark'))
      :
      (props.timerActive ?
        (theme === 'day' ? 'dial dial_active' : 'dial dial_view_dark dial_active dial_active_dark')
        :
        (theme === 'day' ? 'dial' : 'dial dial_view_dark')
      )} ${useActiveStyle && !props.timer && (theme === 'day' ? 'dial_view_day-hover' : 'dial_view_dark-hover')}`}
      onClick={() => props.choice(props.modifier)}>
      {!field ?
        <p className={`${props.timer ?
          (props.timerActive ?
            (theme === 'day' ? 'dial__text dial__text_status_work' : 'dial__text dial__text_status_work_dark')
            :
            (theme === 'day' ? 'dial__text' : 'dial__text dial__text_view_dark'))
          :
          (theme === 'day' ? 'dial__text' : 'dial__text text dial__text_view_dark')}
          ${useActiveStyle && !props.timer && (theme === 'day' ? 'dial__text_view_day-hover' : 'dial__text_view_dark-hover')}`}
          onMouseOver={() => changeActiveStyle(!useActiveStyle)}
          onMouseLeave={() => changeActiveStyle(!useActiveStyle)}
          onDoubleClick={() => changeField(true)}>
          {`${props.timeCount.minutes}:${props.timeCount.seconds}`}
        </p>
        :
        <input className={`${props.timer ?
          (props.timerActive ?
            (theme === 'day' ? 'dial__text dial__text_status_work' : 'dial__text dial__text_status_work_dark')
            :
            (theme === 'day' ? 'dial__text' : 'dial__text dial__text_view_dark'))
          :
          (theme === 'day' ? 'dial__text' : 'dial__text text dial__text_view_dark')}
          ${useActiveStyle && !props.timer && (theme === 'day' ? 'dial__text_view_day-hover' : 'dial__text_view_dark-hover')}`}
          style={{ width: (inputValue.length + 1) * 33 + 'px' }}
          value={inputValue}
          onChange={(e) => changeInputValue(e.target.value)}
          onMouseOver={() => changeActiveStyle(!useActiveStyle)}
          onMouseLeave={() => {changeActiveStyle(!useActiveStyle); changeField(false)}}/>
      }
    </div>
  )
}

export default Dial;
