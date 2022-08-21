import React from "react";

import Header from "./Components/Header/Header";
import Task from "./Components/Task/Task";
import Todo from "./Components/Todo/Todo";
function App() {
  const [addText, setAddText] = React.useState(true)
  const [task, setTask] = React.useState("");
  const [todo, setTodo] = React.useState([
    { task: "learn react", id: Math.random(), isProcess: true },
    { task: "learn redux", id: Math.random(), isProcess: false },
  ]);
  const addTodo = (taskTodo) => {
    if (taskTodo) {
      const newItem = {
        task: taskTodo,
        id: Math.random(),
        isProcess: true,
      };
      setTodo([...todo, newItem]);
      setTask("");
      setAddText(true)
    } else {
      setAddText(false)
    }
  };
  const removeTodo = (id) => {
    setTodo([...todo.filter(todoElement => todoElement.id !== id )])
  }
  const lockTodo = (process) => {
    setTodo([...todo.map(todoElement => console.log(todoElement.process)) ])
    debugger
  }
  return (
    <div className="container">
      <Header todo={todo.length}/>
      <Task addText={addText} addTodo={addTodo} setTask={setTask} task={task} />
      {todo.map((tasks, index) => (
        <Todo lockTodo={lockTodo} removeTodo={removeTodo} key={index} tasks={tasks} />
      ))}
    </div>
  );
}

export default App;
