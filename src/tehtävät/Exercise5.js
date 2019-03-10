import React, { Component } from 'react';
import '../App.css'
import TodoTable from './TodoTable';


class Exercise5 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoList: [],
            description: '',
            date: '',
        }
    }
    inputChanged = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    addTodo = (event) => {
        event.preventDefault()
        const newTodo = {
            description: this.state.description,
            date: this.state.date
        }
        this.setState({
            todoList: [...this.state.todoList, newTodo]
        })
    }
    
    deleteTodo = (index) => {
        const todo = this.state.todoList.filter((todo, i) => i !== index)
        this.setState({
            todoList: todo
        })
    } 
    render() {
        return (
            <div className="container"> 
                <div className="formContainer">
                    <h3 className="e5h1">Add todo</h3>
                    <form className="form-inline" onSubmit={this.addTodo}>
                        <div className="form-group">
                            <label>Description: </label>
                            <input className="form-control mx-ms-3" type="text" onChange={this.inputChanged} name="description" value={this.state.description} />
                        </div>
                        <div className="form-group">
                            <label>Date:</label>
                            <input className="form-control mx-ms-3" type="text" onChange={this.inputChanged} name="date" value={this.state.date} />
                        </div>
                        <input type="submit" className="btn btn-primary" value="Add" />
                    </form>
                </div>
                <TodoTable todo={this.state.todoList} deleteTodo={this.deleteTodo}/>
            </div>
        )
    }
}

export default Exercise5;