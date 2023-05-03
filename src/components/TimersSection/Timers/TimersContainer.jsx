import Timers from "./Timers";
import {connect} from "react-redux";
import {addTimer} from "../../../redux/timers-reducer";
import {getTimersSelector} from "../../../redux/selectors/timers-selectors";

const TimersContainer = ({timers}) => {
    return (
        <Timers timers={timers}/>
    )
};

const mapStateToProps = (state) => {
    return {
        timers: getTimersSelector(state),
    }
};
export default connect(mapStateToProps, {
    addTimer,
})(TimersContainer)