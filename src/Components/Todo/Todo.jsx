import React from "react";
import style from "./Todo.module.css";
import lock from "../../Assets/img/lock.svg";
import unlock from "../../Assets/img/unlock.svg";
import basket from "../../Assets/img/basket.svg";
const Todo = (props) => {

  return (
    <div className={style.wrapper}>
      <span>{!props.isProcess && <hr width={`${props.task.length * 8}`} className={style.taskUnlock} />}{props.task}</span>
      <div className={style.items}>
        {props.isProcess ? <img onClick={() => props.lockTodo(props.id)} src={lock} alt="" /> : <img onClick={() => props.lockTodo(props.id)} src={unlock} alt="" />}
        <img onClick={() => {props.removeTodo(props.id)}} src={basket} alt="" />
      </div>
    </div>
  );
};

export default Todo;
