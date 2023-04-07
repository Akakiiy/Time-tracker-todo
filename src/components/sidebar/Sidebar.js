import React, {} from 'react';
import NewTimerForm from '../newTimerForm/NewTimerForm';
import './Sidebar.css';

const Sidebar = ({ onAddTimer, openStatus, toggleStateSidebar }) => {

    const handleAddTimer = (timer) => {
        onAddTimer(timer);
    };

    return (
        <div className={`sidebar${openStatus ? ' open' : ''}`}>
            <button onClick={toggleStateSidebar}>
                {'Закрыть'}
            </button>
                {openStatus && <NewTimerForm onSubmit={handleAddTimer} />}
        </div>
    );
};

export default Sidebar;
