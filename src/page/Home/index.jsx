import React, { Component } from 'react'
import { NavLink, Route, Switch, Redirect } from 'react-router-dom'

import News from '../News'
import Message from '../Message'

export default class Home extends Component {

  render() {
    return (
      <div  style={{ width: '800px', height: '800px', background: '#ddd'}}>
        home
          <div>
            <NavLink to='/home/news'>news</NavLink>
            <NavLink to='/home/message'>message</NavLink>
          </div>
          <Switch>
						<Route path='/home/news' exact component={News}></Route>
						<Route path='/home/message' component={Message}></Route>
            <Redirect to='/home/news' />
					</Switch>
      </div>
    )
  }
}
