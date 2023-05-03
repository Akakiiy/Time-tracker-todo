import s from './EmptySection.module.css';
import Preloader from "../Preloader/Preloader";

const EmptySection = () => {
    return (
        <div className={s.emptySection}>
            <Preloader preloaderBg={'preloaderVar4'}/>
        </div>
    )
};

export default EmptySection;