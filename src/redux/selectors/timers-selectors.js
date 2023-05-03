import {createSelector} from "reselect";

const getTimers = (state) => {
    return state.timersSection.timers;
};
export const getTimersSelector = createSelector(getTimers,
    (timers) => {
    return timers;
});