import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import LayoutHeader from '../../components/LayoutHeader'
import Home from '../Home'
import About from '../About'

export default class Layout extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<LayoutHeader />
					<Switch>
						<Route path='/about' exact component={About}></Route>
						<Route path='/home' component={Home}></Route>
						<Route path='/home' component={LayoutHeader}></Route>
            <Redirect to='/home' />
					</Switch>
				</BrowserRouter>
			</div>
		)
	}
}
