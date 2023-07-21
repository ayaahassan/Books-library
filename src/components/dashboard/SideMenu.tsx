import React, { useState } from 'react'
import { FileOutlined } from '@ant-design/icons'
import { Layout, Menu, theme } from 'antd'
import { useNavigate } from 'react-router-dom'
import { getItem } from '../../config/helpers/getTableItem'
import { MenuItem } from '../../config/types/Table.type'

const { Sider } = Layout

const SideMenu: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false)
	const navigate = useNavigate()
	const {
		token: { colorBgContainer },
	} = theme.useToken()
	const items: MenuItem[] = [
		getItem(
			<span className='w-full' onClick={() => navigate('/dashboard/books')}>Books</span>,
			'1',
			<FileOutlined onClick={() => navigate('/dashboard/books')} />
		),
	]
	return (
		<Sider
			collapsible
			collapsed={collapsed}
			onCollapse={(value) => setCollapsed(value)}
      theme="light"
		>
			<div className="demo-logo-vertical" />
			<Menu
				// theme="dark"
				defaultSelectedKeys={['1']}
				mode="inline"
				items={items}
			/>
		</Sider>
	)
}

export default SideMenu
