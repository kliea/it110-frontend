import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Topbar from '../components/Topbar';
import Logo from '../assets/logo.png';
import axios from '../axios';

export default function Login({ setToken }) {
	const [firstName, setFirstName] = useState(null);
	const [lastName, setLastName] = useState(null);
	const [birthDate, setBirthDate] = useState(null);
	const [gender, setGender] = useState(null);
	const [address, setAddress] = useState(null);
	const [email, setEmail] = useState(null);
	const [password, setPassword] = useState(null);
	const [passwordConfirmation, setPasswordConfirmation] = useState(null);
	const navigate = useNavigate();

	const signup = async (
		email,
		password,
		firstName,
		lastName,
		birthDate,
		gender,
		address
	) => {
		try {
			const res = await axios.post(`/signup`, {
				first_name: firstName,
				last_name: lastName,
				birth_date: birthDate,
				gender: gender,
				address: address,
				email: email,
				password: password,
			});
			console.log(res);
			localStorage.setItem('accessToken', res.data.token);
			setToken(res.data.token);
			return { success: true };
		} catch (err) {
			return { success: false, message: err };
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== passwordConfirmation) {
			console.log('false');
			alert('Password confirmation does not match');
			return;
		}

		try {
			const authStatus = await signup(
				email,
				password,
				firstName,
				lastName,
				birthDate,
				gender,
				address
			);
			console.log(authStatus);
			if (authStatus.success) {
				// Check if authStatus is true before navigating
				navigate('/dashboard');
			} else {
				setEmail('');
				setPassword('');
				console.log(authStatus.message);
			}
		} catch (error) {
			console.error(error); // Handle error
		}

		setFirstName('');
		setLastName('');
		setBirthDate('');
		setGender('');
		setAddress('');
		setEmail('');
		setPassword('');
		setPasswordConfirmation('');
	};
	return (
		<div className='min-h-screen bg-[#011627]  flex flex-col'>
			<div className='flex justify-end mt-3 mx-3'>
				<button
					onClick={() => {
						navigate('/');
					}}
					className=' text-white bg-[#f25f4c] p-2 rounded-xl enabled:hover:bg-red-500 hover:border-2 hover:border-white '>
					<h1 className='text-lg font-bold tracking-widest'>LOGIN</h1>
				</button>
			</div>
			<div className='flex-1 flex justify-center items-center'>
				<form
					onSubmit={handleSubmit}
					className='bg-[#fffffe] rounded-2xl p-10 flex flex-col gap-2 shadow-lg shadow-black/90'>
					<img
						src={Logo}
						className='shrink w-0 h-0 md:w-24 md:h-24 self-center  bg-[#011627] rounded-2xl'
						alt='This a logo'
					/>

					<div className='flex flex-col md:flex-row gap-2'>
						<div className='flex-1 flex flex-col'>
							<label
								className='text-[#011627] uppercase font-semibold text-sm tracking-widest'
								htmlFor='firstName'>
								first name
							</label>
							<input
								type='text'
								value={firstName} // Set the value to the current state
								onChange={(event) => setFirstName(event.target.value)}
								placeholder='Enter first name'
								className='input'
							/>
						</div>
						<div className='flex-1 flex flex-col'>
							<label
								className='text-[#011627] uppercase font-semibold text-sm tracking-widest'
								htmlFor='lastName'>
								last name
							</label>
							<input
								type='text'
								value={lastName} // Set the value to the current state
								onChange={(event) => setLastName(event.target.value)}
								placeholder='Enter last name'
								className='input'
							/>
						</div>
					</div>
					<div className='flex flex-col md:flex-row gap-1'>
						<div className='flex-1 flex flex-col'>
							<label
								className='text-[#011627] uppercase font-semibold text-sm tracking-widest'
								htmlFor='birthDate'>
								Birthdate
							</label>
							<input
								type='date'
								value={birthDate} // Set the value to the current state
								onChange={(event) => setBirthDate(event.target.value)}
								placeholder='Enter date of birth'
								className='input h-full text-xs'
							/>
						</div>
						<div className='flex-1 flex flex-col'>
							<label
								className='text-[#011627] uppercase font-semibold text-sm tracking-widest'
								htmlFor='gender'>
								gender
							</label>
							<select
								value={gender}
								onChange={(event) => setGender(event.target.value)}
								className='input h-full'>
								<option value=''>Select Gender</option>
								<option value='male'>Male</option>
								<option value='female'>Female</option>
								<option value='other'>Other</option>
							</select>
						</div>
						<div className='flex flex-col '>
							<label
								className='text-[#011627] uppercase font-semibold text-sm tracking-widest'
								htmlFor='address'>
								address
							</label>
							<textarea
								value={address}
								onChange={(event) => setAddress(event.target.value)}
								rows='5'
								className='input h-12'
							/>
						</div>
					</div>
					<div className='flex flex-col'>
						<label
							className='text-[#011627] uppercase font-semibold text-sm tracking-widest'
							htmlFor='email'>
							email
						</label>
						<input
							type='email'
							value={email} // Set the value to the current state
							onChange={(event) => setEmail(event.target.value)}
							placeholder='Enter email address'
							className='input'
						/>
					</div>
					<div className='flex flex-col'>
						<label
							className='text-[#011627] uppercase font-semibold text-sm tracking-widest'
							htmlFor='password'>
							password
						</label>
						<input
							type='password'
							value={password} // Set the value to the current state
							onChange={(event) => setPassword(event.target.value)}
							placeholder='Enter password'
							className='input'
						/>
					</div>
					<div className='flex flex-col'>
						<label
							className='text-[#011627] uppercase font-semibold text-sm tracking-widest'
							htmlFor='passwordConfirmation'>
							confirm password
						</label>
						<input
							type='password'
							value={passwordConfirmation} // Set the value to the current state
							onChange={(event) => setPasswordConfirmation(event.target.value)}
							placeholder='Enter password confirmation'
							className='input'
						/>
					</div>
					<button
						type='submit'
						className=' text-white bg-[#ff8906] p-2 rounded-full enabled:hover:bg-orange-500 '
						size='lg'>
						<h1 className='text-lg font-bold uppercase tracking-widest'>
							SIGN UP
						</h1>
					</button>
				</form>
			</div>
		</div>
	);
}
