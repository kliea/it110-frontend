import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
	const navigate = useNavigate();
	return (
		<div className='min-h-screen bg-[#011627] flex flex-col '>
			<div className='my-3 mx-3 text-white'>TOPBAR</div>
			<div className='bg-black flex flex-1 flex-row'>
				<div className='w-1/5 bg-white flex flex-col justify-between py-2'>
					{/* sidebar */}
					<div>hello</div>
					<div className='self-center'>
						<button
							onClick={() => {
								navigate('/');
							}}
							className=' text-white bg-[#f25f4c] p-2 rounded-xl
								enabled:hover:bg-red-500 hover:border-2 hover:border-white '>
							<h1 className='text-lg rounded-full font-bold uppercase tracking-widest'>
								logout
							</h1>
						</button>
					</div>
				</div>
				<div className='w-4/5 flex p-5'>
					<div className='w-full bg-white p-2'>
						{/* content */}
						<h1 className='text-3xl'>This is Dashboard</h1>
					</div>
				</div>
			</div>
		</div>
	);
}
