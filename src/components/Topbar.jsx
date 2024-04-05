import React from 'react';
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

export default function Topbar({ route }) {
	const navigate = useNavigate();

	return (
		<div className='flex justify-end mt-3 mx-3'>
			<Button
				isProcessing
				// type='submit'
				onClick={() => {
					navigate(`/${route}`);
				}}
				className=' text-white bg-cyan-700 enabled:hover:bg-emerald-500 p-2 rounded-xl'
				size='lg'>
				<h1 className='text-lg uppercase tracking-widest'>{route}</h1>
			</Button>
		</div>
	);
}
