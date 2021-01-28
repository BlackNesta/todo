import React from 'react'

function TodoItem(props) {
    const completedStyle = {
        fontStyle: 'italix',
        color: '#cdcdcd',
        textDecoration: 'line-through'
    }
    return (
        <div className='todo-item'>
            <input 
                type = "checkbox" 
                checked = {props.todoData.done} 
                onChange = {() => props.handleChange(props.todoData.id)}
            />
            <p style = {props.todoData.done ? completedStyle: null}>{props.todoData.task}</p>
        </div>
        )
}

export default TodoItem