import s from './TimerSection.module.css';
import NeonButton from "../../style/buttons/NeonButton";

const TimerSection = (props) => {

    return (
        <div className={s.timerSection + ' main1'}>
            <div className={s.settings}>
                <NeonButton mainClass={s.addTimer}
                            btnStyle={'neon-btn1'}
                            btnText={'add timer'}/>
                <NeonButton mainClass={s.editTimers}
                            btnStyle={'neon-btn3'}
                            btnText={'Edit timers'}/>
            </div>
            <div className={s.timers}>
                <div className={s.timer}>timer</div>
                <div className={s.timer}>timer</div>
                <div className={s.timer}>timer</div>
                <div className={s.timer}>timer</div>
                <div className={s.timer}>timer</div>
                <div className={s.timer}>timer</div>
                <div className={s.timer}>timer</div>
                <div className={s.timer}>timer</div>
                <div className={s.timer}>timer</div>
                <div className={s.timer}>timer</div>
                <div className={s.timer}>timer</div>
                <div className={s.timer}>timer</div>
            </div>
            <div className={s.groups}>
                <div className={s.group}>здесь будет</div>
                <div className={s.group}>реализация через</div>
                <div className={s.group}>стороннюю библиотеку</div>
                <div className={s.group}>разные папки</div>
                <div className={s.group}>и категории</div>
            </div>
        </div>
    );
};

export default TimerSection;

