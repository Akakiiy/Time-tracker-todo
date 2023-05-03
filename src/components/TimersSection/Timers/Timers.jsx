import s from './Timers.module.css';

const Timers = ({timers}) => {
    return (
        <div className={s.timers}>

            {
                [...timers].reverse().map(timer => {
                    return (
                        <div className={'square'}
                             key={timer.id}
                             style={{
                                 'backgroundColor': timer.color,
                             }}>
                            <div className={'squareInner'}>
                                <div>form : {timer.from}</div>
                                <div> name : {timer.name}</div>
                                <div>icon : {timer.icon}</div>
                            </div>
                        </div>
                    )
                })
            }
            <div className={'circle'}>
                <div className={'circleInner'}>
                    <div>form : timer.from</div>
                    <div> name : timer.name</div>
                    <div>icon : timer.icon</div>
                </div>
            </div>
            <div className={'rhombus'}>
                <div className={'rhombusInner'}>
                    <div>form : timer.from</div>
                    <div> name : timer.name</div>
                </div>
            </div>
        </div>
    );
};

export default Timers;