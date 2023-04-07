import React, {useState} from 'react';
import Timer from '../timer/Timer';
import Sidebar from "../sidebar/Sidebar";
import Calendar from '../calendar/Calendar';
import BarChart from '../barChart/BarChart'
import './App.css';
import SettingsSidebar from "../settingsSidebar/SettingsSidebar";

function useToggleSidebars () {
    const [value, setValue] = useState(false);

    const toggleStateSidebar = () => {
        setValue(value => !(value));
    }

    return {value, toggleStateSidebar};
}

const App = () => {
    const sidebarAddTimer = useToggleSidebars();
    const sidebarSettings = useToggleSidebars();

    const [timers, setTimers] = useState([]);

    const handleAddTimer = (timer) => {
        setTimers([...timers, timer]);
    };

    const onDelete = (numOfTimer) => {
        setTimers(timers => timers.filter((timer, i) => i !== numOfTimer));
    }

    const onChangeTimerName = (numOfTimer, newNameOfTimer = 'newName') => {
        setTimers(timers => timers.map((timer, i) => {
            if (numOfTimer === i) {
                timer.name = newNameOfTimer;
                return timer;
            } else {
                return timer;
            }
        }));
    }

    return (
        <div className="app">
            <header>
                <button className={"btn-settings"}
                        onClick={sidebarSettings.toggleStateSidebar}>
                        Настройки</button>
                Мои таймеры
                <button
                    className={"btn-openSidebar"}
                    onClick={sidebarAddTimer.toggleStateSidebar}>{sidebarAddTimer.value ? 'закрыть меню таймера' : 'добавить новый таймер'}</button>
            </header>
            <div className="timers">
                {timers.map((timer, i) => (
                    <Timer key={i}
                           onChangeTimerName={() => onChangeTimerName(i)}
                           onDelete={() => onDelete(i)}
                           {...timer}/>
                ))}
            </div>
            <SettingsSidebar
                openStatus={sidebarSettings.value}
                toggleStateSettingsSidebar={sidebarSettings.toggleStateSidebar}/>
            <Sidebar
                openStatus={sidebarAddTimer.value}
                onAddTimer={handleAddTimer}
                toggleStateSidebar={sidebarAddTimer.toggleStateSidebar}/>
            <div className="bottom-section">
                <Calendar />
                <BarChart />
            </div>
        </div>
    );
};

export default App;