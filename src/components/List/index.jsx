import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Item from '../Item'
import './index.css'

export default class List extends Component {

	static propsTypes = {
		todos: PropTypes.array.isRequired,
		changeTodo: PropTypes.func.isRequired,
		deleteItem: PropTypes.func.isRequired
	}

	render() {
		const { todos, changeTodo, deleteItem } = this.props
		return (
			<ul className='todo-main'>
				{todos.map((item) => {
					return <Item key={item.id} item={item} changeTodo={changeTodo} deleteItem={deleteItem} />
				})}
			</ul>
		)
	}
}
