import React, { useState } from 'react';

const TodoForm = (props) => {

    const { addTodo } = props

    const [todo,setTodo] = useState('')

    const handlesChanges = e => {
        setTodo(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(todo);
        setTodo('');
    }

    return(
        <form onClick={handleSubmit}>
            <input 
                type="text"
                name="item"
                onChange = {handlesChanges}
                placeholder ="add and item here"
            />
            <button 
                type = 'submit' 
                onClick={() => {
                
            }}>
                Add
            </button>
            <button>Clear List</button>
        </form>
        
    )
}

export default TodoForm