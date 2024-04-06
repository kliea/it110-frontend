import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
	const navigate = useNavigate();

	return (
		<div className='min-h-screen bg-[#011627] flex flex-col'>
			<div className='flex justify-end mt-3 mx-3'>
				<button
					onClick={() => {
						navigate('/');
					}}
					className=' text-white bg-[#ff8906] p-2 rounded-xl enabled:hover:bg-orange-500 '
					size='lg'>
					<h1 className='text-lg font-bold tracking-widest'>LOGIN</h1>
				</button>
			</div>
			<div className='flex flex-1 mb-3 mx-3 justify-center'></div>
		</div>
	);
}
