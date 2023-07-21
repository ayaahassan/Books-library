import { Controller, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import booksLogin from '../../assets/LoginAssets/booksLogin.jpg'
import { loginValidationSchema } from '../../config/validations/loginValidationSchema'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { ILoginDataInterface } from '../../config/interfaces/Auth/LoginData.interface'
import { Role } from '../../config/enums/Roles.enum'
import { Button, Input } from 'antd'

import logo from '../../assets/logo.png'
const Login = () => {
	const navigate = useNavigate()
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(loginValidationSchema),
	})

	const onSubmit = (data: ILoginDataInterface) => {
		if (data.email == 'admin@example.com' && data.password == '123456') {
			const token = Math.random().toString(36).substr(2)
			localStorage.setItem('token', token)
			localStorage.setItem('role', Role.ADMIN)
			toast.success('login Successfully')
			navigate(`/dashboard`)
		} else {
			toast.error('Invalid credential')
		}
	}

	return (
		<div className="h-screen w-screen flex bg-[#EFF1FD] justify-center items-center p-16 ">
			<div className="flex h-full w-full rounded-xl bg-[#fff] overflow-hidden	 ">
				<div className="w-3/5 p-12 flex flex-col gap-y-4	">
					<h2 className="text-md font-bold w-2/3">
						Please Enter your email address and password to access your account
					</h2>
					<form
						className="flex flex-col gap-y-5"
						onSubmit={handleSubmit(onSubmit)}
					>
						<Controller
							name="email"
							control={control}
							render={({ field }) => {
								return (
									<Input
										style={{ backgroundColor: '#EFF1FD' }}
										placeholder="Email Address"
										{...field}
									/>
								)
							}}
						/>
						<p className="text-red-600">{errors.email?.message}</p>

						<Controller
							name="password"
							control={control}
							render={({ field }) => {
								return (
									<Input.Password
										style={{ backgroundColor: '#EFF1FD' }}
										placeholder="input password"
										{...field}
									/>
								)
							}}
						/>

						<p className="text-red-600">{errors.password?.message}</p>

						<Button type="primary" htmlType="submit" className='bg-[#1e50c7] w-1/6'>
							Submit
						</Button>

						<hr />
						<img src={logo} alt="logo image" className="w-[100px] h-[100px]" />
					</form>
				</div>
				<div className="w-2/5 h-full ">
					<img
						className="w-full h-full object-cover"
						src={booksLogin}
						alt="login image"
					/>
				</div>
			</div>
		</div>
	)
}

export default Login
