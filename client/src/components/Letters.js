import React, { useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import LetterEditCard from './LetterEditCard';
import { getCurrentUser } from '../features/userSlice';
import { v4 as uuid } from 'uuid';



const Letters = () => {
  //setting up state
  const { user } = useSelector(state => state.user)
 
  const emptyLetter = {
    letter_title: "",
    recipient: "",
    company: "",
    job_title: "",
    variable1: "",
    variable2: "",
    user_id: null}

  const [selectedLetter, setSelectedLetter] = useState(emptyLetter)
  const [myLetters, setMyLetters] = useState([])
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    setMyLetters(user.letters)
    
  }, [ user ])    
  
  

  // handler functions 
  const handleCreateLetter = (e) => {
    let newLetter = {...emptyLetter, letter_title: "My New Letter", user_id: user.id }
    fetch("/letters", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newLetter)
      })
      .then (res => res.json())
      .then ( data => {
        dispatch(getCurrentUser())
        setMyLetters([...myLetters, data])
      })
      
    }
        
  const handleLetterSelect = (e) => {
    if (e.target.value !== "") {
      setSelectedLetter(  
      ...myLetters.filter( letter => letter.letter_title === e.target.value  ))
    } else {
      setMyLetters(user.letters)
      setSelectedLetter(emptyLetter)
    };
  }
  
  const handleLetterDelete = (e) => {
    console.log("You clicked Delete!")
    fetch(`/letters/${selectedLetter.id}`, {
      method: "DELETE"
    })
    .then(() => {dispatch(getCurrentUser())
    setMyLetters(...myLetters.filter( letter => letter.id !== selectedLetter.id ))})
    .then(setSelectedLetter(emptyLetter))
    alert("Letter deleted!")
  }
  
  
  
  

  //setting up map
  
 
  let letters_list = myLetters.map(letter => {
    return(
      <option key={uuid()} value={letter.letter_title}>{letter.letter_title}</option>
  )});
  

  return (
    <>
    <div>Letter</div>
      <button onClick={handleCreateLetter}>Create New Letter</button>
      <h1>Letters</h1>
      <h3>You can create and manage letters. Press the "Save" button to save your letter variables.</h3>
        <select value={selectedLetter.letter_title} onChange={handleLetterSelect}> <option value={""}>Select a Letter</option>, {letters_list} </select>
      <LetterEditCard selectedLetter = {selectedLetter} />
      <button id='delbtn' onClick={handleLetterDelete}>Delete Selected Letter</button>
    </>
  )
}

export default Letters

// I need to define an array that is populated with User.Letters.all.
// I need to render each Letter's "letter_title" in a dropdown.
// When a user selects a Letter, render the LetterEditCard in a div below.




