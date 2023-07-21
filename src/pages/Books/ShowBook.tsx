import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Book } from '../../config/interfaces/Book/Book.interface'
import { findOne } from '../../config/api/crud'
import { toast } from 'react-toastify'
import ShowBookData from '../../components/Books/ShowBook'

const ShowBook = () => {
	const { id } = useParams()
	const [book, setBook] = useState<Book>({})
	useEffect(() => {
		;(async () => {
			try {
				const res = await findOne('books', id || '0')
				console.log(res)
				setBook(res.data)
			} catch (e) {
				toast.error('Book Not Found')
			}
		})()
	}, [])
	return (
		<div className="bg-[#fff] p-4 rounded">
			<ShowBookData book={book} />
		</div>
	)
}

export default ShowBook
