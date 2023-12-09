import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);

        // const response = await fetch('http://localhost:4001/api/user/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ email, password })
        // });

        // const json = await response.json();
        const json = {
            "email": "raybaron7@gmail.com",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDRmODhjNjg5NTkzZTA2Y2Q0YzljNWUiLCJpYXQiOjE3MDIxNDkxMDgsImV4cCI6MTcwMjQwODMwOH0.QfKfO2U4G9lNcKSGVpDGqcX3QKqMh31X45rMcJ5nJU8"
        }

        // if (!response.ok) {
        //     setIsLoading(false);
        //     setError(json.error);
        // }
        // if (response.ok) {
            localStorage.setItem('user', JSON.stringify(json));

            dispatch({ type: 'LOGIN', payload: json });

            setIsLoading(false);
        // }

    }

    return { login, isLoading, error }
}


