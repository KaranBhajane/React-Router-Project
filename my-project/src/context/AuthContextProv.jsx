import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

function AuthContextFun({ children }) {
    const [user, setUser] = useState([])
    const [log, setLogin] = useState()
    const [logt, setLogout] = useState()
    const [IsAutth, setIsAutth] = useState(false)


    function login(){
        setIsAutth(true)
    }
    function logout ()
    {
        setIsAutth(false)
    }

    


    async function handleAuth() {
        let data = await fetch('http://localhost:3000/User');
        let orgData = await data.json()
        console.log(orgData);
        setUser(orgData)
    }
    


    useEffect(() => {
        handleAuth()

    }, [])

    return <AuthContext.Provider value={{user,login,logout,IsAutth}}>
        {children}
    </AuthContext.Provider>
}
export default AuthContextFun   