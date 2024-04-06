import React, { useState } from 'react';
import Topbar from '../components/Topbar';
import Input from '../components/Input';

export default function Login() {
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log(email, password);

		setEmail('');
		setPassword('');
	};
	return (
		<div className='min-h-screen bg-[#011627] flex flex-col'>
			<Topbar route='signup' />
			<div className='flex-1 flex justify-center items-center'>
				<form
					onSubmit={handleSubmit}
					className='bg-[#fffffe] rounded-2xl p-10 flex flex-col gap-2'>
					<div className='flex flex-col'>
						<label
							className='text-[] uppercase font-semibold text-sm tracking-widest'
							htmlFor='email'>
							email
						</label>
						<input
							type='email'
							value={email} // Set the value to the current state
							onChange={(event) => setEmail(event.target.value)}
							placeholder='Enter email address'
							className='px-4 py-2 border border-black rounded-md focus:outline-none focus:border-black focus:border-2'
							required
						/>
					</div>
					<div className='flex flex-col'>
						<label
							className='text-[] uppercase font-semibold text-sm tracking-widest'
							htmlFor='password'>
							password
						</label>
						<input
							type='password'
							value={password} // Set the value to the current state
							onChange={(event) => setPassword(event.target.value)}
							placeholder='Enter password'
							className='px-4 py-2 border border-black rounded-md focus:outline-none focus:border-black focus:border-2'
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
