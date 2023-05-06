import {
    getInitialValuesForTimerFormSelector,
    getNewTimerCreateModeSelector, getValuesForNewTimerSelector,
} from "../../redux/selectors/newTimerForm-selectors";
import {connect} from "react-redux";
import {changeFormMode, setValueForNewTimer} from "../../redux/newTimerForm-reducer";
import NewTimerForm from "./NewTimerForm";
import {addTimer} from "../../redux/timers-reducer";

const mapStateToProps = (state) => {
    return {
        initialValuesForTimerForm: getInitialValuesForTimerFormSelector(state),
        newTimerCreateMode: getNewTimerCreateModeSelector(state),
        valuesForNewTimerSelector: getValuesForNewTimerSelector(state),
    }
};
export default connect(mapStateToProps, {changeFormMode, setValueForNewTimer, addTimer})(NewTimerForm);