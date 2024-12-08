import { useState } from 'react'
import './Register.css'

export default function Register() {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = ((e) => {
		e.preventDefault()
	})

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder='Name' />
				<input type="email" placeholder='E-mail' />
				<input type="password" placeholder='Password' />
				<input type="password" placeholder='Confirm Password' />
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
}