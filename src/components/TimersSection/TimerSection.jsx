import s from './TimerSection.module.css';
import NeonButton from "../../style/buttons/NeonButton";
import Groups from "./Groups/Groups";
import NewTimerFormContainer from "../NewTimerForm/NewTimerFormContainer";
import Timers from "./Timers/Timers";
import Timer from "./Timer/Timer";

const TimerSection = ({newTimerCreateMode, changeFormMode, timers, valuesForNewTimerSelector}) => {

    const addTimerBtnOnClick = () => {
        changeFormMode()
    }

    return (
        <div className={(s.timerSection) + ' main1'}>
            <div className={s.settings}>
                <NewTimerFormContainer />
                <div className={s.addingTimerWrapper}>
                    <div className={s.newTimerPrototype}
                         style={{height: newTimerCreateMode ? '' : '0'}}
                    >
                        <Timer mainClass={s.timerPrototype}
                               id={valuesForNewTimerSelector.id}
                               geometry={valuesForNewTimerSelector.geometry}
                               color={valuesForNewTimerSelector.color}
                               colorText={valuesForNewTimerSelector.colorText}
                               name={valuesForNewTimerSelector.name}
                               icon={valuesForNewTimerSelector.icon}/>
                    </div>
                </div>
                <NeonButton mainClass={s.addTimer}
                            btnStyle={'neon-btn1'}
                            btnText={newTimerCreateMode ? 'close form' : 'add timer'}
                            onClick={addTimerBtnOnClick}/>
                <NeonButton mainClass={s.editTimers}
                            btnStyle={'neon-btn3'}
                            btnText={'Edit timers'}/>
            </div>
            <Timers timers={timers}/>
            <Groups />
        </div>
    );
};

export default TimerSection;

