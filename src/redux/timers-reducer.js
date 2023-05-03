const ADD_TIMER = 'ADD_TIMER';

const initialValues = {
    timers: [
        {id: 1, geometry: '1', name: 'timer', icon: 'random', color: 'rgb(138,169,251)'},
        {id: 2, geometry: '1', name: 'timer', icon: 'random', color: 'rgb(138,169,251)'},
        {id: 3, geometry: '2', name: 'timer', icon: 'random', color: 'rgb(138,169,251)'},
    ],
};

const timersReducer = (state = initialValues, action) => {
    switch (action.type){
        case ADD_TIMER:
            return {
                ...state,
                timers: [...state.timers, {
                    id: action.id,
                    geometry: action.geometry,
                    name: action.name,
                    icon: action.icon,
                    color: action.color,
                }]
            }
        default:
            return state;
    }
}

export const addTimer = (timerData) => {
    return {
        type: ADD_TIMER,
        id: timerData.id,
        geometry: timerData.geometry,
        name: timerData.name,
        icon: timerData.icon,
        color: timerData.color,
    }
}

export default timersReducer;