import { useState } from 'react'
import { Book } from '../../config/interfaces/Book/Book.interface'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import DeleteBook from './DeleteBook'
interface ShowBookProps {
	book: Book
}
const ShowBookData = ({ book }: ShowBookProps) => {
	const navigate = useNavigate()
    const [show,setShow]=useState(false) 
	return (
		<div className="p-4 h-full ">
            {show&&<DeleteBook/>}   
			<div className="flex gap-x-8  mb-4 ">
				<img
					src={book.cover}
					alt="book cover"
					className="w-[200px] h-[200px]"
				/>
				<div className='flex flex-col w-2/3 gap-y-4'>
					<h2 className='font-bold text-2xl'>{book.title}</h2>
					<div className="flex gap-x-4">
						<div>
							<h2 className='font-bold text-lg text-[#1e50c7]'>478</h2>
							<h2>Pages</h2>
						</div>
						<div>
							<h2 className='font-bold text-lg text-[#1e50c7]'>20hr</h2>
							<h2 >to read</h2>
						</div>
					</div>
				</div>
				<div className=" flex gap-x-4 flex-end	">
					<Button
						type="primary"
						size="large"
						className="bg-[#f75d5a]"
						onClick={() => setShow(true) }
					>
						Delete
					</Button>
					<Button type="primary" size="large" className="bg-[#1e50c7]" onClick={() => navigate(`/dashboard/books/update/${book.id}`)}>
						Edit
					</Button>
				</div>
			</div>
			<div className="flex gap-x-25 text-[#7b7c7e ] w-full">
				<div className='w-2/5'>
                   <p>{`By ${book.author} | ${book.date}`}</p> 
                   <p className='font-bold'> <span>$ </span>{book.price}</p>
                   <p>{`ISBN ${book.isbn}`}</p>
                   <p>{`Version: ${book.version}`}</p>
                </div>
                <div className=' w-3/5'>
                    <h2 className='font-bold text-xl'>Brief</h2>
                    <p>{book.brief}</p>
                </div>
			</div>

		</div>
	)
}

export default ShowBookData
