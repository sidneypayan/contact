import { Box, Button, FormControl, TextField } from '@mui/material'
import { auth } from '../config/firebase'
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'
import { useState } from 'react'

const Auth = ({ getUser }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	// const handleSubmit = async e => {
	// 	e.preventDefault()
	// 	try {
	// 		await createUserWithEmailAndPassword(auth, email, password)
	// 	} catch (error) {
	// 		console.error(err)
	// 	}
	// }

	const handleSubmit = async e => {
		e.preventDefault()
		try {
			await signInWithEmailAndPassword(auth, email, password)

			getUser(auth?.currentUser)
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<FormControl>
				<TextField
					placeholder='Email...'
					onChange={e => setEmail(e.target.value)}
					type='text'
				/>
				<TextField
					type='password'
					placeholder='Password...'
					onChange={e => setPassword(e.target.value)}
				/>
				<Box>
					<Button type='submit' variant='contained'>
						Se connecter
					</Button>
				</Box>
			</FormControl>
		</form>
	)
}

export default Auth
