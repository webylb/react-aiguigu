import React, { Component, lazy, Suspense} from 'react'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import LayoutHeader from '../../components/LayoutHeader'
// import Home from '../Home'
import About from '../About'

const Home = lazy(() => { import('../Home') })

export default class Layout extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<LayoutHeader />
					<Switch>
						<Suspense fallback={<h1>Loading...</h1>}>
							<Route path='/about' exact component={About}></Route>
							<Route path='/home' component={Home}></Route>
							<Route path='/home' component={LayoutHeader}></Route>
							<Redirect to='/home' />
						</Suspense>
					</Switch>
				</BrowserRouter>
			</div>
		)
	}
}
