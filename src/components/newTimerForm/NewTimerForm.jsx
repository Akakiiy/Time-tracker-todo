import s from './NewTimerForm.module.css';
import {Formik, Field, Form, ErrorMessage} from "formik";
import GeometryInput from "./CastomRadioInputs/GeometryInput";
import NeonButton from "../../style/buttons/NeonButton";
import SelectIconPage from "./SelectIconPage/SelectIconPage";
import {useState} from "react";

const NewTimerForm = ({newTimerCreateMode, initialValuesForTimerForm, changeFormMode, setValueForNewTimer, addTimer, icons}) => {
    const [selectIconMode, setSelectIconMode] = useState(false);

    const toggleIconSelectMode = () => {
        setSelectIconMode(!selectIconMode);
    };

    const changeValueForTimerPrototype = (e) => {
        let newValue = e.target.value;
        let currentName = e.target.name;
        console.log({[currentName]: newValue});
        setValueForNewTimer({[currentName]: newValue});
    }

    return (
        <div style={{height: newTimerCreateMode ? '' : '0'}}
             className={s.formWrapper + ' main1'}>
            <Formik
                initialValues={initialValuesForTimerForm}
                // validate={}
                onSubmit={(values, {resetForm}) => {
                    addTimer(values);
                    changeFormMode();
                    resetForm(initialValuesForTimerForm);
                }}
            >
                    <Form className={s.form} >
                        <div className={s.geometry}>
                            <GeometryInput changeValueForTimerPrototype={changeValueForTimerPrototype}
                                           geometry={'square'}/>
                            <GeometryInput changeValueForTimerPrototype={changeValueForTimerPrototype}
                                           geometry={'circle'}/>
                            <GeometryInput changeValueForTimerPrototype={changeValueForTimerPrototype}
                                           geometry={'parallelogram'}/>
                        </div>
                        <div>
                            <div className={s.showIcons}
                                 onClick={toggleIconSelectMode}>
                                <div>
                                    {initialValuesForTimerForm.icon || 'icon'}
                                </div>
                            </div>
                            <SelectIconPage icons={icons}
                                            toggleIconSelectMode={toggleIconSelectMode}
                                            active={selectIconMode}
                                            changeValueForTimerPrototype={changeValueForTimerPrototype}/>
                        </div>
                        <div>
                            <label className={s.labelForInputs}>form color:</label>
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
                            <label className={s.labelForInputs}>text color:</label>
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