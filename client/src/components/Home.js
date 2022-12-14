import React from 'react'
import { useSelector } from 'react-redux'
import '../styles.css'
import { v4 as uuid } from 'uuid';








const Home = () => {
  const { user } = useSelector(state => state.user)  
  console.log(user)

    let my_prose = user.prose_blocks ? user.prose_blocks : [] 
    let prose_list = my_prose.map(pbObj => {
      return(
        <li key={uuid()} >{pbObj.block_title}</li>
    )});

    let my_letters = user.letters ? user.letters : []
    let letter_list = my_letters.map(lObj => {
      return(
        <li key={uuid()} >{lObj.letter_title}</li>
    )});


  
  return (
        <div className='welcome__splash'>
        <h1>`Welcome, {user.username} `</h1>
        <h2>My Prose Blocks:</h2>
          <ul>{prose_list}</ul> 
        <h2>My Letters:</h2>
          <ul>{letter_list}</ul>
        </div>
        
  )
}

export default Home