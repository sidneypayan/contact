import { TableRow, TableCell, TextField, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { useContactContext } from '../context/contact'

const AddContact = () => {
	const {
		addContact,
		edit,
		updateContact,
		updatedContact,
		contact,
		setContact,
	} = useContactContext()

	useEffect(() => {
		if (edit) setContact(updatedContact)
	}, [])

	console.log(contact)

	const onChange = e => {
		setContact({ ...contact, [e.target.name]: e.target.value })
	}

	return (
		<TableRow>
			<TableCell>
				<TextField
					onChange={onChange}
					value={contact.lastname}
					id='outlined-basic'
					variant='outlined'
					size='small'
					name='lastname'
				/>
			</TableCell>
			<TableCell>
				<TextField
					onChange={onChange}
					value={contact.firstname}
					id='outlined-basic'
					variant='outlined'
					size='small'
					name='firstname'
				/>
			</TableCell>
			<TableCell>
				<TextField
					onChange={onChange}
					value={contact.phone1}
					id='outlined-basic'
					variant='outlined'
					size='small'
					name='phone1'
				/>
			</TableCell>
			<TableCell>
				<TextField
					onChange={onChange}
					value={contact.phone2}
					id='outlined-basic'
					variant='outlined'
					size='small'
					name='phone2'
				/>
			</TableCell>
			<TableCell>
				<TextField
					type='email'
					onChange={onChange}
					value={contact.email}
					id='outlined-basic'
					variant='outlined'
					size='small'
					name='email'
				/>
			</TableCell>
			<TableCell>
				<TextField
					onChange={onChange}
					value={contact.center}
					id='outlined-basic'
					variant='outlined'
					size='small'
					name='center'
				/>
			</TableCell>
			<TableCell>
				<TextField
					onChange={onChange}
					value={contact.role}
					id='outlined-basic'
					variant='outlined'
					size='small'
					name='role'
				/>
			</TableCell>
			<TableCell>
				<Button
					onClick={() => (edit ? updateContact(contact) : addContact(contact))}
					size='small'
					variant='contained'>
					{edit ? 'Edit' : 'Add'}
				</Button>
			</TableCell>
		</TableRow>
	)
}

export default AddContact
