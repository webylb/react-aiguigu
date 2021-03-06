import React, { Component } from 'react'
import store from '../../redux/store'
import { createIncrementAction, createDecrementAction } from '../../redux/count_action'

export default class Count extends Component {
	state = {
		carName: '辣鸡',
		count: 0
	}

  // componentDidMount() {
  //   store.subscribe(() => {
  //     this.setState({})
  //   })
  // }

	increment = () => {
		const { value } = this.selectNumber
		// const { count } = this.state
		// this.setState({ count:  count + value * 1})
		store.dispatch(createIncrementAction(value * 1))
	}

	decrement = () => {
		const { value } = this.selectNumber
		// const { count } = this.state
		// this.setState({ count: count - value * 1 })
    store.dispatch(createDecrementAction(value * 1))
	}

	incrementIfOdd = () => {
		const { value } = this.selectNumber
		// const { count } = this.state
    const count = store.getState()
		if (count % 2 !== 0) {
			// this.setState({ count: count + value * 1 })
      store.dispatch({ type: 'increment', data: value * 1 })
		}
	}
	incrementAsync = () => {
		const { value } = this.selectNumber
		// const { count } = this.state
    // const count = store.getState()
		setTimeout(() => {
			// this.setState({ count: count + value * 1 })
      store.dispatch({ type: 'increment', data: value * 1 })
		}, 1000)
	}
	render() {
		const { count } = this.state
		return (
			<div>
				<h1>当前求和为: {store.getState()}</h1>
				<select ref={c => (this.selectNumber = c)}>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
				</select>
				<button onClick={this.increment}>+</button>
				<button onClick={this.decrement}>-</button>
				<button onClick={this.incrementIfOdd}>当前求和为奇数再+</button>
				<button onClick={this.incrementAsync}>异步+</button>
			</div>
		)
	}
}
