import { createContext, useState } from "react";

export const AuthContext = createContext({
    isAuth: false,
    handleAuth:()=>{}
})

export const AuthContextProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false)
    const handleAuth = () => {
        setIsAuth(true)
    }
    return <AuthContext.Provider value={{isAuth,handleAuth}}>
        {children}
    </AuthContext.Provider>
}
