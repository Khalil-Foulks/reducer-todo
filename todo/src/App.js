import React, { useReducer } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'
import './App.css';
import { reducer, initialState } from './reducers/todoReducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState); 

  const addTodo = todo => {
    dispatch({ type: "ADD", payload: todo});
  }

  const toggleTodo = id => {
    dispatch({ type: "TOGGLE", payload: id})
  }

  return (
    <div className="App">
      <h1>Testing</h1>
      <TodoForm addTodo = {addTodo}/>
      <TodoList todoListArray = {state.toDoList} toggleTodo={toggleTodo}/>
    </div>
  );
}

export default App;
