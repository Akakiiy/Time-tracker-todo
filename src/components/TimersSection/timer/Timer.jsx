import s from './Timer.module.css'
import React from 'react';
const Timer = (props) => {
    return (
        <div className={`${s.timerWrapper} ${props.geometry} ${props.mainClass}`}
             style={{
                 backgroundColor: props.color,
             }}>
            <div className={`${s.timer} ${props.geometry}Inner`}
                 style={{
                     color: props.colorText,
                 }}>
                <div className={s.iconWrapper}>
                    <img className={s.icon} src={props.icon} alt="TimerIcon"/>
                </div>
                <div className={s.timerName}>
                    {props.name}
                </div>
            </div>
        </div>
    );
};
export default Timer;





