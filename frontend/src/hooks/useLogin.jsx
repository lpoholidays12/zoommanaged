import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { user, login, logout } = useAuthContext();

    const loginUser = async (userid, password) => {
        setIsLoading(true);
        setError(null);

        try { 
            const response = await fetch('http://localhost:5000/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userid, password })
            });

            const json = await response.json();

            if (!response.ok) {
                throw new Error(json.error || 'Login failed');
            } 
            login(json);
            
        } catch (error) {
            setError(error.message || 'An error occurred during login');
        } finally {
            setIsLoading(false);
        }
    };

    return { login:loginUser, isLoading, error };
};
