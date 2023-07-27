import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer, toast } from 'react-toastify';
import App from './App.jsx';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ToastContainer
			limit={2}
			hideProgressBar={true}
			autoClose={500}
			position={toast.POSITION.BOTTOM_RIGHT}
		/>
		<App />
	</React.StrictMode>
);
