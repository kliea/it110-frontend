import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';

export default function Router() {
	const token = localStorage.getItem('accessToken');
	return (
		<BrowserRouter>
			<main className='min-h-screen'>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
					{token && <Route path='/dashboard' element={<Dashboard />} />}
					<Route path='*' element={<NotFound />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}
