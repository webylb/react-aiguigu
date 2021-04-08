import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';
import './index.css'

export default class Header extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

	handleKeyUp = (event) => {
    const { keyCode, target } = event
    if(keyCode !== 13) return
    if(target.value.trim() === '') {
      return
    }
    const item = {
      id: nanoid(),
      name: target.value,
      done: false
    }
    this.props.addTodo(item)
    target.value = ''
	}

	render() {
		return (
			<div className='todo-header'>
				<input type='text' onKeyUp={this.handleKeyUp} placeholder='请输入你的任务名称，按回车键确认' />
			</div>
		)
	}
}
