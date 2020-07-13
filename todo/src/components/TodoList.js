import React, { useState, useReducer } from 'react';
import TodoCard from './TodoCard';
import { reducer, initialState } from '../reducers/todoReducer';

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState); 

    



    return(
        <div>
            {state.toDoList.map(todo =>(
                <TodoCard todoList = {todo.item} key = {todo.id} />
            ))}
        </div> 
    )
}

export default TodoList