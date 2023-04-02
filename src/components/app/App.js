import React, {useState} from 'react';
import Timer from '../timer/Timer';
import Sidebar from "../sidebar/Sidebar";
import Calendar from '../calendar/Calendar';
import BarChart from '../barChart/BarChart'
import './App.css';


const App = () => {
    const [timers, setTimers] = useState([
        // Исходные данные таймеров (можете добавить сюда свои данные)
    ]);

    const handleAddTimer = (timer) => {
        setTimers([...timers, timer]);
    };

    return (
        <div className="app"> {/* Изменил тег <> на <div className="app"> */}
            <header>Мои таймеры</header>
            <div className="timers">
                {timers.map((timer, index) => (
                    <Timer key={index} {...timer} />
                ))}
            </div>
            <Sidebar onAddTimer={handleAddTimer} />
            <div className="bottom-section">
                <Calendar />
                <BarChart />
            </div>
        </div>
    );
};

export default App;