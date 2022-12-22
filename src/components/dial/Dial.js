import './dial.css';

import React, { useRef, useState, useEffect } from 'react'; /* проверить использование */
import { ThemeContext } from '../../contexts/ThemeContext';

const Dial = (props) => {
  const theme = React.useContext(ThemeContext);
  
  const [useActiveStyle, setUseActiveStyle] = useState(false);

  const changeActiveStyle = (state) => {
    setUseActiveStyle(state);
  }
  
  return (
    <div className={`${props.timer ?
          (props.timerActive ?
            (theme === 'day' ? 'dial dial_status_work' : 'dial dial_dark dial_status_work dial_status_work_dark')
            :
            (theme === 'day' ? 'dial' : 'dial dial_dark'))
          :
          (props.timerActive ?
            (theme === 'day' ? 'dial dial_active' : 'dial dial_dark dial_active dial_active_dark')
            :
            (theme === 'day' ? 'dial' : 'dial dial_dark')
          )} ${useActiveStyle && 'dial_border-none'}`}
          onClick={switchButton}>
          <p className={props.timer ?
            (props.timerActive ?
              (theme === 'day' ? 'dial__text dial__text_status_work' : 'dial__text dial__text_dark dial__text_status_workdial__text_status_work_dark')
              :
              (theme === 'day' ? 'dial__text' : 'dial__text dial__text_dark'))
            :
            (theme === 'day' ? 'dial__text' : 'dial__text dial__text_dark')}
            onMouseOver={() => changeActiveStyle(!useActiveStyle)}
            onMouseLeave={() => changeActiveStyle(!useActiveStyle)}>
            {`${props.timeCount.minutes}:${props.timeCount.seconds}`}
          </p>
        </div>
  )
}

export default Dial;
