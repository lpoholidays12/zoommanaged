import { useAuthContext } from "./useAuthContext"; 

export const useLogout = () => {
    const { logout: authLogout } = useAuthContext(); 

    const logout = () => { 
        authLogout(); 
    };

    return { logout };
};
