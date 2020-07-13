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

    const handleClearSubmit = e =>{
        e.preventDefault();
        clearTodo()
    }

    return(
        <form>
            <input 
                type="text"
                name="item"
                onChange = {handleChanges}
                value={todo}
                placeholder ="add and item here"
            />
            <button 
                onClick={handleSubmit}
                type ="submit"
            > 
            Add 
            </button>
            <button onClick={handleClearSubmit}>Clear List</button>
        </form>
        
    )
}

export default TodoForm