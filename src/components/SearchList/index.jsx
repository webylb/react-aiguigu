import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import SearchListItem from '../SearchListItem'

export default class SearchList extends Component {

  state = {
    userList: []
  }

  componentDidMount() {
    this.token = PubSub.subscribe('userList', (msg, data) => {
      console.log('subscribe------------', data)
      if(msg) {
        this.setState({userList: data})
      }
    })
  }

  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }

	render() {
		const { isFirst, isLoading, err } = this.props
		return (
			<div className='row'>
				{
          isFirst ?  '欢迎使用' :
          isLoading ? 'Loading...' :
          err ? err :
          this.userList.map((item) => {
            return <SearchListItem item={item} key={item.id} />
          })
        }
			</div>
		)
	}
}
