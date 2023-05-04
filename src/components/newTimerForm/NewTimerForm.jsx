import s from './NewTimerForm.module.css';
import {Formik, Field, Form, ErrorMessage} from "formik";
import GeometryInput from "./GeometryInput/GeometryInput";
import NeonButton from "../../style/buttons/NeonButton";
import {useState} from "react";
import SelectIconPage from "./SelectIconPage/SelectIconPage";

const NewTimerForm = ({initialValuesForTimerForm, changeFormMode, setValuesForNewTimer, addTimer}) => {
    const [selectIconMode, setSelectIconMode] = useState(true);

    const toggleSelectIconMode = () => {
        setSelectIconMode(!selectIconMode);
    }

    return (
        <div className={s.formWrapper + ' main1'}>
            <Formik
                initialValues={initialValuesForTimerForm}
                // validate={}
                onSubmit={(values, {resetForm}) => {
                    changeFormMode()
                    addTimer(values)
                    resetForm(initialValuesForTimerForm);
                }}
            >
                    <Form className={s.form} >
                        <div className={s.geometry}>
                            <GeometryInput geometry={'square'}/>
                            <GeometryInput geometry={'circle'}/>
                            <GeometryInput geometry={'rhombus'}/>
                        </div>
                        <div>
                            <div style={{width: '20px', height: '20px', borderRadius: '100%', backgroundColor: 'black'}} />
                            <SelectIconPage />
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
                        <div>
                            <Field type="color" name="colorText" />
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