import './App.module.css';
import TimerSection from "./components/TimersSection/TimerSection";
import Header from "./components/header/Header";
import BottomSection from "./components/BottomSection/BottomSection";
import Settings from "./components/Settings/Settings";
import Colors from "./style/colors";

const App = () => {

    return (
        <div className="app">
            <Header />
            <TimerSection />
            <BottomSection/>
            <Settings/>
            <Colors />
        </div>
    );
};

export default App;