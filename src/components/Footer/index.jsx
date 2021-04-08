import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './index.css'
export default class Footer extends Component {
	static propTypes = {
    todos: PropTypes.array.isRequired,
		selectAll: PropTypes.func.isRequired,
		deleteCompleted: PropTypes.func.isRequired,
	}

	selectAll = (e) => {
		const status = e.target.checked
		this.props.selectAll(status)
	}

	render() {
		const { todos, deleteCompleted } = this.props
		const arrLength = todos.length
		const completedLength = todos.filter((item) => item.done).length
    const doneCount = todos.reduce((pre, cur) => {return pre + ( cur.done ? 1 : 0)}, 0)
		return (
			<div className='todo-footer'>
				<label>
					<input type='checkbox' checked={completedLength === arrLength && arrLength !== 0 ? true : false} onChange={this.selectAll} />
				</label>
				<span>
					<span>已完成{completedLength} {doneCount}</span> / 全部{arrLength}
				</span>
				<button className='btn btn-danger' onClick={deleteCompleted}>
					清除已完成任务
				</button>
			</div>
		)
	}
}
