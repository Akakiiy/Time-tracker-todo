import {createSelector} from "reselect";

const getAddNewTimerMode = (state) => {
    return state.newTimerForm.addNewTimerMode;
};
export const getAddNewTimerModeSelector = createSelector(getAddNewTimerMode,
    (addNewTimerMode) => {
    return addNewTimerMode
});

const getValuesForNewTimer = (state) => {
    return state.newTimerForm.valuesForNewTimer
};
export const getValuesForNewTimerSelector = createSelector(getValuesForNewTimer,
    (valuesForNewTimer) => {
    return valuesForNewTimer
});

const getInitialValuesForTimerForm = (state) => {
    return state.newTimerForm.initialValuesForTimerForm;
};
export const getInitialValuesForTimerFormSelector = createSelector(getInitialValuesForTimerForm,
    (initialValuesForTimerForm) => {
        return initialValuesForTimerForm;
});