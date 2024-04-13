import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png';
import axios from '../axios';

export default function Login({ setToken }) {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const navigate = useNavigate();

	const login = async (email, password) => {
		try {
			const res = await axios.post(`/login`, {
				email: email,
				password: password,
			});
			console.log(res);
			localStorage.setItem('accessToken', res.data.token);
			setToken(true);
			return { success: true };
		} catch (err) {
			return { success: false, message: err.response.data.error };
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const authStatus = await login(email, password);
			console.log(authStatus);
			if (authStatus.success) {
				// Check if authStatus is true before navigating
				navigate('/dashboard');
			} else {
				setEmail('');
				setPassword('');
				console.log(authStatus.message);
			}
		} catch (error) {
			console.error(error); // Handle error
		}

		setEmail('');
		setPassword('');
	};
	return (
		<div className='min-h-screen bg-[#011627]  flex flex-col'>
			<div className='flex justify-end mt-3 mx-3'>
				<button
					onClick={() => {
						navigate('/signup');
					}}
					className=' text-white bg-[#f25f4c] p-2 rounded-xl enabled:hover:bg-red-500 hover:border-2 hover:border-white '>
					<h1 className='text-lg font-bold tracking-widest'>SIGNUP</h1>
				</button>
			</div>
			<div className='flex-1 flex justify-center items-center'>
				<form
					onSubmit={handleSubmit}
					className='bg-[#fffffe] rounded-2xl p-10 flex flex-col gap-2 shadow-lg shadow-black'>
					<img
						src={Logo}
						className='shrink w-24 h-24 self-center bg-[#011627] rounded-2xl'
						alt='This a logo'
					/>

					<div className='flex flex-col'>
						<label
							className='text-[#011627] uppercase font-semibold text-sm tracking-widest'
							htmlFor='email'>
							email
						</label>
						<input
							type='email'
							value={email} // Set the value to the current state
							onChange={(event) => setEmail(event.target.value)}
							placeholder='Enter email address'
							className='text-[#011627] px-4 py-2 border border-black rounded-md focus:outline-none  focus:border-2'
						/>
					</div>
					<div className='flex flex-col'>
						<label
							className='text-[#011627] uppercase font-semibold text-sm tracking-widest'
							htmlFor='password'>
							password
						</label>
						<input
							type='password'
							value={password} // Set the value to the current state
							onChange={(event) => setPassword(event.target.value)}
							placeholder='Enter password'
							className='text-[#011627] px-4 py-2 border border-black rounded-md focus:outline-none focus:border-2'
						/>
					</div>
					<button
						type='submit'
						className=' text-white bg-[#ff8906] p-2 rounded-xl enabled:hover:bg-orange-500 '
						size='lg'>
						<h1 className='text-lg font-bold uppercase tracking-widest'>
							LOGIN
						</h1>
					</button>
				</form>
			</div>
		</div>
	);
}
