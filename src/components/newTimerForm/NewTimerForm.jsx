import s from './NewTimerForm.module.css';
import {Formik, Field, Form, ErrorMessage} from "formik";
import GeometryInput from "./GeometryInput";

const NewTimerForm = () => {

    return (
        <div className={s.formWrapper + ' main1'}>
            <Formik
                initialValues={{ email: '', password: '' }}
                // validate={}
                onSubmit={values => {
                    console.log(values);
                }}
            >
                <Form className={s.form}>
                    <div className={s.geometry}>
                        <GeometryInput geometry={'square'}/>
                        <GeometryInput geometry={'circle'}/>
                        <GeometryInput geometry={'rhombus'}/>
                    </div>
                    <div>
                        <Field type="text" name="name" />
                        <ErrorMessage name="name" component="div" />
                    </div>
                    <div>
                        <Field type="checkbox" name="icon"/>
                    </div>
                    <div>
                        <Field type="color" name="color" />
                    </div>
                    <button type="submit">
                        Submit
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default NewTimerForm;