import {
	Table,
	TableContainer,
	TableHead,
	TableRow,
	TableCell,
	TableBody,
	Paper,
	IconButton,
} from '@mui/material'
import { Add, Delete, Edit } from '@mui/icons-material'
import AddContact from './AddContact'
import { useContactContext } from '../context/contact'

const DataTable = () => {
	const {
		displayAddContact,
		setDisplayAddContact,
		contactList,
		deleteContact,
		editContact,
	} = useContactContext()
	console.log(contactList)
	// const toggleContactForm = () => {
	// 	setDisplayAddContact(true)
	// }

	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell sx={{ fontWeight: 'bold' }}>Nom</TableCell>
						<TableCell sx={{ fontWeight: 'bold' }}>Prénom</TableCell>
						<TableCell sx={{ fontWeight: 'bold' }}>Téléphone fixe</TableCell>
						<TableCell sx={{ fontWeight: 'bold' }}>
							Téléphone portable
						</TableCell>
						<TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
						<TableCell sx={{ fontWeight: 'bold' }}>Centre</TableCell>
						<TableCell sx={{ fontWeight: 'bold' }}>Rôle</TableCell>
						<TableCell>
							<button
								onClick={() => setDisplayAddContact(true)}
								aria-label='add'>
								<Add />
							</button>
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{displayAddContact ? (
						<AddContact />
					) : (
						contactList.map(contact => (
							<TableRow key={contact.id}>
								<TableCell>{contact.lastname}</TableCell>
								<TableCell>{contact.firstname}</TableCell>
								<TableCell>{contact.phone1}</TableCell>
								<TableCell>{contact.phone2}</TableCell>
								<TableCell>{contact.email}</TableCell>
								<TableCell>{contact.center}</TableCell>
								<TableCell>{contact.role}</TableCell>
								<TableCell>
									<IconButton
										onClick={() => deleteContact(contact.id)}
										size='small'
										aria-label='delete'>
										<Delete />
									</IconButton>
									<IconButton
										onClick={() =>
											editContact({
												lastname: contact.lastname,
												firstname: contact.firstname,
												phone1: contact.phone1,
												phone2: contact.phone2,
												email: contact.email,
												center: contact.center,
												role: contact.role,
											})
										}
										size='small'
										aria-label='edit'>
										<Edit />
									</IconButton>
								</TableCell>
							</TableRow>
						))
					)}
				</TableBody>
			</Table>
		</TableContainer>
	)
}

export default DataTable
