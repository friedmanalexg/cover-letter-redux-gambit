import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { selectUser } from '../features/userSlice'
import { NavButton } from "../tools/hooks"

function Login () {
    const [ formData, setFormData] = useState ({})
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
            })
        .then(res =>{
            res.json()
            .then(data => {dispatch( selectUser(data) )
                navigate("/me")})
            
        }) 
        
        e.target.reset()


    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        
    }
    return(
        <>
        <h1>Welcome back to Cover Letter Buddy™®©!</h1>
        <h3>Please log in with your credentials below.</h3>
        <form onSubmit={handleLoginSubmit}>
        <input type="text" name="username" onChange={handleChange} placeholder="Hey type username here" required></input>
        <input type="password" name="password" onChange={handleChange} placeholder="Hey type pwd here" required></input>
            <input name="submit" type="submit"></input>
        </form>
        <NavButton />
        </>
)}



export default Login