import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'

export default class Item extends Component {
	state = {
		mouse: false
	}

	static propTypes = {
		item: PropTypes.object.isRequired,
		changeTodo: PropTypes.func.isRequired,
		deleteItem: PropTypes.func.isRequired
	}

	handleMouse = (flag) => {
		return () => {
			this.setState({ mouse: flag })
		}
	}

  handleCheck = (id) => {
    return (e) => {
      const status = e.target.checked
      this.props.changeTodo(id, status)
    }
  }

	deleteItem = (id) => {
		return () => {
			if(window.confirm('确定删除?')) {
				this.props.deleteItem(id)
			}
		}
  }

	render() {
		const { item } = this.props
		const { mouse } = this.state
		return (
			<li style={{ backgroundColor: mouse ? '#add' : 'white' }} onMouseLeave={this.handleMouse(false)} onMouseEnter={this.handleMouse(true)}>
				<label>
					<input type='checkbox' checked={item.done} onChange={this.handleCheck(item.id)} />
					<span>{item.name}</span>
				</label>
				<button className='btn btn-danger' onClick={this.deleteItem(item.id)} style={{ display: mouse ? 'block' : 'none' }}>
					删除
				</button>
			</li>
		)
	}
}
