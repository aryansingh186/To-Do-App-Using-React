import { useState } from "react";
import TodoInput from "./component/TodoInput";
import "./App.css";

function App() {
  const [listTodo, setListTodo] = useState([]);

  // add task
  const addList = (inputText) => {
    setListTodo([...listTodo, { text: inputText, isDone: false }]);
  };

  // toggle done
  const toggleDone = (key) => {
    const newList = listTodo.map((item, index) =>
      index === key ? { ...item, isDone: !item.isDone } : item
    );
    setListTodo(newList);
  };

  // delete task
  const deleteItem = (key) => {
    const newList = listTodo.filter((_, index) => index !== key);
    setListTodo(newList);
  };

  // filter
  const tasksTodo = listTodo.filter((item) => !item.isDone);
  const tasksDone = listTodo.filter((item) => item.isDone);

  return (
    <div className="main-container">
      <div className="center-container">
        <h1>Todo App</h1> 
        <TodoInput addlist={addList} />

        <div className="section">
          <h3>Tasks to do - {tasksTodo.length}</h3>
          {tasksTodo.map((item, i) => (
            <TaskCard
              key={i}
              item={item}
              index={i}
              toggleDone={toggleDone}
              deleteItem={deleteItem}
            />
          ))}
        </div>

        <div className="section">
          <h3>Done - {tasksDone.length}</h3>
          {tasksDone.map((item, i) => (
            <TaskCard
              key={i}
              item={item}
              index={listTodo.indexOf(item)}
              toggleDone={toggleDone}
              deleteItem={deleteItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function TaskCard({ item, index, toggleDone, deleteItem }) {
  return (
    <div className="task-card">
      <span
        style={{
          textDecoration: item.isDone ? "line-through" : "none",
        }}
      >
        {item.text}
      </span>
      <div className="actions">
        <button className="done-btn" onClick={() => toggleDone(index)}>
          ✔
        </button>
        <button className="delete-btn" onClick={() => deleteItem(index)}>
          🗑
        </button>
      </div>
    </div>
  );
}

export default App;

