import React from 'react';
import Logo from '../assets/logo.png';
import Topbar from '../components/Topbar';

export default function Landing() {
	return (
		<div className='min-h-screen bg-[#011627] flex flex-col'>
			<Topbar route='login' />
			<div className='flex flex-1 mb-3 mx-3 justify-center'>
				<img src={Logo} className='flex-initial' alt='This a logo' />
			</div>
		</div>
	);
}
