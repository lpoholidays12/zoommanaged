
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
    // const isLoggedIn = false;
    const { user } = useAuthContext();

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={user ? <Home /> : <Navigate to="/login" />}
                />
                <Route
                    path="/login"
                    element={!user ? <Login /> : <Navigate to='/' />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App