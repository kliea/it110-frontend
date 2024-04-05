import React from 'react';
import Topbar from '../components/Topbar';

export default function Login() {
	return (
		<div className='min-h-screen bg-[#011627] flex flex-col'>
			<Topbar route='signup' />
			<div className='flex flex-1 mb-3 mx-3 justify-center'></div>
		</div>
	);
}
