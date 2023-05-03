import s from './App.module.css';
import TimerSection from "./components/TimersSection/TimerSection";
import Header from "./components/header/Header";
import Calendar from "./components/Calendar/Calendar";
import EmptySection from "./components/EmptySection/EmptySection";

const App = () => {

    return (
        <div className={s.app + ' color4'}>
            <div className={s.appWrapper}>
                <Header />
                <TimerSection />
                <Calendar />
                <EmptySection />
            </div>
            {/*<Settings/>*/}
            {/*<NewTimerForm />*/}
        </div>
    );
};

export default App;