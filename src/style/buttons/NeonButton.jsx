import React from "react";

const NeonButton = ({mainClass, btnStyle, btnText}) => {
    return (
        <button className={`${mainClass} ${btnStyle}`}>
            <span>{btnText}</span>
            <i></i>
        </button>
    )
};

export default NeonButton;