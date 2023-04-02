import React, { useState } from 'react';
import NewTimerForm from '../newTimerForm/NewTimerForm';
import './Sidebar.css';

const Sidebar = ({ onAddTimer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleAddTimer = (timer) => {
        onAddTimer(timer);
        setIsOpen(false);
    };

    return (
        <div className={`sidebar${isOpen ? ' open' : ''}`}>
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? 'Закрыть' : 'Добавить таймер'}
            </button>
            {isOpen && <NewTimerForm onSubmit={handleAddTimer} />}
        </div>
    );
};

export default Sidebar;
