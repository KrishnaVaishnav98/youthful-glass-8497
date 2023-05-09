import { children, createContext } from "react";
import { useState } from "react";

const obj = {
    isAuth: false,
    token: null
}

export const AuthContext = createContext(obj)

function AuthContextProvider({ children }) {


    const [isAuth, setAuth] = useState(false)



    const loginUser = () => {
        setAuth(true)
    }
    const logoutUser = () => {
        setAuth(false)
    }

    return (
        <AuthContext.Provider value={{ loginUser, logoutUser, isAuth }} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
