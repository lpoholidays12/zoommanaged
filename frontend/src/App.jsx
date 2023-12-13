import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import Packages from './pages/sales/Packages'
import { useAuthContext } from './hooks/useAuthContext';
import { AuthContext } from './context/AuthContext';
import MyBookings from './pages/sales/MyBookings';
import Acknowledgement from './components/Common/Acknowledgement'
import PackageDetails from './pages/sales/PackageDetails';


function App() {
    // const isLoggedIn = false;
    const { user } = useAuthContext()

    return (

        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        user ? <Home /> : <Navigate to="/login" />
                    }
                />
                <Route
                    path="/login"
                    element={!user ? <Login /> : <Navigate to="/" />}
                />
                {/* Sales Start*/}
                <Route path='/packages'
                    element={user ? <Packages /> : <Login />}
                />
                <Route path='/my-bookings'
                    element={user ? <MyBookings /> : <Login />
                    }
                />
                <Route path='/acknowledgement'
                    element={user ? <Acknowledgement /> : <Login />
                    }
                />
                <Route path='/package-details'
                    element={user ? <PackageDetails /> : <Login />
                    }
                />

            </Routes>
        </BrowserRouter>

    );
}

function useAuth() {
    return React.useContext(AuthContext);
}

function RequireAuth({ children }) {
    let auth = useAuth();
    let location = useLocation();

    if (!auth.user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default App