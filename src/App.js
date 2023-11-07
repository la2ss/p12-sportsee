import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Profile from './pages/Profile/Profile'
import Error404 from './pages/Error/Error'


// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/js/bootstrap.bundle";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Profile />} />
				<Route path="/profiler" element={<Profile />} />
				<Route path="/user/:userId" element={<Home />} />
				<Route path="*" element={<Error404 />} />
				<Route path="/Communaute" element={<Profile />} />
				<Route path="/Reglage" element={<Profile />} />
				{/* <Route path="/" element={<Home />} />
				<Route path="/user/:userId" element={<Profile />} />
				<Route path="*" element={<Error404 />} /> */}
			</Routes>
		</div>
	)
}

export default App