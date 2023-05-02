import s from './BottomSection.module.css';
import Calendar from "./Calendar/Calendar";
import BarChart from "./BarChart/BarChart";

const BottomSection = () => {
    return (
        <div className={s.bottomSection}>
            <Calendar />
            <BarChart />
        </div>
    )
};

export default BottomSection