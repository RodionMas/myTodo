import React from 'react';
import style from './Header.module.css'
const Header = ({todo}) => {
    return (
        <div className={style.wrapper}>
            <h1>Todo List</h1>
            <h2>Задач на сегодня: {todo}</h2>
        </div>
    );
};

export default Header;