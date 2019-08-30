import React from 'react'

function TodoItem(props) {
    return(
        <div className="todoitem">
            <label><input type="checkbox"/>    {props.content}</label>
        </div>
    )
}

export default TodoItem
