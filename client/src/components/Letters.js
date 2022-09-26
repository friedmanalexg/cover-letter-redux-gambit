import React, { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import LetterEditCard from './LetterEditCard';

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
    user_id: user.id}

  const [selectedLetter, setSelectedLetter] = useState(emptyLetter)
  
  
  // const dispatch = useDispatch();
  
  //handler functions 
  // const handleCreateLetter = (e) => {
  //   newLetter = {...letterForm, [e.target.name]: e.target.value }
  //   fetch("/letters", {
  //       method: "POST",
  //       headers: {'Content-Type': 'application/json'},
  //       body: JSON.stringify(newLetter)
  //     })}
        
  const handleLetterSelect = (e) => {
    if (e.target.value !== "") {
      setSelectedLetter(  
      
        ...user.letters.filter( letter => letter.letter_title == e.target.value  ))
    } else {
      setSelectedLetter(emptyLetter)
    };
  }    
  
  console.log(selectedLetter)
  
  // give inputs name attribute to corresponding keys

  //setting up variables
  
  let my_letters = user.letters
  let letters_list = my_letters.map(letter => {
    return(
      
      <option value={letter.letter_title}>{letter.letter_title}</option>
    
  )});
  
  return (
    <>
    <div>Letters</div>
    <h1>You will mess around with your letters and probably get real frustrated here bruh</h1>
    <select onChange={handleLetterSelect}> <option value={""}>Create New Letter</option>, {letters_list} </select>
    <LetterEditCard selectedLetter = {selectedLetter} />
    </>
  )
}

export default Letters

// I need to define an array that is populated with User.Letters.all.
// I need to render each Letter's "letter_title" in a dropdown.
// When a user selects a Letter, render the LetterEditCard in a div below.

//either make a new letter button or manually add an option to select on line 19ish


