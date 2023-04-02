import React from 'react';
import './Timer.css';

const Timer = ({ name, intervals, totalTime }) => {
    return (
        <div className="timer">
            <div className="timer-name">{name}</div>
            <div className="timer-intervals">
                {intervals.map((interval, index) => (
                    <div key={index}>
                        Интервал {index + 1}: {interval.start} - {interval.end} ({interval.duration} часа)
                    </div>
                ))}
            </div>
            <div className="total-time">Суммарное время: {totalTime} часа</div>
        </div>
    );
};

export default Timer;