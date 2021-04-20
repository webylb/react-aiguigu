import React, { Component } from 'react'
import { Button } from 'antd'
import { HomeOutlined, SettingFilled, SmileOutlined, SyncOutlined, LoadingOutlined } from '@ant-design/icons'
import Count from '../../components/Count'

export default class Index extends Component {
	render() {
		return (
			<div>
				123123
				<Button type='primary'>Primary Button</Button>
				<HomeOutlined />
				<SettingFilled />
				<SmileOutlined />
				<SyncOutlined spin />
				<SmileOutlined rotate={180} />
				<LoadingOutlined />
        <div>
          <Count/>
        </div>
			</div>
		)
	}
}
