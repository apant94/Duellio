import './clock.css';

import React, { useState, useEffect } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import Dial from '../dial/Dial';

const Clock = (props) => {
  const theme = React.useContext(ThemeContext);

  const [useTimeLeftCount, setUseTimeLeftCount] = useState({
    minutes: '4',
    seconds: '00',
  }); // state посчитанного значения
  const [useTimeRightCount, setUseTimeRightCount] = useState({
    minutes: '4',
    seconds: '00',
  });

  const [useTimerAllInputValue, setUseTimerAllInputValue] = useState('4:00');
  // -----
  const handleChangeValueAllInput = (value) => {
    setUseTimerAllInputValue(value);
  };

  // -----
  useEffect(() => {
    // поднять данный хук в апп
    if (props.useTimer === true) {
      if (props.useTimerLeftActive && props.useTimeLeft > 0) {
        const interval = setInterval(
          () =>
            setUseTimeLeftCount(() => {
              props.timeChange('left', props.useTimeLeft - 0.1);
              return countClock(props.useTimeLeft);
            }),
          100
        );
        return () => clearInterval(interval);
      } else if (props.useTimerRightActive && props.useTimeRight > 0) {
        const interval = setInterval(
          () =>
            setUseTimeRightCount(() => {
              props.timeChange('right', props.useTimeRight - 0.1);
              return countClock(props.useTimeRight);
            }),
          100
        );
        return () => clearInterval(interval);
      }
    }
  }, [props]);

  const countClock = (time) => {
    let minutes = Math.trunc(time / 60);
    let seconds = Math.trunc(time - Math.trunc(time / 60) * 60);
    if (String(seconds).length !== 2) {
      seconds = '0' + seconds;
    }
    return { minutes: minutes, seconds: seconds };
  };

  const changeButtonTime = (change) => {
    props.changeTimerStart(false);
    if (change === 4) {
      props.timeChange('left', 240);
      props.timeChange('right', 240);
      setUseTimeLeftCount(countClock(240));
      setUseTimeRightCount(countClock(240));

      setUseTimerAllInputValue('4:00');
    } else {
      props.timeChange('left', 60);
      props.timeChange('right', 60);
      setUseTimeLeftCount(countClock(60));
      setUseTimeRightCount(countClock(60));

      setUseTimerAllInputValue('1:00');
    }
  };

  const startButton = () => {
    if (props.inputStateActive) {
      setTheTime(useTimerAllInputValue);
    }
    props.changeTimerStart(!props.useTimer);
  };

  const switchButton = () => {
    if (props.inputStateActive) {
      setTheTime(useTimerAllInputValue);
    }
    props.changeTimerStart(false);
    props.changeTimerActive();
  };

  const choiceDial = (e, type) => {
    e.stopPropagation();
    props.changeTimerStart(false);
    props.changeTimerActiveWithParams(type);
  };

  const themeButtonChange = () => {
    if (theme === 'day') {
      props.changeTheme('night');
    } else {
      props.changeTheme('day');
    }
  };

  const setTheTime = (time) => {
    let obj;

    if (typeof time === 'object') {
      obj = time[0].split(':');
    } else obj = time.split(':');

    const checkMinute = Number(obj[0]);
    const checkSecond = Number(obj[1]);

    props.timeChange('left', checkMinute * 60 + checkSecond);
    props.timeChange('right', checkMinute * 60 + checkSecond);
    setUseTimeLeftCount(countClock(checkMinute * 60 + checkSecond));
    setUseTimeRightCount(countClock(checkMinute * 60 + checkSecond));
  };

  //---------------------------------------------------------------
  /* input player */
  const [placeholderOne, setPlaceholderOne] = useState('Player 1');
  const [valueOne, setValueOne] = useState('');
  const changeValueOne = (text) => {
    setValueOne(text);
  };

  const [placeholderTwo, setPlaceholderTwo] = useState('Player 2');
  const [valueTwo, setValueTwo] = useState('');
  const changeValueTwo = (text) => {
    setValueTwo(text);
  };

  const [inputPlayerOne, setInputPlayerOne] = useState(false);
  const writePlayerOne = () => {
    setInputPlayerOne(true);
  };

  const onKeyEnterOne = (e) => {
    if (e.key === 'Enter') {
      setValueOne(editingText(valueOne));
      setInputPlayerOne(false);
    }
  };

  const [inputPlayerTwo, setInputPlayerTwo] = useState(false);
  const writePlayerTwo = () => {
    setInputPlayerTwo(true);
  };

  const onKeyEnterTwo = (e) => {
    if (e.key === 'Enter') {
      setValueTwo(editingText(valueTwo));
      setInputPlayerTwo(false);
    }
  };

  const editingText = (text) => {
    return text.trim();
  };
  //---------------------------------------------------------------

  return (
    <section
      className={
        theme === 'day'
          ? props.useTimeLeft > 5
            ? 'clock'
            : 'clock '
          : 'clock clock_dark'
      }
    >
      <div className="clock__container-date">
        {
          /* прописать ширину инпутов зависящую от ширины экрана / второй текст(2-х этажный) */
          inputPlayerOne ? (
            <input
              maxLength="20"
              placeholder={placeholderOne}
              value={valueOne}
              className={
                theme === 'day'
                  ? 'clock__input clock__input_one'
                  : 'clock__input clock__input_one clock__input_dark'
              }
              // style={{
              //   width:
              //     valueOne.length < placeholderOne.length
              //       ? (placeholderOne.length + 1) * 15 + 'px'
              //       : (valueOne.length + 1) * 15 + 'px',
              // }}
              onChange={(e) => changeValueOne(e.target.value)}
              onKeyDown={(e) => onKeyEnterOne(e)}
            />
          ) : (
            <p
              className={
                theme === 'day'
                  ? 'clock__input clock__input_one'
                  : 'clock__input clock__input_one clock__input_dark'
              }
              // style={{
              //   width:
              //     valueOne.length < placeholderOne.length
              //       ? (placeholderOne.length + 1) * 15 + 'px'
              //       : (valueOne.length + 1) * 15 + 'px',
              // }}
              onDoubleClick={writePlayerOne}
            >
              {valueOne.length === 0 ? placeholderOne : valueOne}
            </p>
          )
        }
        {inputPlayerTwo ? (
          <input
            maxLength="20"
            placeholder={placeholderTwo}
            value={valueTwo}
            className={
              theme === 'day'
                ? 'clock__input clock__input_two'
                : 'clock__input clock__input_two clock__input_dark'
            }
            // style={{
            //   width:
            //     valueTwo.length < placeholderTwo.length
            //       ? (placeholderTwo.length + 1) * 15 + 'px'
            //       : (valueTwo.length + 1) * 15 + 'px',
            // }}
            onChange={(e) => changeValueTwo(e.target.value)}
            onKeyDown={(e) => onKeyEnterTwo(e)}
          />
        ) : (
          <p
            className={
              theme === 'day'
                ? 'clock__input clock__input_two'
                : 'clock__input clock__input_two clock__input_dark'
            }
            // style={{
            //   width:
            //     valueTwo.length < placeholderTwo.length
            //       ? (placeholderTwo.length + 1) * 15 + 'px'
            //       : (valueTwo.length + 1) * 15 + 'px',
            // }}
            onDoubleClick={writePlayerTwo}
          >
            {valueTwo.length === 0 ? placeholderTwo : valueTwo}
          </p>
        )}
        <Dial
          timer={props.useTimer}
          timerActive={props.useTimerLeftActive}
          timeCount={useTimeLeftCount}
          useTimeLeft={props.useTimeLeft}
          modifier="left"
          choice={choiceDial}
          setTheTime={setTheTime}
          inputStateActive={props.inputStateActive}
          changeInputStateClick={props.changeInputStateClick}
          handleChangeValueAllInput={handleChangeValueAllInput}
        />
        <Dial
          timer={props.useTimer}
          timerActive={props.useTimerRightActive}
          timeCount={useTimeRightCount}
          useTimeRight={props.useTimeRight}
          modifier="right"
          choice={choiceDial}
          setTheTime={setTheTime}
          inputStateActive={props.inputStateActive}
          changeInputStateClick={props.changeInputStateClick}
          handleChangeValueAllInput={handleChangeValueAllInput}
        />
      </div>
      <div className="clock__container-button">
        <button
          className={
            props.useTimer
              ? theme === 'day'
                ? 'clock__button-main'
                : 'clock__button-main clock__button-main_dark'
              : theme === 'day'
              ? 'clock__button-main clock__button-main_active'
              : 'clock__button-main clock__button-main_dark clock__button-main_active clock__button-main_active_dark'
          }
          onClick={startButton}
          disabled={
            (props.useTimeLeft <= 0 &&
              props.useTimerLeftActive === true &&
              true) ||
            (props.useTimeRight <= 0 &&
              props.useTimerRightActive === true &&
              true)
          }
        >
          {props.useTimer ? 'stop' : 'start'}
        </button>
        <button
          className={
            theme === 'day'
              ? 'clock__button-main'
              : 'clock__button-main clock__button-main_dark'
          }
          onClick={switchButton}
        >
          switch
        </button>
        <button
          className={
            theme === 'day'
              ? 'clock__button-mini'
              : 'clock__button-mini clock__button-mini_dark'
          }
          onClick={() => changeButtonTime(1)}
        >
          1 min
        </button>
        <button
          className={
            theme === 'day'
              ? 'clock__button-mini'
              : 'clock__button-mini clock__button-mini_dark'
          }
          onClick={() => changeButtonTime(4)}
        >
          4 min
        </button>
        <button
          className={
            theme === 'day'
              ? 'clock__button-mini'
              : 'clock__button-mini clock__button-mini_dark'
          }
        >
          set
        </button>
      </div>
    </section>
  );
};

export default Clock;
