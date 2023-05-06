import React, {useCallback} from "react";
import s from './SelectIconModal.module.css';
import SelectIconInput from "./SelectIconInput";
const SelectIconModal = ({active, toggleIconSelectMode,
                            icons, changeValueForTimerPrototype, pikedIcon}) => {

    return (
        <div className={`${s.iconPage} ${active ? s.active : ''} buttons2`}>
            <div className={s.wrapper}>
                <div className={`${s.header} ${active ? s.activeHeader : ''} color1`}
                     onClick={toggleIconSelectMode}>
                    <div>go back</div>
                </div>
                <div className={s.iconsBlock}>
                    {
                        useCallback(() => {
                            icons.map(({id, value}) => {
                                return (
                                    <SelectIconInput id={id}
                                                     key={id}
                                                     value={value}
                                                     changeValueForTimerPrototype={changeValueForTimerPrototype}
                                                     pikedIcon={pikedIcon}/>
                                );
                            })
                        },[pikedIcon])
                    }
                </div>
            </div>
        </div>
    )
};

export default SelectIconModal;