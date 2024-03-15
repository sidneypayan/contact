import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyCNI65zXjKTC92WTgWNOSkuoiDQwgA8Cp4',
	authDomain: 'logicannuaire.firebaseapp.com',
	projectId: 'logicannuaire',
	storageBucket: 'logicannuaire.appspot.com',
	messagingSenderId: '876964543363',
	appId: '1:876964543363:web:635c548524010a1b1c54b6',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
