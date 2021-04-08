import React, { Component } from 'react'
import axios from 'axios'

import Header from '../../components/Header'
import List from '../../components/List'
import Footer from '../../components/Footer'

export default class TodoList extends Component {
	state = {
		todos: [
			{ id: '001', name: '吃饭', done: true },
			{ id: '002', name: '睡觉', done: true },
		],
	}

	componentDidMount() {
		console.log('111')

		axios.get('http://localhost:3000/api1/students').then((res) => {
			console.log(res)
		}).catch(e => {
			console.log(e)
		})


		axios.get('http://localhost:3000/api2/cars').then((res) => {
			console.log(res)
		}).catch(e => {
			console.log(e)
		})



	}

	addTodo = (item) => {
		const { todos } = this.state
		const newTodos = [item, ...todos]
		this.setState({ todos: newTodos })
	}

	changeTodo = (id, done) => {
		const { todos } = this.state
		const newTodos = todos.map((item) => {
			if (item.id === id) return { ...item, done }
			return item
		})
		this.setState({ todos: newTodos })
	}

	deleteItem = (id) => {
		const { todos } = this.state
		const newTodos = todos.filter((item) => item.id !== id)
		this.setState({ todos: newTodos })
	}

	selectAll = (status) => {
		console.log(status)
		const { todos } = this.state
		const newTodos = todos.map((item) => {
			return { ...item, done: status }
		})
		this.setState({ todos: newTodos })
	}

	deleteCompleted = () => {
		const { todos } = this.state
		const newTodos = todos.filter((item) => !item.done)
		this.setState({ todos: newTodos })
	}

	render() {
		const { todos } = this.state

		return (
			<div>
				<div className='todo-container'>
					<div className='todo-wrap'>
						<Header addTodo={this.addTodo} />
						<List todos={todos} changeTodo={this.changeTodo} deleteItem={this.deleteItem} />
						<Footer todos={todos} selectAll={this.selectAll} deleteCompleted={this.deleteCompleted} />
					</div>
				</div>
			</div>
		)
	}
}
