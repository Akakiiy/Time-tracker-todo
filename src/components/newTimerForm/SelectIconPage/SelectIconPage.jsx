import React from "react";
import s from './SelectIconPage.module.css';
import {Field} from "formik";
const SelectIconPage = ({active, toggleIconSelectMode,
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
                        icons.map(({id, value}) => {
                            console.log('зарендерились иконки')
                            return (
                                <label key={id}
                                       className={s.icon + ' color4'}
                                       style={{border: pikedIcon === value ? '2px solid rgb(138,169,251)' : ''}}
                                >
                                    <img src={value} alt={id}/>
                                    <Field className={s.input}
                                           type="radio" name="icon" value={value}
                                           onClick={changeValueForTimerPrototype}/>
                                </label>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default SelectIconPage;