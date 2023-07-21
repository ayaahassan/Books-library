import { Dispatch, SetStateAction  } from 'react'
import { useNavigate  } from 'react-router-dom'
import { Button, Card } from 'antd'
import { deleteEntity } from '../../config/api/crud'
import { toast } from 'react-toastify'
const DeleteBook = ({
	setShowDelete,
	id,
}: {
	setShowDelete: Dispatch<SetStateAction<boolean>>
	id: string
}) => {
	const navigate = useNavigate()
	const deleteData = async () => {
		try {
			const res = await deleteEntity('books', id!)
			toast.success('Deleted Successfully')
			navigate('/dashboard')
		} catch (e: any) {
			toast.error("Error occure !Can't delete Element")
		}
	}

	return (
		<div className="z-[999] absolute top-0 left-0 flex flex-col justify-center items-center h-screen w-screen ">
			<Card title="Delete Book" className="w-1/2 h-1/3">
				<p className="mb-4">Are you sure you want to delete this book?</p>
				<div className=" flex gap-x-4 flex-end	">
					<Button
						type="primary"
						size="large"
						className="bg-[#7b7c7e]"
						onClick={() => {
							setShowDelete(false)
						}}
					>
						Cancel
					</Button>
					<Button
						type="primary"
						size="large"
						className="bg-[#FF7875]"
						onClick={() => deleteData()}
					>
						Delete
					</Button>
				</div>
			</Card>
		</div>
	)
}

export default DeleteBook
