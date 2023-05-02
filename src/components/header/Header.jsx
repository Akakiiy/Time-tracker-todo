import s from './Header.module.css';
import React from "react";

const Header = () => {
    return (
        <header>
            <button className={"btn-settings"}
                    onClick={sidebarSettings.toggleStateSidebar}>
                Настройки</button>
            Мои таймеры
            <button
                className={"btn-openSidebar"}
                onClick={sidebarAddTimer.toggleStateSidebar}>{sidebarAddTimer.value ? 'закрыть меню таймера' : 'добавить новый таймер'}</button>
        </header>
    );
};

export default Header;