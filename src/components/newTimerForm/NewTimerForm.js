import React, { useState } from 'react';

const NewTimerForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [color, setColor] = useState('#000000');
    const [icon, setIcon] = useState('placeholder');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ name, color, icon });
        setName('');
        setColor('#000000');
        setIcon('placeholder');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Название таймера:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>
                Цвет:
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
            </label>
            <label>
                Иконка:
                <select value={icon} onChange={(e) => setIcon(e.target.value)}>
                    <option value="placeholder">Выберите иконку</option>
                    <option value="icon1">Иконка 1</option>
                    <option value="icon2">Иконка 2</option>
                    <option value="icon3">Иконка 3</option>
                </select>
            </label>
            <button type="submit">Добавить таймер</button>
        </form>
    );
};

export default NewTimerForm;
