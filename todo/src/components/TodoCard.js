import React from 'react'

const TodoCard = (props) => {

    const { todoList } = props
    console.log(todoList)


    return (
        <div>
            <p> {todoList} </p>
        </div>
    )
}

export default TodoCard;