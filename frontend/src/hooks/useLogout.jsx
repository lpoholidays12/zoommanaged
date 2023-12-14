import { useAuthContext } from "./useAuthContext"; 

export const useLogout = () => {
    const { logout: authLogout } = useAuthContext(); 

    const logout = () => {
        localStorage.removeItem("user");
        authLogout(); 
    };

    return { logout };
};
