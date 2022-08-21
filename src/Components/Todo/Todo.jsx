import React from "react";
import style from "./Todo.module.css";
import lock from "../../Assets/img/lock.svg";
import unlock from "../../Assets/img/unlock.svg";
import basket from "../../Assets/img/basket.svg";
const Todo = ({ tasks, removeTodo, lockTodo }) => {

  return (
    <div className={style.wrapper}>
      <span>{!tasks.isProcess && <hr width={`${tasks.task.length * 8}`} className={style.taskUnlock} />}{tasks.task}</span>
      
      <div className={style.items}>
        {tasks.isProcess ? <img onClick={() => lockTodo(tasks.isProcess)} src={lock} alt="" /> : <img onClick={() => lockTodo(tasks.isProcess)} src={unlock} alt="" />}
        <img onClick={() => {removeTodo(tasks.id)}} src={basket} alt="" />
      </div>
    </div>
  );
};

export default Todo;
