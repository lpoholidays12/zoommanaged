import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/style.css';
// import App from './App';
import { AuthContextProvider } from './context/AuthContext.jsx';
import Package from './pages/sales/Package/index.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <Package />
      {/* <App /> */}
    </AuthContextProvider>
  </React.StrictMode>,
)
