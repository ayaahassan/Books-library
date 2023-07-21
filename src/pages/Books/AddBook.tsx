import React from 'react'
import BookForm from '../../components/Books/BookForm'
import { create } from '../../config/api/crud'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const AddBook = () => {
	const navigate = useNavigate()
	const onSubmit = async (data: any) => {
		try {
			const res = await create('books', {...data,key:data.id})
			toast.success('Book added successfully')
			navigate('/dashboard')
		} catch (e) {
			toast.error("can't create book")
		}
	}
	return (
		<>
			<h2 className="font-bold text-3xl mb-2">Add Book</h2>
			<div className="bg-[#fff] p-4 rounded">
				<BookForm onSubmit={onSubmit} />
			</div>
		</>
	)
}

export default AddBook
