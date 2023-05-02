const TimerSection = (props) => {

    // const onDelete = (numOfTimer) => {
    //     setTimers(timers => timers.filter((timer, i) => i !== numOfTimer));
    // };
    // const onChangeTimerName = (numOfTimer, newNameOfTimer = 'newName') => {
    //     setTimers(timers => timers.map((timer, i) => {
    //         if (numOfTimer === i) {
    //             timer.name = newNameOfTimer;
    //             return timer;
    //         } else {
    //             return timer;
    //         }
    //     }));
    // };
    return (
        <div className="timers">
            {/*{timers.map((timer, i) => (*/}
            {/*    <Timer key={i}*/}
            {/*           onChangeTimerName={() => onChangeTimerName(i)}*/}
            {/*           onDelete={() => onDelete(i)}*/}
            {/*           {...timer}/>*/}
            {/*))}*/}
        </div>
    );
};

export default TimerSection;

