import s from './App.module.css';
import TimerSection from "./components/TimersSection/TimerSection";
import Header from "./components/header/Header";
import Calendar from "./components/Calendar/Calendar";
import EmptySection from "./components/EmptySection/EmptySection";
import Settings from "./components/Settings/Settings";
import {Route, Switch} from "react-router-dom";

const App = () => {

    return (
        <div className={s.app + ' color4'}>
            <div className={s.appWrapper}>
                <Header/>
                <Switch>
                    <Route path={'/'} >
                        <TimerSection/>
                        <Calendar/>
                        <EmptySection/>
                    </Route>
                    <Route exact path={'/settings'} render={() => <Settings/>}/>
                </Switch>
            </div>
        </div>
    );
};

export default App;