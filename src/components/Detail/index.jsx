import React, { Component } from 'react'
import qs from 'querystring'

export default class Detail extends Component {
  render() {
    console.log(this.props)
    // const { match: { params } } = this.props
    // const { location: { search } } = this.props
    // const params = qs.parse(search.slice(1))
    // console.log(params)
     const { location: { state } } = this.props
     const params = state || {}
    return (
      <div>
        <h2>{ params.id }</h2>
        <h2>{ params.title }</h2>
      </div>
    )
  }
}
