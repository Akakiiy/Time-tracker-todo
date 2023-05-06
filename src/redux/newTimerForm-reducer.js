import startIcon from '../assets/icons/052.svg'

const CHANGE_FORM_MODE = 'CHANGE_FORM_MODE';
const SET_VALUES_FOR_NEW_TIMER = 'SET_VALUES_FOR_NEW_TIMER';

let initialValuesForTimerForm = {geometry: 'square', name: '', icon: startIcon, color: '#ffffff',colorText: '#000000'}

let initialValues = {
    newTimerCreateMode: false,
    initialValuesForTimerForm: initialValuesForTimerForm,
    valuesForNewTimer: initialValuesForTimerForm,
}

const newTimerFormReducer = (state = initialValues, action) => {
    switch (action.type) {
        case CHANGE_FORM_MODE:
            return {
                ...state,
                newTimerCreateMode: !state.newTimerCreateMode,
            }
        case SET_VALUES_FOR_NEW_TIMER:
            return {
                ...state,
                valuesForNewTimer: {...state.valuesForNewTimer, ...action.newValueData},
            }
        default:
            return state;
    }
}
export const changeFormMode = () => {
    return {
        type: CHANGE_FORM_MODE,
    }
};
export const setValueForNewTimer = (newValueData) => {
    return {
        type: SET_VALUES_FOR_NEW_TIMER,
        newValueData,
    }
};

export default newTimerFormReducer;