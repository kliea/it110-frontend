import React from 'react';
import Logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
	const navigate = useNavigate();

	return (
		<div className='min-h-screen md:min-h-screen bg-[#011627] flex flex-col items-center justify-center'>
			<img src={Logo} className='h-60 md:h-full md:ml-8' alt='This a logo' />
			<button
				onClick={() => {
					navigate('/login');
				}}
				className=' text-white bg-cyan-700 enabled:hover:bg-emerald-500 p-2 px-10 rounded-xl'>
				<h1 className='text-lg uppercase tracking-widest'>login</h1>
			</button>
		</div>
	);
}
