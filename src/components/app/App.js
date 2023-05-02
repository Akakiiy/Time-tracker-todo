import Sidebar from "../sidebar/Sidebar";
import Calendar from '../calendar/Calendar';
import BarChart from '../barChart/BarChart'
import './App.css';
import SettingsSidebar from "../settingsSidebar/SettingsSidebar";
import TimerSection from "../TimersSection/TimerSection";
import Header from "../header/Header";

const App = () => {

    return (
        <div className="app">
            <Header />
            <TimerSection />
            <SettingsSidebar />
            <Sidebar />

        </div>
    );
};

export default App;