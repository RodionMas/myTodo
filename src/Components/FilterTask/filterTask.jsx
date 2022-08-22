import React from "react";
import style from "./filterTask.module.css";
const filterTask = (props) => {
  const filterArr = ["Все", "Выполненные", "Выполняются..."];

  return (
    <div className={style.wrapper}>
      {filterArr.map((item, index) => (
        <button
          className={props.active === index ? style.activeBtn : ""}
          key={index}
          onClick={() => {
            props.filterTodo(item);
            props.setActive(index)
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default filterTask;
