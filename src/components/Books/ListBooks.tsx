import { useState } from 'react'
import { Button, Space, Table } from 'antd'
import { BookTable } from '../../config/interfaces/Book/BookTable.interface'
import { NavLink, useNavigate } from 'react-router-dom'
import {
	DeleteOutlined,
	EditOutlined,
	EyeOutlined,
	PlusOutlined,
} from '@ant-design/icons'
import { Book } from '../../config/interfaces/Book/Book.interface'
import Search from '../Search/Search'
import { TableProps } from '../../config/interfaces/Tables/TableProps.interface'
import DeleteBook from './DeleteBook'

const ListBooks = ({ books }: TableProps) => {
	const [tableData, setTableData] = useState<Book[]>(books)
	const navigate = useNavigate()
	const [showDelete, setShowDelete] = useState(false)
	const [id, setId] = useState('0')
	const { Column } = Table
	return (
		<div>
			{showDelete && <DeleteBook id={id} setShowDelete={setShowDelete} />}{' '}
			<div className="flex w-full justify-between mb-4">
				<Search books={books} setFilter={setTableData} />
				<Button
					type="primary"
					size="large"
					className=" bg-[#1e50c7] w-1/6 flex items-center justify-center"
					onClick={() => navigate('/dashboard/books/add')}
				>
					<PlusOutlined />
					Add Book
				</Button>
			</div>
			<Table dataSource={tableData}>
				<Column title="Book Title" dataIndex="title" key="title" />
				<Column title="Book Category" dataIndex="category" key="category" />
				<Column title="Book Author" dataIndex="author" key="author" />
				<Column title="Book ISBN" dataIndex="isbn" key="isbn" />
				<Column title="Book Version" dataIndex="version" key="version" />

				<Column
					title="Action"
					key="action"
					render={(_: any, record: BookTable) => (
						<Space size="middle">
							<NavLink
								to={`/dashboard/books/show/${record.id}`}
								className={'text-[#0D4ADB]'}
							>
								<EyeOutlined />
							</NavLink>
							<NavLink
								to={`/dashboard/books/update/${record.id}`}
								className={'text-[#0D4ADB]'}
							>
								<EditOutlined />
							</NavLink>
							{/* <NavLink
								to={`/dashboard/books/delete/${record.id}`}
								className={'text-[#0D4ADB]'}
							> */}<div className={'text-[#0D4ADB]'}>
							<DeleteOutlined
									onClick={() => {
									setShowDelete(true)
									setId(`${record.id}`)
								}}
							/>
							</div>
							{/* </NavLink> */}
						</Space>
					)}
				/>
			</Table>
		</div>
	)
}

export default ListBooks
