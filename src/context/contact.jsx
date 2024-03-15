import { createContext, useState, useEffect, useContext } from 'react'
import {
	getDocs,
	collection,
	addDoc,
	deleteDoc,
	doc,
	updateDoc,
} from 'firebase/firestore'
import { db } from '../config/firebase'

const ContactContext = createContext()

const ContactProvider = ({ children }) => {
	const [contact, setContact] = useState({
		lastname: '',
		firstname: '',
		phone1: '',
		phone2: '',
		email: '',
		center: '',
		role: '',
	})
	const [displayAddContact, setDisplayAddContact] = useState(false)
	const [contactList, setContactList] = useState([])
	// const [editContact, setEditContact] = useState({})
	const [updatedContact, setUpdatedContact] = useState({})
	const [edit, setEdit] = useState(false)

	const contactsCollectionRef = collection(db, 'contacts')

	useEffect(() => {
		const getContactList = async () => {
			try {
				const data = await getDocs(contactsCollectionRef)
				const filteredData = data.docs.map(doc => ({
					...doc.data(),
					id: doc.id,
				}))
				setContactList(filteredData)
			} catch (err) {
				console.error(err)
			}
		}

		getContactList()
	}, [])

	const addContact = async contact => {
		try {
			await addDoc(contactsCollectionRef, contact)
			setDisplayAddContact(false)
		} catch (error) {
			console.error(error)
		}
	}

	const deleteContact = async id => {
		const contactDoc = doc(db, 'contacts', id)
		await deleteDoc(contactDoc)
		console.log('delete')
	}

	const editContact = newContact => {
		setDisplayAddContact(true)
		setEdit(true)
		setContact(newContact)
	}

	const updateContact = async () => {
		const contactDoc = doc(db, 'contacts', updateContact.id)
		await updateContact(updatedContact)
	}

	const exposed = {
		displayAddContact,
		setDisplayAddContact,
		contactList,
		addContact,
		deleteContact,
		updateContact,
		edit,
		setEdit,
		editContact,
		contact,
		setContact,
	}

	return (
		<ContactContext.Provider value={exposed}>
			{children}
		</ContactContext.Provider>
	)
}

export const useContactContext = () => useContext(ContactContext)
export default ContactProvider
