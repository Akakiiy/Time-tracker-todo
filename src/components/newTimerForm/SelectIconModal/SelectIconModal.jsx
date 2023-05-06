import React from "react";
import s from './SelectIconModal.module.css';
import SelectIconInput from "./SelectIconInput";

let icons = [];

for (let i = 1; i <= 375; i++) {
    const iconNumber = ('00' + i).slice(-3);
    import(`../../../assets/icons/${iconNumber}.svg`).then(icon => {
        icons.push({ id: i, value: icon.default });
    });
    console.log('произведен импорт');
}

const SelectIconModal = ({active, toggleIconSelectMode,
                            changeValueForTimerPrototype, pikedIcon}) => {

    return (
        <div className={`${s.iconPage} ${active ? s.active : ''} buttons2`}>
            <div className={s.wrapper}>
                <div className={`${s.header} ${active ? s.activeHeader : ''} color1`}
                     onClick={toggleIconSelectMode}>
                    <div>go back</div>
                </div>
                <div className={s.iconsBlock}>
                    {
                        icons.map(({id, value}) => {
                            return (
                                <SelectIconInput id={id}
                                                 key={id}
                                                 value={value}
                                                 changeValueForTimerPrototype={changeValueForTimerPrototype}
                                                 pikedIcon={pikedIcon}/>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default SelectIconModal;