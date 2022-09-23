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
    console.log(user, "I'm the one in AuthRoute!")
    useEffect(() => {
        if (!user) {
            nav('/login')
        } 
        
    })

 
return (
    <>
        {children}
    </>
)}