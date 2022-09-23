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
        <form onSubmit={handleLoginSubmit}>
        <input type="text" name="username" onChange={handleChange} placeholder="Hey type username here"></input>
        <input type="text" name="password" onChange={handleChange} placeholder="Hey type pwd here" ></input>
            <input name="submit" type="submit"></input>
        </form>
        <NavButton />
        </>
)}

// const handleSubmit = (e) => {
//     e.preventDefault();
//     // Convert this to redux when you don't hate it
//     fetch("/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     }).then((res) => {
//       if (res.ok) {
//         res.json().then((user) => {
//           dispatch(setCurrentUser(user));
//           dispatch(setErrors([]));
//           navigate("/home");
//         });
//       } else {
//         res.json().then((data) => {
//           dispatch(setErrors(data.errors));
//         });
//       }
//     });
//   };


export default Login