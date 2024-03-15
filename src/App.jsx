import { useEffect, useState } from 'react'
import './App.css'
import { Button } from '@mui/material'
import DataTable from './components/DataTable'
import Auth from './components/auth'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { signOut } from 'firebase/auth'

function App() {
	const [user, setUser] = useState('')
	const auth = getAuth()

	useEffect(() => {
		onAuthStateChanged(auth, user => {
			if (user) {
				const uid = user.uid

				setUser(uid)
			} else {
				setUser('')
			}
		})
	}, [])

	const getUser = data => {
		setUser(data)
	}

	const logout = async () => {
		try {
			await signOut(auth)
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<>
			{user ? (
				<>
					<Button variant='contained' onClick={logout}>
						Se déconnecter
					</Button>
					<DataTable />
				</>
			) : (
				<Auth getUser={getUser} />
			)}
		</>
	)
}

export default App
