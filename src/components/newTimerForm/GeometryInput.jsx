import s from "./NewTimerForm.module.css";
import {Field} from "formik";

const GeometryInput = ({geometry}) => {
    return (
        <div className={s.geometryInput}>
            <div className={geometry + ' ' + s.shape} />
            <Field type="radio" name="geometry" value={geometry}/>
        </div>
    )
};

export default GeometryInput;