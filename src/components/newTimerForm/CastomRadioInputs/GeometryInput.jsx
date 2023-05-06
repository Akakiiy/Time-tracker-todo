import s from "../NewTimerForm.module.css";
import {Field} from "formik";

const GeometryInput = ({geometry, changeValueForTimerPrototype, pikedGeometry}) => {

    return (
        <div className={s.geometryInput}>
            <label className={geometry + ' ' + s.shapeForLabelStyle}
                   style={{border: pikedGeometry === geometry ? '2px solid white' : ''}}>
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