import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Logo from '../assets/logo.png';

export default function Login() {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(email, password);

		setEmail('');
		setPassword('');
	};
	return (
		<div className='min-h-screen bg-gradient-to-b from-blue-950 from-10%  via-blue-700 to-cyan-400 to-100%  flex flex-col'>
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
							required
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
							required
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
