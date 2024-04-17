import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NotFound from './pages/NotFound';

export default function Router() {
	const [token, setToken] = useState(localStorage.getItem('accessToken') || '');

	// useEffect to constantly check localStorage for token changes
	useEffect(() => {
		const tokenFromStorage = localStorage.getItem('accessToken');
		if (tokenFromStorage !== token) {
			setToken(tokenFromStorage || '');
		}
	}, [token]);

	return (
		<BrowserRouter>
			<main className='min-h-screen'>
				<Routes>
					{token ? (
						<>
							<Route
								path='/dashboard'
								element={<Dashboard setToken={setToken} />}
							/>
							<Route
								path='*'
								element={
									<NotFound
										route='/dashboard'
										name='BACK'
										message='PAGE NOT FOUND'
									/>
								}
							/>
						</>
					) : (
						<>
							<Route path='/' element={<Login setToken={setToken} />} />
							<Route path='/signup' element={<Signup setToken={setToken} />} />
							<Route
								path='*'
								element={
									<NotFound
										route='/'
										name='LOGIN'
										message='YOU ARE NOT AUTHORIZED'
									/>
								}
							/>
						</>
					)}
				</Routes>
			</main>
		</BrowserRouter>
	);
}
