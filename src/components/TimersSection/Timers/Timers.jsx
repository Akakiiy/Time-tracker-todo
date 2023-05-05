import s from './Timers.module.css';
import Timer from "../Timer/Timer";

const Timers = ({timers}) => {
    return (
        <div className={s.timers}>

            {
                [...timers].reverse().map((timer, index) => {
                    return (
                        <Timer key={index}
                               id={timer.id}
                               geometry={timer.geometry}
                               color={timer.color}
                               colorText={timer.colorText}
                               name={timer.name}
                               icon={timer.icon}/>
                    )
                })
            }
        </div>
    );
};

export default Timers;