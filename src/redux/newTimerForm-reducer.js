let importedIcons = [];

for (let i = 1; i <= 375; i++) {
    const iconNumber = ('00' + i).slice(-3);
    import(`../assets/icons/${iconNumber}.svg`).then(icon => {
        importedIcons.push({ id: i, value: icon.default });
    });
    console.log('произведен импорт');
}

const CHANGE_FORM_MODE = 'CHANGE_FORM_MODE';
const SET_VALUES_FOR_NEW_TIMER = 'SET_VALUES_FOR_NEW_TIMER';

let initialValuesForTimerForm = {geometry: 'square', name: '', icon: 'importedIcons[0].value', color: '#ffffff',colorText: '#000000'}

let initialValues = {
    newTimerCreateMode: false,
    initialValuesForTimerForm: initialValuesForTimerForm,
    valuesForNewTimer: initialValuesForTimerForm,
    icons: importedIcons,
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