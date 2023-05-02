const TimerSection = (props) => {

    // const onDelete = (numOfTimer) => {
    //     setTimers(timers => timers.filter((Timer, i) => i !== numOfTimer));
    // };
    // const onChangeTimerName = (numOfTimer, newNameOfTimer = 'newName') => {
    //     setTimers(timers => timers.map((Timer, i) => {
    //         if (numOfTimer === i) {
    //             Timer.name = newNameOfTimer;
    //             return Timer;
    //         } else {
    //             return Timer;
    //         }
    //     }));
    // };
    return (
        <div className="timers">
            {/*{timers.map((Timer, i) => (*/}
            {/*    <Timer key={i}*/}
            {/*           onChangeTimerName={() => onChangeTimerName(i)}*/}
            {/*           onDelete={() => onDelete(i)}*/}
            {/*           {...Timer}/>*/}
            {/*))}*/}
        </div>
    );
};

export default TimerSection;

