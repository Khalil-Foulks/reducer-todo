import React from 'react';

const TodoList = (props) => {
    const {todoListArray, toggleTodo} = props

    return(
        <div className="taskList">
            <div className = "wrapper">
                {
                    todoListArray.map(task => {
                        return <div
                            key = {task.id}
                            onClick={() => toggleTodo(task.id)}
                            className={`item${task.completed? " completed" : ""}`}
                        >
                            <p> {task.item} </p>
                        </div>
                    })
                }
            </div>
        </div> 
    )
}

export default TodoList