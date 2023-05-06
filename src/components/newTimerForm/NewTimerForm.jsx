import s from './NewTimerForm.module.css';
import {Formik, Field, Form, ErrorMessage} from "formik";
import GeometryInput from "./CastomRadioInputs/GeometryInput";
import NeonButton from "../../style/buttons/NeonButton";
import SelectIconPage from "./SelectIconModal/SelectIconModal";
import {useState} from "react";
import * as Yup from 'yup';

const NewTimerForm = ({newTimerCreateMode, initialValuesForTimerForm, changeFormMode, setValueForNewTimer, addTimer, icons, valuesForNewTimerSelector}) => {
    const [selectIconMode, setSelectIconMode] = useState(false);

    const toggleIconSelectMode = () => {
        setSelectIconMode(!selectIconMode);
    };

    const changeValueForTimerPrototype = (e) => {
        let newValue = e.target.value;
        let currentName = e.target.name;
        if (currentName === 'name' && newValue.length >= 36) {
            newValue = newValue.slice(0,36);
        }
        setValueForNewTimer({[currentName]: newValue});
    }

    return (
        <div style={{height: newTimerCreateMode ? '' : '0'}}
             className={s.formWrapper + ' main1'}>
            <Formik
                initialValues={initialValuesForTimerForm}
                validationSchema={Yup.object().shape({
                    name: Yup.string().max(35, 'Sorry but it\'s Too Long!')
                })}
                onSubmit={(values, {resetForm}) => {
                    changeFormMode();
                    setTimeout(() => {
                        addTimer(values);
                        setValueForNewTimer(initialValuesForTimerForm);
                        resetForm(initialValuesForTimerForm);
                    }, 1000)
                }}
                validateOnBlur={true}
            >
                {({ handleChange }) => (
                        <Form className={s.form} >
                            <div className={s.geometry}>
                                <GeometryInput pikedGeometry={valuesForNewTimerSelector.geometry}
                                               changeValueForTimerPrototype={changeValueForTimerPrototype}
                                               geometry={'square'}/>
                                <GeometryInput pikedGeometry={valuesForNewTimerSelector.geometry}
                                               changeValueForTimerPrototype={changeValueForTimerPrototype}
                                               geometry={'circle'}/>
                                <GeometryInput pikedGeometry={valuesForNewTimerSelector.geometry}
                                               changeValueForTimerPrototype={changeValueForTimerPrototype}
                                               geometry={'parallelogram'}/>
                            </div>
                            <div>
                                <div className={s.showIcons}
                                     onClick={toggleIconSelectMode}>
                                    <img src={valuesForNewTimerSelector.icon} alt={'selectedImg'} />
                                </div>
                                <SelectIconPage icons={icons}
                                                                      toggleIconSelectMode={toggleIconSelectMode}
                                                                      active={selectIconMode}
                                                                      pikedIcon={valuesForNewTimerSelector.icon}
                                                                      changeValueForTimerPrototype={changeValueForTimerPrototype}/>
                            </div>
                            <div>
                                <label className={s.labelForInputs}>form color:</label>
                                <Field type="color" name="color"
                                       onChange={e => {
                                           handleChange(e);
                                           changeValueForTimerPrototype(e);
                                       }}/>
                            </div>
                            <div className={s.nameInputWrapper}>
                                <Field className={s.nameInput + ' color8'}
                                       type="text"
                                       name="name"
                                       placeholder={'name for your timer'}
                                       value={valuesForNewTimerSelector.name}
                                       onChange={e => {
                                           handleChange(e);
                                           changeValueForTimerPrototype(e);
                                       }}/>
                                <ErrorMessage name="name"
                                              component="div"
                                              style={{
                                                  color: 'rgb(76,54,85)',
                                                  textDecoration: 'underline'
                                              }}/>
                            </div>
                            <div>
                                <label className={s.labelForInputs}>text color:</label>
                                <Field type="color" name="colorText"
                                       onChange={e => {
                                           handleChange(e);
                                           changeValueForTimerPrototype(e);
                                       }}/>
                            </div>
                            <NeonButton mainClass={s.submitBtn}
                                        btnStyle={'neon-btn4'}
                                        btnText={'Create'}
                                        typeBtn={'submit'}/>
                        </Form>
                )}
            </Formik>
        </div>
    );
};

export default NewTimerForm;