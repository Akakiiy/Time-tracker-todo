import './App.module.css';
import TimerSection from "./components/TimersSection/TimerSection";
import Header from "./components/header/Header";
import BottomSection from "./components/BottomSection/BottomSection";
import Settings from "./components/Settings/Settings";

const App = () => {

    return (
        <div className="app">
            <Header />
            <TimerSection />
            <BottomSection/>
            <Settings/>
        </div>
    );
};

export default App;