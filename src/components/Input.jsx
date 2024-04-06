import React from 'react';

export default function Input({ type, name, value, onChange, placeholder }) {
	return (
		<form className='text-start flex flex-col'>
			<label
				className='text-[] uppercase font-semibold text-sm tracking-widest'
				htmlFor={name}>
				{name}
			</label>
			<input
				type={type}
				value={value} // Set the value to the current state
				onChange={onChange}
				placeholder={placeholder}
				className='px-4 py-2 border border-black rounded-md focus:outline-none focus:border-black focus:border-2'
			/>
		</form>
	);
}
