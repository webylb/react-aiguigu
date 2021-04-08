import React, { Component } from 'react'

export default class SearchListItem extends Component {
	render() {
		const { item } = this.props
		return (
			<div className='card'>
				<a href={item.html_url} target='_blank' rel="noreferrer">
					<img src={item.avatar_url} alt='' style={{ width: '100px' }} />
				</a>
				<p className='card-text'>{item.name}</p>
			</div>
		)
	}
}
