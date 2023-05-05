import {connect} from "react-redux";
import {getTimersSelector} from "../../redux/selectors/timers-selectors";
import TimerSection from "./TimerSection";
import {changeFormMode} from "../../redux/newTimerForm-reducer";
import {
    getNewTimerCreateModeSelector,
    getValuesForNewTimerSelector
} from "../../redux/selectors/newTimerForm-selectors";

const mapStateToProps = (state) => {
    return {
        timers: getTimersSelector(state),
        newTimerCreateMode: getNewTimerCreateModeSelector(state),
        valuesForNewTimerSelector: getValuesForNewTimerSelector(state),
    }
};

export default connect(mapStateToProps, {changeFormMode})(TimerSection);
