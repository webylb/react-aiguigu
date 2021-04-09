import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class LayoutHeader extends Component {
  render() {
    return (
      <div>
        <NavLink to='/about'>about</NavLink>
        <NavLink to='/home'>home</NavLink>
        <NavLink to='/home/2'>home2</NavLink>
      </div>
    )
  }
}
