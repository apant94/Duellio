import { useState } from 'react';
import './clock.css';

const Clock = () => {

  const [useChange, setUseChange] = useState(1);

  const changeState = (change) => {
    setUseChange(change)
  }

  return (
    <div className='clock'>
      <input defaultValue={'player 1'} className='clock__input'/>
      <input defaultValue={'player 2'} className='clock__input'/>
      <div className='clock__dial'>
        <p className='clock__dia_text'>4:00</p>
      </div>
      <div className='clock__dial'>
        <p className='clock__dia_text'>4:00</p>
      </div>
      <button className='clock__button-main'>start</button>
      <button className={useChange === 0 ? 'clock__button-average clock__button-average_active clock__button-average_position_left' : 'clock__button-average clock__button-average_position_left'} onClick={() => changeState(0)}>1 min</button>
      <button className={useChange === 1 ? 'clock__button-average clock__button-average_active' : 'clock__button-average'} onClick={() => changeState(1)}>4 min</button>
      <button className={useChange === 2 ? 'clock__button-average clock__button-average_active clock__button-average_position_right' : 'clock__button-average clock__button-average_position_right'} onClick={() => changeState(2)}>set</button>
      <button className='clock__button-mini clock__button-mini_image_pause clock__button-mini_position_left'></button>
      <button className='clock__button-mini clock__button-mini_image_repeat'></button>
      <button className='clock__button-mini clock__button-mini_image_settings'></button>
      <button className='clock__button-mini clock__button-mini_image_dark-mode clock__button-mini_position_right'></button>
    </div>
  )
}

export default Clock;