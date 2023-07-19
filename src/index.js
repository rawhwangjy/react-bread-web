import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'assets/scss/global/global.scss';
import store from 'store/index';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencil, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

library.add(faPencil, faTrash, faCheck);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
