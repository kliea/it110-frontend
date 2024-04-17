import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axios';

export default function Dashboard({ setToken }) {
	const [users, setUsers] = useState(null);
	const navigate = useNavigate();

	const instance = axios.create({
		headers: {
			Authorization: 'Bearer ' + localStorage.getItem('accessToken'),
		},
	});
	const fetchUsers = async () => {
		try {
			const response = await instance.get(`/user`);
			setUsers(response.data);
			console.log(users);
		} catch (error) {
			// console.log(error);
		}
	};

	const logout = async () => {
		try {
			const response = await instance.post(`/logout`);
			console.log(response);
			if (response.status === 200) {
				console.log(response.data);
				localStorage.removeItem('accessToken');
				setToken('');
				navigate('/');
			}
		} catch (error) {
			// console.log(error);
		}
	};
	return (
		<div className='min-h-screen bg-[#011627] flex flex-col '>
			<div className='my-3 mx-3 text-white'>TOPBAR</div>
			<div className='bg-black flex flex-1 flex-row'>
				<div className='w-1/5 bg-white flex flex-col justify-between py-2'>
					{/* sidebar */}
					<div>hello</div>
					<div className='self-center'>
						<button
							onClick={logout}
							className=' text-white bg-[#f25f4c] p-2 rounded-xl
								enabled:hover:bg-red-500 hover:border-2 hover:border-white '>
							<h1 className='text-lg rounded-full font-bold uppercase tracking-widest'>
								logout
							</h1>
						</button>
					</div>
				</div>
				<div className='w-4/5 flex p-5'>
					<div className='w-full bg-white p-2 flex flex-col justify-center items-center gap-10'>
						{/* content */}
						<h1 className='text-3xl'>This is Dashboard</h1>
						<div className='w-full flex justify-center'>
							<button
								onClick={fetchUsers}
								className=' text-white bg-[#f25f4c] p-2 rounded-xl
								enabled:hover:bg-red-500 hover:border-2 hover:border-white '>
								<h1 className='text-lg rounded-full font-bold uppercase tracking-widest'>
									fetch
								</h1>
							</button>
						</div>
						<table className='text-lg rounded-full font-bold uppercase tracking-widest border-2 border-black'>
							<thead>
								<tr className='border-b-2 border-black'>
									<th className='p-2 border-r-2 border-black'>First Name</th>
									<th className='p-2 border-r-2 border-black'>Last Name</th>
									<th className='p-2'>Email</th>
								</tr>
							</thead>
							<tbody>
								{users ? (
									Object.values(users).map((user) => (
										<tr key={user.email} className='border-b-2 border-black'>
											<td className='p-2 border-r-2 border-black'>
												{user.first_name}
											</td>
											<td className='p-2 border-r-2 border-black'>
												{user.last_name}
											</td>
											<td className='p-2'>{user.email}</td>
										</tr>
									))
								) : (
									<tr>
										<td colSpan='3' className='p-2 text-center text-gray-400'>
											Fetch data
										</td>
									</tr>
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
