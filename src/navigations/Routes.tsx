import { Navigate, Outlet, useNavigate, useRoutes } from 'react-router-dom'
import LoginPage from '../pages/Auth/Login'
import ListBooks from '../components/Books/ListBooks'
import React, { Suspense } from 'react'
import { AdminRoutes } from './AdminRoutes'
import { Role } from '../config/enums/Roles.enum'
import NotFound from '../pages/NotFound'
import Loader from '../components/UI/Loader'
const DashboardWrapper = React.lazy(
	() => import('../pages/Dashboard/DashboardWrapper')
)
const Routes = () => {
	const token=localStorage.getItem('token')
	const role=localStorage.getItem('role')

	return useRoutes([
		{
			path: '/',
			element: <Outlet />,
			children: [
				{
					path: '',
					index:true,
					element: token&&Role.ADMIN==role?<Navigate to='/dashboard'/>: <LoginPage />,
				},
			],
		},
		{
			path: '/login',
			element:token?<Navigate to='/dashboard'/>: <LoginPage />,

		},
		{
			path: 'dashboard',
			element: token&&Role.ADMIN==role?(
				<Suspense fallback={<Loader/>}>
					<DashboardWrapper />
				</Suspense>
			):(<Navigate to="/login"/>),
			children: role===Role.ADMIN?[...AdminRoutes]:[],
		},
		{
			path:'*',
			element:<NotFound/>
		}
	])
}
export default Routes
