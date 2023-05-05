const CHANGE_FORM_MODE = 'CHANGE_FORM_MODE';
const SET_VALUES_FOR_NEW_TIMER = 'SET_VALUES_FOR_NEW_TIMER';

const initialValuesForTimerForm = {geometry: 'square', name: '', icon: 'icon1', color: '#ffffff',colorText: '#000000'}

const initialValues = {
    newTimerCreateMode: false,
    initialValuesForTimerForm: initialValuesForTimerForm,
    valuesForNewTimer: initialValuesForTimerForm,
    icons: [
        {id: 1, value: 'icon1'}, {id: 2, value: 'icon2'}, {id: 3, value: 'icon3'},
        {id: 4, value: 'icon4'}, {id: 5, value: 'icon5'}, {id: 6, value: 'icon6'},
        {id: 7, value: 'icon7'}, {id: 8, value: 'icon8'}, {id: 9, value: 'icon9'},
        {id: 10, value: 'icon10'}, {id: 11, value: 'icon11'}, {id: 12, value: 'icon12'},
        {id: 13, value: 'icon13'}, {id: 14, value: 'icon14'}, {id: 15, value: 'icon15'},
        {id: 17, value: 'icon17'}, {id: 18, value: 'icon18'}, {id: 19, value: 'icon19'},
        {id: 20, value: 'icon20'}, {id: 21, value: 'icon21'}, {id: 22, value: 'icon22'},
        {id: 23, value: 'icon23'}, {id: 24, value: 'icon24'}, {id: 25, value: 'icon25'},
        {id: 27, value: 'icon27'}, {id: 28, value: 'icon28'}, {id: 29, value: 'icon29'},
        {id: 30, value: 'icon30'}, {id: 31, value: 'icon31'}, {id: 32, value: 'icon32'},
        {id: 33, value: 'icon33'}, {id: 34, value: 'icon34'}, {id: 35, value: 'icon35'},
    ],
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