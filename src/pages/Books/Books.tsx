import React, { useEffect, useState } from 'react'
import ListBooks from '../../components/Books/ListBooks'
import { findAll } from '../../config/api/crud'
import { toast } from 'react-toastify'
import { Book } from '../../config/interfaces/Book/Book.interface'

const Books : React.FC= () => {
  const [books,setBooks]=useState<Book[]>([])
  useEffect(() => {
		(async () => {
			try
			{const res = await findAll('books')
			setBooks(res.data)
		}
			catch(e)
			{
				toast.error("Books Not Found")
			}
		})()
	}, [])
  return (
	<>
     <h2 className='font-bold text-3xl'>Books</h2>
	 <ListBooks books={books}/>
	</>
    
    )
}

export default Books