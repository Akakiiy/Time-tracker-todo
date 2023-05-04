import s from "../NewTimerForm.module.css";
import {Field} from "formik";

const GeometryInput = ({geometry}) => {

    return (
        <div className={s.geometryInput}>
            <label className={geometry + ' ' + s.shapeForLabelStyle}>
                <Field className={s.inputClass}
                       type="radio"
                       name="geometry"
                       value={geometry}/>
            </label>
        </div>
    )
};

export default GeometryInput;