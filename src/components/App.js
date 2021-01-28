import React from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData' 

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.done = !todo.done
                }
                return todo
            })
            return {
                todos : updatedTodos
            }
        })
    }

    render() {
        const todoComponents = this.state.todos.map(item => 
            <TodoItem  
                key = {item.id} 
                todoData = {item}
                handleChange = {this.handleChange}
            />
        )
        return (
            <div className = 'todo-list'>
                {todoComponents}
            </div>
        )
    }
}

export default App