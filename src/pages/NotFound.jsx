import React from 'react';
import { Card, Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

export default function NotFound({ route, name, message }) {
	const navigate = useNavigate();
	return (
		<div className='min-h-screen bg-black flex justify-center items-center'>
			<Card className=' bg-red-500 px-10 py-20 border-4 '>
				<div className='leading-none text-sm flex flex-col gap-5 items-center'>
					<h1 className='text-2xl font-bold italic'>{message}</h1>

					<Button
						size='xs'
						onClick={() => {
							navigate(`${route}`);
						}}
						className='px-4 py-2 bg-white text-[#011936] rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 text-right transition-all duration-[0.6s] ease-[ease] border-[#3654ff] border-[solid] hover:cursor-pointer hover:text-white focus:text-white font-bold'>
						{name}
					</Button>
				</div>
			</Card>
		</div>
	);
}
