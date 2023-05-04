import s from './NewTimerForm.module.css';
import {Formik, Field, Form, ErrorMessage} from "formik";
import GeometryInput from "./GeometryInput/GeometryInput";
import NeonButton from "../../style/buttons/NeonButton";
import {useState} from "react";

const NewTimerForm = ({initialValuesForTimerForm, changeFormMode, setValuesForNewTimer, addTimer}) => {
    const [selectIconMode, setSelectIconMode] = useState(true);

    const toggleSelectIconMode = () => {
        setSelectIconMode(!selectIconMode);
    }

    const handleChange = (values) => {
        console.log(values);
    }

    return (
        <div className={s.formWrapper + ' main1'}>
            <Formik
                initialValues={initialValuesForTimerForm}
                onChange={handleChange}
                // validate={}
                onSubmit={(values, {resetForm}) => {
                    changeFormMode()
                    addTimer(values)
                    resetForm(initialValuesForTimerForm);
                }}
            >
                <Form className={s.form}>
                    <div className={s.geometry}>
                            <GeometryInput geometry={'square'}/>
                            <GeometryInput geometry={'circle'}/>
                            <GeometryInput geometry={'rhombus'}/>
                    </div>
                    <div>
                        {
                            selectIconMode &&
                            <div
                                onClick={toggleSelectIconMode}>
                                Icons
                            </div>
                        }
                        <Field type="checkbox" name="icon"/>
                    </div>
                    <div>
                        <Field type="color" name="color" />
                    </div>
                    <div className={s.nameInputWrapper}>
                        <Field className={s.nameInput + ' color8'}
                               type="text"
                               name="name"
                               placeholder={'name for your timer'}/>
                        <ErrorMessage name="name" component="div" />
                    </div>
                    <NeonButton mainClass={s.submitBtn}
                                btnStyle={'neon-btn4'}
                                btnText={'Create'}
                                typeBtn={'submit'}/>
                </Form>
            </Formik>
        </div>
    );
};

export default NewTimerForm;