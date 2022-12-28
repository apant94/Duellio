import './dial.css';

import React, { useState, useRef, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const Dial = (props) => {
  const theme = React.useContext(ThemeContext);

  const [inputValue, setInputValue] = useState(`${props.timeCount.minutes}:${props.timeCount.seconds}`);

  const [field, setField] = useState(false);

  const [useActiveStyle, setUseActiveStyle] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    setInputValue(`${props.timeCount.minutes}:${props.timeCount.seconds}`);
  }, [props.timeCount.minutes, props.timeCount.seconds])

  const handleClickText = () => {
    console.log(props.inputStateActive);
    props.changeInputStateClick(true);
    ref.current.focus();
    const textObj = ref.current.value.split(':')
    ref.current.setSelectionRange(0, textObj[0].length);
  };

  const changeInputValue = (e) => {
    const regex = /\d{0,2}:\d{0,2}/;
    if(e.target.value.match(regex)) {
      setInputValue(e.target.value.match(regex));
      props.handleChangeValueAllInput(e.target.value.match(regex));
    }
  }

  const onKeyEnter = (e) => {
    if(e.key === 'Enter') {
      props.setTheTime(inputValue);
      props.changeInputStateClick(false);
    }
  }

  const changeField = (bool) => {
    /*if(bool) {
      changeActiveStyle(!useActiveStyle);
    }
    setField(bool);*/
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
      onClick={(e) => props.choice(e, props.modifier)}
      onMouseLeave={() => changeField(false)}>
      {/*!field ?
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
          onDoubleClick={() => {changeField(true); handleClickText()}}>
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
          ${(theme === 'day' ? 'dial__text_view_day-hover' : 'dial__text_view_dark-hover')}`}
          {/*style={{ width: (6 + 1) * 33 + 'px', textAlign: 'center' }}
          value={inputValue}
          ref={ref}
          onChange={(e) => changeInputValue(e)}
          onKeyDown={(e) => onKeyEnter(e)}
          }
          {/*onFocus={(e) => handleFocus(e)}/>
      */}
        <p className={`${props.timer ?
          (props.timerActive ?
            (theme === 'day' ? 'dial__text dial__text_status_work' : 'dial__text dial__text_status_work_dark')
            :
            (theme === 'day' ? 'dial__text' : 'dial__text dial__text_view_dark'))
          :
          (theme === 'day' ? 'dial__text' : 'dial__text text dial__text_view_dark')}
          ${useActiveStyle && !props.timer && (theme === 'day' ? 'dial__text_view_day-hover' : 'dial__text_view_dark-hover')}`}
          style={props.timerActive ? (props.inputStateActive ? {zIndex: '-5'} :  {zIndex: '5'})
          :
          (props.inputStateActive ? {zIndex: '5'} :  {zIndex: '5'})
          }
          onMouseOver={() => changeActiveStyle(!useActiveStyle)}
          onMouseLeave={() => changeActiveStyle(!useActiveStyle)}
          onDoubleClick={handleClickText}>
          {`${props.timeCount.minutes}:${props.timeCount.seconds}`}
        </p>
        <input className={`${props.timer ?
          (props.timerActive ?
            (theme === 'day' ? 'dial__text dial__text_status_work' : 'dial__text dial__text_status_work_dark')
            :
            (theme === 'day' ? 'dial__text' : 'dial__text dial__text_view_dark'))
          :
          (theme === 'day' ? 'dial__text' : 'dial__text text dial__text_view_dark')}
          ${(theme === 'day' ? 'dial__text_view_day-hover' : 'dial__text_view_dark-hover')}`}
          style={props.timerActive && props.inputStateActive ? {zIndex: '5',  width: (5 + ref.current.value.split(':')[0].length) * 33 + 'px', textAlign: 'center' } : {zIndex: '-5',  width: (6 + 1) * 33 + 'px', textAlign: 'center' }}
          value={inputValue}
          ref={ref}
          onChange={(e) => changeInputValue(e)}
          onKeyDown={(e) => onKeyEnter(e)}/>
    </div>
  )
}

export default Dial;
