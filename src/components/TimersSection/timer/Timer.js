import React, { useEffect, useState } from 'react';
import './Timer.css';

const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    return `${hours}ч ${minutes}м ${seconds}с`;
};

const Timer = ({ name, color, icon , onDelete, onChangeTimerName}) => {
    const [timerStatus, setTimerStatus] = useState(false);
    const [timerSettingsStatus, setTimerSettingsStatus] = useState(false)
    const [time, setTime] = useState(0);
    const [intervals, setIntervals] = useState([]);

    const toggleTimerStatus = (event) => {
        if (!event.target.hasAttribute("data-no-toggle-Timer")) {
            setTimerStatus((timerStatus) => !timerStatus);
        }
    };

    const toggleSettingsStatus = () => {
        setTimerSettingsStatus((timerSettingsStatus) => !timerSettingsStatus);
    };

    useEffect(() => {
        let interval;

        if (timerStatus) {
            interval = setInterval(() => {
                setTime((time) => time + 1);
                console.log('время тикает');
            }, 1000);
        } else {
            clearInterval(interval);
            if (time > 0) {
                setIntervals((intervals) => [...intervals, time]);
                setTime(0);
            }
        }

        return () => {
            clearInterval(interval);
        };
    },[time, timerStatus]);

    const getContrastColor = (hexColor) => {
        if (!hexColor) return 'black';
        const [r, g, b] = hexColor.match(/\w\w/g).map((x) => parseInt(x, 16));
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness > 128 ? 'black' : 'white';
    };

    const deleteTimerInterval = (numOfInterval) => {
        setIntervals((intervals) => [
            ...intervals.slice(0, numOfInterval),
            ...intervals.slice(numOfInterval + 1),
        ]);
    };

    const deleteAllTimerIntervals = () => {
        setIntervals([]);
    }

    return (
        <div className={'timer-container'}>
            <div
                onClick={(event) => toggleTimerStatus(event)}
                className="timer"
                style={{
                    'backgroundColor': color ? color : '#ffffff',
                    'color': getContrastColor(color)}}>
                <div className={"timer-icon"}>{icon}</div>
                <div className="timer-name">{name}</div>
                <div className="timer-intervals">
                    {intervals.map((interval, index) => (
                        <div
                            className={'timer-interval'}
                            key={index}>
                            {formatTime(interval)}
                            <div
                              className={'delete-interval'}
                              data-no-toggle-timer
                              onClick={() => deleteTimerInterval(index)}
                            >
                              &times;
                            </div>
                        </div>
                    ))}
                </div>
                <div className="total-time">Суммарное время: {intervals[0] ? formatTime(intervals.reduce((a, b) => a+b)) : '0ч 0м 0c'}</div>
                <div className="current-time">Текущее время: {formatTime(time)}</div>
                <button data-no-toggle-timer
                        onClick={toggleSettingsStatus}>{timerSettingsStatus ? <>&times;</> : <>Редактировать таймер</>}</button>
            </div>
            <div className={timerSettingsStatus ? 'timer-settings-active' : 'timer-settings'}>
                <button
                    onClick={onChangeTimerName}
                    className={'timer-settings-btn'}>ред. название</button>
                <button onClick={onDelete}
                    className={'timer-settings-btn'}>удалить таймер</button>
                <button onClick={deleteAllTimerIntervals}
                    className={'timer-settings-btn'}>очистить интервалы</button>
            </div>
        </div>
    );
};

export default Timer;





