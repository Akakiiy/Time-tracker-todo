const CHANGE_FORM_MODE = 'CHANGE_FORM_MODE';
const SET_VALUES_FOR_NEW_TIMER = 'SET_VALUES_FOR_NEW_TIMER';

const initialValues = {
    addNewTimerMode: false,
    initialValuesForTimerForm: {geometry: '', name: '', icon: false, color: '#ffffff',colorText: '#000000'},
    valuesForNewTimer: null,
}

const newTimerFormReducer = (state = initialValues, action) => {
    switch (action.type) {
        case CHANGE_FORM_MODE:
            return {
                ...state,
                addNewTimerMode: !state.addNewTimerMode,
            }
        case SET_VALUES_FOR_NEW_TIMER:
            return {
                ...state,
                valuesForNewTimer: {...action.newValuesData},
            }
        default:
            return state;
    }
}
export const changeFormMode = () => {
    console.log('changed!');
    return {
        type: CHANGE_FORM_MODE,
    }
};
export const setValuesForNewTimer = (newValuesData) => {
    return {
        type: SET_VALUES_FOR_NEW_TIMER,
        newValuesData,
    }
};

export default newTimerFormReducer;