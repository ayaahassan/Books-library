import React, { useEffect, useState } from 'react'
import BookForm from '../../components/Books/BookForm'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { findOne, update } from '../../config/api/crud'
import { Book } from '../../config/interfaces/Book/Book.interface'
import Loader from '../../components/UI/Loader'

const UpdateBook = () => {
	const { id } = useParams()
	const [book, setBook] = useState<Book>()
	const navigate = useNavigate()
	const[loading,setLoading]=useState<boolean>(true)
	useEffect(() => {
		(async () => {
			try {
				const res = await findOne('books', id!)
				setBook(res.data)
				console.log(res)
				setLoading(false)
			} catch (e) {
				toast.error('Book Not Found')
			}
		})()
	}, [])
	const onSubmit = async (data: any) => {
		try {

			const res = await update('books', data, id || '0')
			toast.success('Book updated successfully')
			navigate('/dashboard')
		} catch (e) {
			toast.error("can't update book")
		}
	}
	if (loading) {
		return <Loader/>
	}
	return (
		<div className="bg-[#fff] p-4 rounded">
			<BookForm onSubmit={onSubmit} book={book} />
		</div>
	)
}

export default UpdateBook
