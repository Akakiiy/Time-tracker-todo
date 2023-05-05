import React from 'react';
const Timer = (props) => {
    return (
        <div className={`${props.geometry} ${props.mainClass}`}
             style={{
                 backgroundColor: props.color,
             }}>
            <div className={props.geometry + 'Inner'}
                 style={{
                     color: props.colorText,
                 }}>
                <div>form : {props.geometry}</div>
                <div> name : {props.name}</div>
                <div>icon : {props.icon}</div>
            </div>
        </div>
    );
};

export default Timer;





