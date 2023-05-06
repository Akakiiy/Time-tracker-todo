import s from './Timers.module.css';
import Timer from "../Timer/Timer";
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';

const Timers = ({timers}) => {
    return (
        <TransitionGroup className={s.timers}>
            {
                [...timers].reverse().map((timer, index) => (
                    <CSSTransition
                        key={timer.id}
                        timeout={700}
                        classNames="animatedTimers"
                    >
                        <Timer mainClass={'animatedTimers'}
                               key={index}
                               id={timer.id}
                               geometry={timer.geometry}
                               color={timer.color}
                               colorText={timer.colorText}
                               name={timer.name}
                               icon={timer.icon}/>
                    </CSSTransition>
                ))
            }
        </TransitionGroup>
    );
};

export default Timers;