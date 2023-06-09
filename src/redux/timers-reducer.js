const ADD_TIMER = 'ADD_TIMER';

const initialValues = {
    timers: [
        {id: 1, geometry: 'square', name: 'fake timer', icon: 'random', color: 'rgb(246,214,5)', colorText: 'rgb(0, 0, 0)',},
        {id: 2, geometry: 'circle', name: 'fake timer', icon: 'random', color: 'rgb(176,138,251)', colorText: 'rgb(0, 0, 0)',},
        {id: 3, geometry: 'parallelogram', name: 'fake timer', icon: 'random', color: 'rgba(46,253,139,0.58)', colorText: 'rgb(0, 0, 0)',},
    ],
};

const timersReducer = (state = initialValues, action) => {
    switch (action.type){
        case ADD_TIMER:
            return {
                ...state,
                timers: [...state.timers, {
                    id: state.timers.length + 1,
                    geometry: action.geometry,
                    name: action.name,
                    icon: action.icon,
                    color: action.color,
                    colorText: action.colorText
                }]
            }
        default:
            return state;
    }
}

export const addTimer = ({geometry, name, icon, color, colorText}) => {
    return {
        type: ADD_TIMER,
        geometry,
        name,
        icon,
        color,
        colorText,
    }
}

export default timersReducer;