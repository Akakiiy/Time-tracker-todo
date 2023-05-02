import s from './BottomSection.module.css';
import Calendar from "../calendar/Calendar";
import BarChart from "../barChart/BarChart";

const BottomSection = () => {
    return (
        <div className={s.bottomSection}>
            <Calendar />
            <BarChart />
        </div>
    )
}