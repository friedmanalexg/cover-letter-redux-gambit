import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { NavButton } from '../tools/hooks'

function Signup () {
  const [ formData, setFormData] = useState ({})
  const navigate = useNavigate()
  
  const handleSignupSubmit = (e) => {
      e.preventDefault()
      fetch("/signup", {
          method: "POST",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(formData)
          })
          .then(res => navigate("/login"))
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
        <h1>Sign up for Cover Letter Buddy™®©</h1>
        <h3>(Do it while it is free lol)</h3>
        <form onSubmit={handleSignupSubmit}>
            <input type="text" name="username" onChange={handleChange} placeholder="Hey type username here" required></input>
            <input type="password" name="password" onChange={handleChange} placeholder="Hey type pwd here" required></input>
            <input type="password" name="password_confirmation" onChange={handleChange} placeholder="Hey type pwd here again, do it!" required></input>
            {/* above is convention for bcrypt */}
            <input name="submit" type="submit"></input>
        </form>
        <NavButton />
      </>
)}

export default Signup