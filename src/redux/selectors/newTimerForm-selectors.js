import {createSelector} from "reselect";

const getNewTimerCreateMode = (state) => {
    return state.newTimerForm.newTimerCreateMode;
};
export const getNewTimerCreateModeSelector = createSelector(getNewTimerCreateMode,
    (newTimerCreateMode) => {
        return newTimerCreateMode
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

const getIcons = (state) => {
    return state.newTimerForm.icons;
};
export const getIconsSelector = createSelector(getIcons,
    (icons) => {
    return icons;
});