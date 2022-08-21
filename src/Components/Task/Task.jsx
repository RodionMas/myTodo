import React from "react";
import style from "./Task.module.css";
const Task = ({ task, setTask, addTodo, addText }) => {
  return (
    <div className={style.wrapper}>
      <input
        onChange={(task) => {setTask(task.target.value); }}
        value={task}
        placeholder="Задача..."
        type="text"
      />
      <button onClick={() => addTodo(task)}>Добавить задачу</button>
      {!addText && <span className={style.addText}>Введите задачу</span>}
    </div>
  );
};

export default Task;
