import React from 'react'
import { NavButton } from "../tools/hooks"

export function Root () {

    return(
    <>
        <div className='welcome__splash'>
        <h1>Welcome to Cover Letter Buddy!📝</h1>
        <img className='landing__img' src='https://images.pexels.com/photos/4968667/pexels-photo-4968667.jpeg'/>
        <h3>Please log in or sign up below!👇</h3>
        </div>
        <div>
            <NavButton path="/signup" text="signup" />
            <span>🤷‍♂️</span>
            <NavButton path="/login" text="login" />
        </div>
    </>
)}

export const NotFound = () => {
    return (
        <>
            <h1>404 not found</h1>
            <NavButton />
        </>
    )
}