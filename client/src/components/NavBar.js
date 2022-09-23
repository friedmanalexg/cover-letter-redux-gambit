import React from 'react'
import { useSelector } from 'react-redux'
import { NavButton } from '../tools/hooks'

const NavBar = () => {
    const { user } = useSelector(state => state.user)
    console.log(user)
  return (
    <>
    <div>NavBar</div>
    <NavButton path="/letters" text="My Letters" />
    <NavButton path="/blocks" text="My Prose Blocks" />
    <NavButton path="/logout" text="Log Out" />
    </>
  )
}

export default NavBar