import s from './Groups.module.css';

const Groups = () => {
    return (
        <div className={s.groups}>
            <div className={s.group}>здесь будет</div>
            <div className={s.group}>реализация через</div>
            <div className={s.group}>стороннюю библиотеку</div>
            <div className={s.group}>разные папки</div>
            <div className={s.group}>и категории</div>
        </div>
    );
};

export default Groups;