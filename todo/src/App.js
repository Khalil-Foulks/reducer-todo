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

  const clearTodo = () => {
    console.log("Cleared")
    dispatch({type:"CLEAR"})
  }

  return (
    <div className="App">
      <TodoForm addTodo = {addTodo} clearTodo={clearTodo}/>
      <TodoList todoListArray = {state.toDoList} toggleTodo={toggleTodo}/>
    </div>
  );
}

export default App;
