import { yupResolver } from '@hookform/resolvers/yup'
import {
	Button,
	DatePicker,
	Form,
	Input,
	Select,
	Upload,
	UploadProps,
} from 'antd'
import { useEffect, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { BookValidationSchema } from '../../config/validations/BookValidationSchema'
import TextArea from 'antd/es/input/TextArea'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'
import { RcFile, UploadChangeParam, UploadFile } from 'antd/es/upload'
import { beforeUpload, getBase64 } from '../../config/helpers/imageUrl'
import { BookFormProps } from '../../config/interfaces/Book/BookFormProps.interface'
import UploadButton from '../UI/UploadButton'

const BookForm = ({ onSubmit, book }: BookFormProps) => {
	const navigate = useNavigate()
	const [imageUrl, setImageUrl] = useState<string>()
	const [loading, setLoading] = useState(false)

	const {
		control,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm({
		resolver: yupResolver(BookValidationSchema),
	})

	useEffect(() => {
		if (book) {
			setValue('title', book.title)
			setValue('author', book.author)
			setValue('category', book.category)
			setValue('price', book.price)
			setValue('version', book.version)
			setValue('olderVersion', book.olderVersion)
			setValue('edition', book.edition)
			setValue('isbn', book.isbn)
			setValue('cover', book.cover)
			setValue('brief', book.brief)
		}
	}, [book])

	const handleChange: UploadProps['onChange'] = (
		info: UploadChangeParam<UploadFile>
	) => {
		if (info.file.status === 'uploading') {
			setLoading(true)
			return
		}
		if (info.file.status === 'done') {
			getBase64(info.file.originFileObj as RcFile, (url) => {
				setLoading(false)
				console.log({ url })
				setImageUrl(url)
				setValue('cover', url)

			})
			// setImageUrl(info.file.response.url)
			//setValue('cover', info.file.response.url)
		}
		//setImageUrl(info.file.response.url)
		console.log("tttt",info.file.response.url)
	}

	return (
		<div>
			<form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
				<div className="flex gap-x-10">
					<div className=" flex justify-items-center flex-col w-1/2 gap-y-2">
						<Controller
							name="title"
							control={control}
							render={({ field }) => {
								return (
									<Input
										style={{ backgroundColor: '#EFF1FD' }}
										placeholder="Book Title"
										defaultValue={book?.title}
										{...field}
									/>
								)
							}}
						/>
						<p className="text-red-600">{errors.title?.message}</p>

						<Controller
							name="author"
							control={control}
							render={({ field }) => {
								return (
									<Input
										{...field}
										style={{ backgroundColor: '#EFF1FD' }}
										placeholder="Book Author"
										defaultValue={book?.author}
									/>
								)
							}}
						/>
						<p className="text-red-600">{errors.author?.message}</p>
						<Controller
							name="category"
							control={control}
							render={({ field }) => {
								return (
									<Select
										style={{ backgroundColor: '#EFF1FD' }}
										placeholder="Book Category"
										className="bg-[#EFF1FD]"
										defaultValue={book?.category}
										{...field}
									>
										<Select.Option value="Software">Software</Select.Option>
										<Select.Option value="Frontend">Frontend</Select.Option>
										<Select.Option value="Backend">Backend</Select.Option>
									</Select>
								)
							}}
						/>
						<p className="text-red-600">{errors.category?.message}</p>

						<Controller
							name="price"
							control={control}
							render={({ field }) => {
								return (
									<Input
										style={{ backgroundColor: '#EFF1FD' }}
										placeholder="Book Price"
										defaultValue={book?.price}
										{...field}
									/>
								)
							}}
						/>
						<p className="text-red-600">{errors.price?.message}</p>
						<Controller
							name="version"
							control={control}
							render={({ field }) => {
								return (
									<Input
										style={{ backgroundColor: '#EFF1FD' }}
										placeholder="Book Version"
										defaultValue={book?.version}
										{...field}
									/>
								)
							}}
						/>
						<p className="text-red-600">{errors.version?.message}</p>
						<Controller
							name="olderVersion"
							control={control}
							render={({ field }) => {
								return (
									<Input
										style={{ backgroundColor: '#EFF1FD' }}
										placeholder="Book Older Version"
										defaultValue={book?.olderVersion}
										{...field}
									/>
								)
							}}
						/>
						<p className="text-red-600">{errors.olderVersion?.message}</p>

						<Controller
							name="edition"
							control={control}
							render={({ field }) => {
								return (
									<Input
										style={{ backgroundColor: '#EFF1FD' }}
										placeholder="Book Edition"
										defaultValue={book?.edition}
										{...field}
									/>
								)
							}}
						/>
						<p className="text-red-600">{errors.edition?.message}</p>

						<Controller
							name="isbn"
							control={control}
							render={({ field }) => {
								return (
									<Input
										style={{ backgroundColor: '#EFF1FD' }}
										placeholder="Book ISBN"
										defaultValue={book?.isbn}
										{...field}
									/>
								)
							}}
						/>
						<p className="text-red-600">{errors.isbn?.message}</p>
						<Controller
							name="date"
							control={control}
							render={({ field }) => {
								return (
									<DatePicker defaultValue={dayjs(book?.date)} {...field} />
								)
							}}
						/>
						<p className="text-red-600">{errors.date?.message}</p>
					</div>
					<div className="w-1/2  flex flex-col gap-y-2">
						<Controller
							name="cover"
							control={control}
							render={({ field }) => {
								return (
									// <Upload
									// 	listType="picture-card"
									// 	className="avatar-uploader"
									// 	showUploadList={false}
									// 	//action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
									// 	beforeUpload={beforeUpload}
									// 	onChange={handleChange}
									// 	{...field}
									// >
									// 	{imageUrl ? (
									// 		<img
									// 			src={imageUrl}
									// 			alt="avatar"
									// 			style={{ width: '100%' }}
									// 		/>
									// 	) : (
									// 		uploadButton
									// 	)}
									// </Upload>
									<Form.Item
										{...field}

										// 	valuePropName="fileList"
										// 	getValueFromEvent={normFile}
										//
									>
										<Upload
											name="cover"
											listType="picture-card"
											className="avatar-uploader"
											showUploadList={false}
											action="https://fakeql.com/upload"
											beforeUpload={beforeUpload}
											onChange={handleChange}
										>
											{imageUrl ? (
												<img
													src={imageUrl}
													alt="avatar"
													style={{ width: '100%' }}
												/>
											) : (
												<img
													src={book?.cover}
													alt="avatar"
													className="w-full h-full"
												/>
											)}
										</Upload>
									</Form.Item>
								)
							}}
						/>
						<p className="text-red-600">{errors.cover?.message}</p>
						<Controller
							name="brief"
							control={control}
							render={({ field }) => {
								return (
									<TextArea
										style={{ backgroundColor: '#EFF1FD' }}
										placeholder="Book Brief"
										defaultValue={book?.brief}
										{...field}
										rows={4}
									/>
								)
							}}
						/>
						<p className="text-red-600">{errors.brief?.message}</p>
						<div className="flex gap-x-5 ">
							<Button
								type="primary"
								htmlType="submit"
								className="bg-[#7b7c7e]"
								onClick={() => navigate('/dashboard/books')}
							>
								cancel
							</Button>
							<Button type="primary" htmlType="submit" className="bg-[#1e50c7]">
								Submit
							</Button>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default BookForm
