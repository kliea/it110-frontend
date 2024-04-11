import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Topbar({ route }) {
	const [routeName, setRouteName] = useState(null);
	const navigate = useNavigate();
	if (route === 'login') {
		route = '';
		setRouteName('login');
	}
	return (
		<div className='flex justify-end mt-3 mx-3'>
			<button
				onClick={() => {
					navigate(`/${route}`);
				}}
				size='lg'>
				<h1 className='text-lg font-bold uppercase tracking-widest'>
					{routeName}
				</h1>
			</button>
		</div>
	);
}
