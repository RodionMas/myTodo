import React from "react";
import FilterTask from './Components/FilterTask/filterTask'
import Header from "./Components/Header/Header";
import Task from "./Components/Task/Task";
import Todo from "./Components/Todo/Todo";
function App() {
  const [load, setLoad] = React.useState(false)
  const [addText, setAddText] = React.useState(true)
  const [task, setTask] = React.useState("");
  const [todo, setTodo] = React.useState([
    { task: "learn react", id: Math.random(), isProcess: true },
    { task: "learn redux", id: Math.random(), isProcess: false },
  ]);
  const [filtered, setFiltered] = React.useState(todo)
  const addTodo = (taskTodo) => {
    if (taskTodo) {
      const newItem = {
        task: taskTodo,
        id: Math.random(),
        isProcess: true,
      };
      setTodo([newItem, ...todo]);
      setTask("");
      setAddText(true)
    } else {
      setAddText(false)
    }
  };
  const removeTodo = (id) => {
    setTodo([...todo.filter(todoElement => todoElement.id !== id)])
  }
  const lockTodo = (id) => {
    setTodo([...todo.filter(item => {
      if (item.id === id) {
        item.isProcess = !item.isProcess
      } return item
    })])
  }
  const filterTodo = (process) => {
    if (process === 'Все') {
      setFiltered(todo)
    } else if (process === 'Выполненные') {
      setFiltered([...todo.filter(item => item.isProcess === false)])
    } else if (process === 'Выполняются...') {
      setFiltered([...todo.filter(item => item.isProcess === true)])
    }
  }
  React.useEffect(() => {
    setFiltered(todo)
    
  }, [todo, load])
  setTimeout(() => {
    setLoad(true)
  }, 3000)
  return (
    <div className={!load ? "load" : ''}>
      {!load ? <span className="loading">Загружаю... &#128521;</span>
        :
        <div className="container">
          <Header todo={todo.length} />
          <FilterTask filterTodo={filterTodo} todo={todo} />
          <Task addText={addText} addTodo={addTodo} setTask={setTask} task={task} />
          {filtered.map((tasks, index) => (
            <Todo lockTodo={lockTodo} removeTodo={removeTodo} key={index} {...tasks} />
          ))}
        </div>
      }
      </div>
  );
}

      export default App;
