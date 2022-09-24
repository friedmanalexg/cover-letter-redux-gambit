import React, { useState } from 'react';
import {  useSelector } from 'react-redux';

const Letters = () => {
  const [selectedLetter, setSelectedLetter] = useState({})
  const { user } = useSelector(state => state.user)
  // const dispatch = useDispatch();
  let my_letters = user.letters
  let letters_list = my_letters.map(letter => {
    return(
      <option value={letter.letter_title}>{letter.letter_title}</option>
    
  )});
  
  return (
    <>
    <div>Letters</div>
    <h1>You will mess around with your letters and probably get real frustrated here bruh</h1>
    <select> {letters_list} </select>
    </>
  )
}

export default Letters

// I need to define an array that is populated with User.Letters.all.
// I need to render each Letter's "letter_title" in a dropdown.
// When a user selects a Letter, render the LetterEditCard in a div below.

//either make a new letter button or manually add an option to select on line 19ish


