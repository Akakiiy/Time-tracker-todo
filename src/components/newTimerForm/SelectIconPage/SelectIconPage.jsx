import s from './SelectIconPage.module.css';
import {Field} from "formik";
const SelectIconPage = ({active, toggleIconSelectMode, icons, changeValueForTimerPrototype}) => {

    return (
        <div className={`${s.iconPage} ${active ? s.active : ''} buttons2`}>
            <div className={s.wrapper}>
                <div className={`${s.header} ${active ? s.activeHeader : ''} color1`}
                     onClick={toggleIconSelectMode}>
                    <div>go back</div>
                </div>
                <div className={s.iconsBlock}>
                    {
                        icons.map(icon => {
                            return (
                                <label key={icon.id} className={s.icon + ' color10'}>
                                    <Field className={s.input}
                                           type="radio" name="icon" value={icon.value}
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