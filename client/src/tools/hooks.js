import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const NavButton = ({ path = '/', text = "back" }) => {

    const navigate = useNavigate()

    return (

        <button onClick={() => navigate(path)}> {text} </button>
    )
}

export const AuthRoute = ({ children, user }) => {
    const nav = useNavigate()
    
    useEffect(() => {
        if (!user) {
            nav('/login')
        } 
        
    },[])

if(!user) {
    return<></>
} 
return (
    <>
        {children}
    </>
)}