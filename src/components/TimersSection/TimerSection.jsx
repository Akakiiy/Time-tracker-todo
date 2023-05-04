import s from './TimerSection.module.css';
import NeonButton from "../../style/buttons/NeonButton";
import Groups from "./Groups/Groups";
import TimersContainer from "./Timers/TimersContainer";
import NewTimerFormContainer from "../NewTimerForm/NewTimerFormContainer";

const TimerSection = () => {

    return (
        <div className={(s.timerSection) + ' main1'}>
            <div className={s.settings}>
                <NewTimerFormContainer />
                <NeonButton mainClass={s.addTimer}
                            btnStyle={'neon-btn1'}
                            btnText={'add timer'}/>
                <NeonButton mainClass={s.editTimers}
                            btnStyle={'neon-btn3'}
                            btnText={'Edit timers'}/>
            </div>
            <TimersContainer />
            <Groups />
        </div>
    );
};

export default TimerSection;

