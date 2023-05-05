import s from "../NewTimerForm.module.css";
import {Field} from "formik";

const GeometryInput = ({geometry, changeValueForTimerPrototype}) => {

    return (
        <div className={s.geometryInput}>
            <label className={geometry + ' ' + s.shapeForLabelStyle}>
                <Field className={s.inputClass}
                       type="radio"
                       name="geometry"
                       value={geometry}
                       onClick={changeValueForTimerPrototype}/>
            </label>
        </div>
    )
};

export default GeometryInput;