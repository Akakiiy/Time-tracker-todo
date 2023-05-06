import React, {useState} from "react";
import s from './SelectIconModal.module.css';
import SelectIconInput from "./SelectIconInput";

let icons = [];

for (let i = 1; i <= 375; i++) {
    const iconNumber = ('00' + i).slice(-3);
    import(`../../../assets/icons/${iconNumber}.svg`).then(icon => {
        icons.push({id: i, value: icon.default});
    });
    console.log('произведен импорт');
}

const SelectIconModal = ({
                             active, toggleIconSelectMode,
                             changeValueForTimerPrototype, pikedIcon
                         }) => {

    const [iconsPaginationPage, setPaginationPage] = useState(0);
    const showingIcons = 20;

    const changePaginationPage = (n) => {
        setPaginationPage(iconsPaginationPage + n);

    }
    const changePageToPrev = () => {
        if (iconsPaginationPage > 0) {
            changePaginationPage(-1);
        }
    }

    const changePageToNext = () => {

        if (iconsPaginationPage < Math.round(icons.length / showingIcons)) {
            changePaginationPage( 1);
        }
    }

    return (
        <div className={`${s.iconPage} ${active ? s.active : ''} buttons2`}>
            <div className={s.wrapper}>
                <div className={`${s.header} ${active ? s.active : ''} color1`}
                     onClick={toggleIconSelectMode}>
                    <div>go back</div>
                </div>
                <div className={s.iconsBlock}>
                    {
                        [...icons]
                            .slice(showingIcons * iconsPaginationPage, showingIcons * iconsPaginationPage + showingIcons)
                            .map(({id, value}) => {
                                return (
                                    <SelectIconInput id={id}
                                                     key={id}
                                                     value={value}
                                                     changeValueForTimerPrototype={changeValueForTimerPrototype}
                                                     pikedIcon={pikedIcon}/>
                                );
                            })
                    }
                </div>
                <div className={s.buttonsNextPrev}>
                    <a className={`${s.arrow} ${s.left}`}
                         onClick={changePageToPrev}/>
                    <a className={`${s.arrow} ${s.right}`}
                         onClick={changePageToNext}/>
                </div>
            </div>
        </div>
    )
};

export default SelectIconModal;