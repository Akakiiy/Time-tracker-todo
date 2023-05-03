import s from './Header.module.css';
import React from "react";
import NeonButton from "../../style/buttons/NeonButton";

const Header = () => {
    return (
        <header className={s.header +' main3'}>
            <div className={s.banner}>Time Tracker</div>
            <NeonButton mainClass={s.settingsBtn}
                        btnStyle={'neon-btn2'}
                        btnText={'Settings'}/>
        </header>
    );
};

export default Header;