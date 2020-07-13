import React, { useState } from 'react';

const TodoForm = (props) => {

    const { addTodo, clearTodo } = props

    const [todo,setTodo] = useState('')

    const handleChanges = e => {
        setTodo(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(todo);
        setTodo('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="item"
                onChange = {handleChanges}
                placeholder ="add and item here"
            />
            <button type = 'submit'> Add </button>
            <button onClick={clearTodo}>Clear List</button>
        </form>
        
    )
}

export default TodoForm