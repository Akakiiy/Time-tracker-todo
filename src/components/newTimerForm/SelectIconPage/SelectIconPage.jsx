import s from './SelectIconPage.module.css';

const SelectIconPage = () => {
    let test = true;

    return (
        <div className={`${s.iconPage} ${test ? s.active : ''} buttons2`}>
            <div className={s.iconWrapper + ' color10'}>icon</div>
            <div className={s.iconWrapper + ' color10'}>icon</div>
            <div className={s.iconWrapper + ' color10'}>icon</div>
            <div className={s.iconWrapper + ' color10'}>icon</div>
            <div className={s.iconWrapper + ' color10'}>icon</div>
            <div className={s.iconWrapper + ' color10'}>icon</div>
            <div className={s.iconWrapper + ' color10'}>icon</div>
            <div className={s.iconWrapper + ' color10'}>icon</div>
            <div className={s.iconWrapper + ' color10'}>icon</div>
            <div className={s.iconWrapper + ' color10'}>icon</div>
        </div>
    )
};

export default SelectIconPage;