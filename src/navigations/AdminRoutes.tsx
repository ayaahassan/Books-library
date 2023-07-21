import { Navigate, Outlet, RouteObject } from 'react-router-dom'
import DeleteBook from '../components/Books/DeleteBook'
import React, { Suspense } from 'react'
import Loader from '../components/UI/Loader'

const Books = React.lazy(() => import('../pages/Books/Books'))
const AddBook = React.lazy(() => import('../pages/Books/AddBook'))
const UpdateBook = React.lazy(() => import('../pages/Books/UpdateBook'))
const ShowBook = React.lazy(() => import('../pages/Books/ShowBook'))

export const AdminRoutes: Array<RouteObject> = [
	{
		path: '',
		element: <Navigate to="/dashboard/books"/>
		
	},
	{
		path: 'books',
		element: <Outlet />,
		children: [
			{
				path: '',
				index:true,
				element: (
					<Suspense fallback={<Loader/>}>
						<Books />
					</Suspense>
				),
			},
			{
				path: 'add',
				element: 
				(
					<Suspense fallback={<Loader/>}>
				     <AddBook />,
					</Suspense>
				),
			},
			{
				path: 'update/:id',
				element: 
				(
					<Suspense fallback={<Loader/>}>
			    	<UpdateBook />,
					</Suspense>
				),
			},
			// {
			// 	path: 'delete/:id',
			// 	element: <DeleteBook />,
			// },
			{
				path: 'show/:id',
				element: (
					<Suspense fallback={<Loader/>}>
			    	<ShowBook />,
					</Suspense>
				),
			},
		],
	},
]
