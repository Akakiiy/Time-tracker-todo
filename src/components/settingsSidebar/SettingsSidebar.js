import React, { useState, useEffect } from 'react';
import './SettingsSidebar.css';

const SettingsSidebar = ({ openStatus, toggleStateSettingsSidebar }) => {

    return (
        <div className={`sidebar-settings${openStatus ? ' open' : ''}`}>
            <button
                onClick={toggleStateSettingsSidebar}>
                {'Закрыть'}
            </button>
        </div>
    );
};

export default SettingsSidebar;