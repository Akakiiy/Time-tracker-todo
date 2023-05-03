import React from "react";

const NeonButton = ({mainClass, btnStyle, btnText, onClick}) => {
    return (
        <button className={`${mainClass} ${btnStyle}`}
                onClick={onClick}>
            <span>{btnText}</span>
            <i></i>
        </button>
    )
};

export default NeonButton;