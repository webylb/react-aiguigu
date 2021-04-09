import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class SearchHeader extends Component {
	inputRef = React.createRef()

	handleSearch = async () => {
		const {
			inputRef: {
				current: { value }
			}
		} = this

		if (value.trim() !== '') {
			this.props.updateStatus({ isLoading: true, isFirst: false })
			// axios
			// 	.get('/api1/search/users2', { params: { q: value } })
			// 	.then(res => {
			// 		const {
			// 			data: { items }
			// 		} = res
			// 		setTimeout(() => {
			// 			// this.props.getUserList(items)
			// 			this.props.updateStatus({ isLoading: false, err: '' })
			// 			console.log('publish------------', items)
			// 			PubSub.publish('userList', items)
			// 		}, 2000)
			// 	})
			// 	.catch(e => {
			// 		console.log(e)
			// 		this.props.updateStatus({ isLoading: false, err: e.message })
			// 	})
			// fetch(`/api1/search/users2?q=${value}`)
			// 	.then(
			// 		response => {
			// 			return response.json()
			// 		},
			// 		// err => {
			// 		// 	return new Promise(() => {})
			// 		// }
			// 	)
			// 	.then(
			// 		response => {
			// 			console.log(response)
			// 			const { items } = response
			// 			this.props.updateStatus({ isLoading: false, err: '' })
			// 			console.log('publish------------', items)
			// 			PubSub.publish('userList', items)
			// 		}
			// 	).catch( err => {
			// 		console.log(err)
			// 	})
			try {
				const res = await fetch(`/api1/search/users2?q=${value}`)
				const { items } = await res.json()
				console.log(items)
			} catch(e) {
				console.log(e)
			}
		}
	}

	render() {
		return (
			<section className='jumbotron'>
				<h3 className='jumbotron-heading'>Search Github Users</h3>
				<div>
					<input ref={this.inputRef} type='text' placeholder='enter the name you search' />
					&nbsp;<button onClick={this.handleSearch}>Search</button>
				</div>
			</section>
		)
	}
}
