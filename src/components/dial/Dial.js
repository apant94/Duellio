import './dial.css';

import React, { useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const Dial = (props) => {
  const theme = React.useContext(ThemeContext);

  const [inputValue, setInputValue] = useState(`00:00`);

  const [field, setField] = useState(false);

  const [useActiveStyle, setUseActiveStyle] = useState(false);

  const changeInputValue = (e) => {
    const regex = /\d{0,2}:\d{0,2}/;
    if(e.target.value.match(regex))
      setInputValue(e.target.value.match(regex));
  }

  const onKeyEnter = (e) => {
    if(e.key === 'Enter') {
      props.setTheTime(inputValue);
    }
  }

  const changeField = (bool) => {
    if(bool) {
      changeActiveStyle(!useActiveStyle);
    }
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
      onClick={() => props.choice(props.modifier)}
      onMouseLeave={() => changeField(false)}>
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
          ${/*useActiveStyle && !props.timer && */(theme === 'day' ? 'dial__text_view_day-hover' : 'dial__text_view_dark-hover')}`}
          style={{ width: (6 + 1) * 33 + 'px', textAlign: 'center' }}
          value={inputValue}
          onChange={(e) => changeInputValue(e)}
          onKeyDown={(e) => onKeyEnter(e)}
          onMouseOver={() => {/*changeActiveStyle(!useActiveStyle)*/}}
          onMouseLeave={() => {/*changeActiveStyle(!useActiveStyle)*/}}/>
      }
    </div>
  )
}

export default Dial;
