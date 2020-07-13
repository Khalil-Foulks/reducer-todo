import React from 'react';
import TodoCard from './TodoCard';

const TodoList = (props) => {
    const {todoListArray} = props

    return(
        <div className="taskList">
            {todoListArray.map(todo =>(
                <TodoCard todoList = {todo.item} key = {todo.id} />
            ))}
        </div> 
    )
}

export default TodoList