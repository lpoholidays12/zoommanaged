import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'; 

function App() {
    const isLoggedIn = false;
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ isLoggedIn ? <Home /> : <Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App