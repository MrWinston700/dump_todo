import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


function Todo({ todo, index, completeTodo }) {
  return <div className="todo" style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
    <p>{todo.text}</p>
  <div>
    <button onClick={() => completeTodo(index)}>Done</button>
  </div>
  </div>
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)}/>
    </form>
  )

  
}





function App() {
  const [todos, setTodos] = useState([
    {
      text: 'learning hooks',
      isCompleted: false 
    },
    {
      text: 'learning hooks 2',
      isCompleted: false 
    },
    {
      text: 'learning hooks 4',
      isCompleted: false 
    }

  ])

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos)
  }
  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className="todo-list">

        <TodoForm addTodo={addTodo} />

        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} />
        ))}

       

      </div>
    </div>
  )
}

export default App;
