import s from './SelectIconModal.module.css';
import React from "react";
import {Field} from "formik";

const SelectIconInput = React.memo( function SelectIconInput(props) {
    console.log('зарендерилась иконка');

    return (
        <label className={s.icon + ' color4'}
               style={{border: props.pikedIcon === props.value ? '2px solid rgb(138,169,251)' : ''}}
        >
            <img src={props.value} alt={props.id}/>
            <Field className={s.input}
                   onClick={props.changeValueForTimerPrototype}
                   type="radio" name="icon" value={props.value} />
        </label>
    )
});

export default SelectIconInput;