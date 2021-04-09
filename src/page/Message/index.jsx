import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from '../../components/Detail'

export default class Message extends Component {
	state = {
		messageArr: [
			{
				id: 1,
				title: '001',
				name: '12312313'
			},
			{
				id: 2,
				title: '002',
				name: 'qwenkjqwehkjqhwekjqwe'
			},
			{
				id: 3,
				title: '003',
				name: 'qweknqwkeqkjwbekqwjhekqwhekqjwehqwjewe'
			}
		]
	}

  handlePush = (item) => {
    return () => {
      // this.props.history.push(`/home/message/detail/${item.id}/${item.title}`)
      // this.props.history.push(`/home/message/detail?id=${item.id}&title=${item.title}`)
      this.props.history.push(`/home/message/detail`, {id: item.id, title: item.title})
    }
  }

  handleReplace = (item) => {
    return () => {
      this.props.history.replace(`/home/message/detail/${item.id}/${item.title}`)
    }
  }

	render() {
		const { messageArr } = this.state
		return (
			<div style={{ width: '500px', height: '500px', background: '#fff' }}>
				<h1>Message...........</h1>
        <div>
          {
            messageArr.map(item => {
              return (
                <div key={item.id}>
                  {/* params参数 */}
                  <Link to={`/home/message/detail/${item.id}/${item.title}`}>
                    {item.title}
                  </Link>
                  &nbsp;&nbsp;<button onClick={this.handlePush(item)}>handlePush</button>&nbsp;&nbsp;
                  <button onClick={this.handleReplace(item)}>handleReplace</button>
                  {/* search参数 */}
                  {/* <Link to={`/home/message/detail?id=${item.id}&title=${item.title}`}>
                    {item.title}
                  </Link> */}
                  {/* state参数 */}
                  {/* <Link replace to={{pathname:'/home/message/detail', state: {id:item.id, title: item.title }}}>
                    {item.title}
                  </Link> */}
                </div>
              )
            })
          }
        </div>
				{/* <Route path='/home/message/detail/:id/:title' component={Detail} /> */}
        <Route path='/home/message/detail' component={Detail} />
			</div>
		)
	}
}
