import React from 'react'
import ReactDOM from 'react-dom/client'
import AuthProvider from './features/auth/AuthProvider'
import App from './App'
// import './index.css'
import AppRoutes from './routes/App.routes'
import './main.css'

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<AuthProvider>
    <Provider store={store}>   
        <AppRoutes/>
    </Provider>
</AuthProvider> 
</React.StrictMode>
)
