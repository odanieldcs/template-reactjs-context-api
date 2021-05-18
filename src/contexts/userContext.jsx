import { createContext, useContext, useState, useEffect } from 'react';
import * as auth from '../domain/authentication';

// export const TOKEN_KEY = 'dashsample-token';
export const TOKEN_KEY_USER = `dashsample-user`;

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null);

    useEffect(() => {
        async function getData() {
            console.log(TOKEN_KEY_USER)
            const userData = JSON.parse(localStorage.getItem(TOKEN_KEY_USER))
            console.log(userData)

            await setUser(userData)
        }

        getData();
    }, [])

    async function login(username, password) {
        const response = auth.login(username, password);

        if (response.authenticated) {
            // localStorage.setItem(TOKEN_KEY, response.token);
            setUser(response.userData);
            localStorage.setItem(TOKEN_KEY_USER, JSON.stringify(response.userData))
        }

        return response;
    }

    async function logout() {
        // localStorage.removeItem(TOKEN_KEY);
        localStorage.removeItem(TOKEN_KEY_USER);
        setUser(null);
    }

    function isAuthenticated() {
        return (localStorage.getItem(TOKEN_KEY_USER) !== null);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

// custom hook
export const useAuth = () => useContext(AuthContext);
