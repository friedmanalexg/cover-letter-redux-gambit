import React from 'react'
import { useSelector } from 'react-redux'
import { NavButton } from '../tools/hooks'

const NavBar = () => {
    const { user } = useSelector(state => state.user)
    console.log(user, "I'm in the NAVBARRRRR")
    if (user){   
      return (
        <>
        <div>NavBar</div>
        <NavButton path="/me" text='Home'/>
        <NavButton path="/letters" text="My Letters" />
        <NavButton path="/blocks" text="My Prose Blocks" />
        <NavButton path="/logout" text="Log Out" />
        </>
      )
      } else {
      return (
        <>
        <NavButton path="/login" text="Log In" />
        </>
      )  
    }
}

export default NavBar