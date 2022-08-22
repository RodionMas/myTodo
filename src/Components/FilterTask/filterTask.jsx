import React from 'react';
import style from './filterTask.module.css'
const filterTask = (props) => {
    const filterArr = [
        'Все', 'Выполненные', 'Выполняются...'
    ]
    return (
        <div className={style.wrapper}>
            {filterArr.map((item, index) => (
                <button key={index} onClick={() => props.filterTodo(item)}>{item}</button>
            ))}
        </div>
    );
};

export default filterTask;