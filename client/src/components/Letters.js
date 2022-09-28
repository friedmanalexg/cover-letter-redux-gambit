import React, { useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import LetterEditCard from './LetterEditCard';
import { getCurrentUser } from '../features/userSlice';

const Letters = () => {
  //setting up state
  const { user } = useSelector(state => state.user)
  // const { letter } = useSelector(state => state.letter )
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
    emptyLetter.user_id = user.id
      
  }, [emptyLetter, user])
  

  // handler functions 
  const handleCreateLetter = (e) => {
    let newLetter = {...emptyLetter, letter_title: "My New Letter" }
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
    setMyLetters(  
      
      ...myLetters.filter( letter => letter.id !== selectedLetter.id  ))})
    .then(setSelectedLetter(emptyLetter))
    alert("Letter deleted!")


  }
  
  
  
  // give inputs name attribute to corresponding keys

  //setting up variables
  
 
  let letters_list = myLetters.map(letter => {
    return(
      
      <option value={letter.letter_title}>{letter.letter_title}</option>
    
  )});
  
  return (
    <>
    <div>Letters</div>
      <button onClick={handleCreateLetter}>Create New Letter</button>
      <h1>You will mess around with your letters and probably get real frustrated here bruh</h1>
        <select onChange={handleLetterSelect}> <option value={""}>Select a Letter</option>, {letters_list} </select>
      <LetterEditCard selectedLetter = {selectedLetter} />
      <button id='delbtn' onClick={handleLetterDelete}>Delete Selected Letter</button>
    </>
  )
}

export default Letters

// I need to define an array that is populated with User.Letters.all.
// I need to render each Letter's "letter_title" in a dropdown.
// When a user selects a Letter, render the LetterEditCard in a div below.

//either make a new letter button or manually add an option to select on line 19ish


