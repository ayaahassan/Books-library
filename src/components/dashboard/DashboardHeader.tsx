import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DashboardHeader = () => {
	const [activeMenu, setActiveMenu] = useState<boolean>(false)
	const navigate = useNavigate()

	const Logout = () => {
		localStorage.clear()
		navigate('/login')
	}
	return (
		<div className="flex justify-between pr-24 py-4 pl-8 bg-white	">
			<div className="text-[#0D4ADB] font-bold">Acore admin dashboard</div>
			<div>
				<div className=" relative " onClick={() => setActiveMenu(!activeMenu)}>
					<span className="font-bold cursor-pointer">Super Admin</span>
					{activeMenu && (
						<ul className="absolute flex flex-col gap-y-2 left-0 rounded-lg p-2 border-2 bg-white shadow-white-900	">
							<li className="hover:bg-[#E6F4FF]">admin@example.com</li>
							<li className="cursor-pointer hover:bg-[#E6F4FF]" onClick={() => Logout()}>
								Logout
							</li>
						</ul>
					)}
				</div>
			</div>
		</div>
	)
}

export default DashboardHeader
