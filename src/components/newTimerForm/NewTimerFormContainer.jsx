import {getInitialValuesForTimerFormSelector,} from "../../redux/selectors/newTimerForm-selectors";
import {connect} from "react-redux";
import {changeFormMode, setValuesForNewTimer} from "../../redux/newTimerForm-reducer";
import NewTimerForm from "./NewTimerForm";
import {addTimer} from "../../redux/timers-reducer";

const mapStateToProps = (state) => {
    return {
        initialValuesForTimerForm: getInitialValuesForTimerFormSelector(state),
    }
};
export default connect(mapStateToProps, {changeFormMode, setValuesForNewTimer, addTimer})(NewTimerForm);