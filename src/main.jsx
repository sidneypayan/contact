import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContactProvider from './context/contact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ContactProvider>
			<App />
		</ContactProvider>
	</React.StrictMode>
)
