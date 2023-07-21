import { ToastContainer } from 'react-toastify'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './navigations/Routes'
import 'react-toastify/dist/ReactToastify.css'

function App() {
	return (
		<>
			<Router>
				<Routes />
				<ToastContainer
					position="top-center"
					autoClose={3000}
					pauseOnHover={false}
				/>
			</Router>
		</>
	)
}

export default App
