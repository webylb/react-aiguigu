import React, { Component } from 'react'

import SearchHeader from '../../components/SearchHeader'

import SearchList from '../../components/SearchList'

import './bootstrap.css'

import './index.css'

export default class SearchUser extends Component {
	state = {
		userList: [],
		isFirst: true,
		isLoading: false,
		err: '',
	}

	getUserList = userList => {
		this.setState({ userList })
	}

  updateStatus = (e) => {
		console.log(e)
    this.setState(e)
  }

	changeIsFirst = isFirst => {
		this.setState({ isFirst })
	}

	changeIsLoading = isLoading => {
		this.setState({ isLoading })
	}

	getErr = err => {
		this.setState({ err })
	}

	render() {
		const { userList, isFirst, isLoading, err } = this.state
		return (
			<div className='container'>
				<SearchHeader getUserList={this.getUserList}
        updateStatus={this.updateStatus}/>
				<SearchList isFirst={isFirst} isLoading={isLoading} err={err} userList={userList} />
			</div>
		)
	}
}
