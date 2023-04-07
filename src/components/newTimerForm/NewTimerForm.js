import React, { useState } from 'react';

const NewTimerForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [color, setColor] = useState('#ffffff');
    const [icon, setIcon] = useState('иконка?');
    const [inputStyle, setInputStyle] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        const nameIsEmpty = !name.trim();
        const nameIsOnlyNumbers = /^\d+$/.test(name);

        if (nameIsEmpty || nameIsOnlyNumbers) {
            setInputStyle({ borderColor: 'red' });
            return;
        } else {
            setInputStyle({});
        }

        onSubmit({ name, color, icon });
        setName('');
        setColor('#ffffff');
        setIcon('иконка?');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Название таймера:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={inputStyle}
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
                    <option  value="icon1">Иконка 1</option>
                    <option value="icon2">Иконка 2</option>
                    <option value="icon3">Иконка 3</option>
                </select>
            </label>
            <button type="submit">Добавить таймер</button>
        </form>
    );
};

export default NewTimerForm;