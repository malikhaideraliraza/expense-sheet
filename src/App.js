import React from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';

//Renderer
import LayoutRenderer from './LayoutRenderer';

//Store
import store from './store';

//css
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

	axios.interceptors.request.use(request => {
        // add auth header with jwt if account is logged in and request is to the api url
        const userToken = localStorage.getItem('user-token');
        const isApiUrl = request.url.startsWith(process.env.REACT_APP_API_URL);

        if (userToken && isApiUrl) {
            request.headers.common.Authorization = `Bearer ${userToken}`;
        }

        return request;
    });

	return (
		<Provider store={store}>
			<LayoutRenderer />
			<ToastContainer />
		</Provider>
	);
};

export default App;
