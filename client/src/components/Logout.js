import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../features/userSlice'


const Logout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)
    console.log(user)
    const handleLogoutSubmit = (e) => {
        e.preventDefault()
        fetch("/logout", {
            method: "DELETE",
            })
            .then(()=>{dispatch( logout() )
                navigate("/")})
            
        } 
        
    
  
    return (
        <>
        <div>Logout</div>
            <p>Thank you for using Cover Letter Buddy™®©!!</p>
            <button onClick={handleLogoutSubmit}>Log me out!</button>
        </>
  )
}

export default Logout