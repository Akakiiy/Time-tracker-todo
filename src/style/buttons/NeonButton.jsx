import React from "react";

const NeonButton = ({mainClass, btnStyle, btnText, onClick, typeBtn}) => {
    return (
        <button className={`${mainClass} ${btnStyle}`}
                onClick={onClick}
                type={typeBtn}>
            <span>{btnText}</span>
            <i></i>
        </button>
    )
};

export default NeonButton;