import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const LetterEditCard = ({ selectedLetter }) => {
  const { user } = useSelector(state => state.user)
  //prose blocks variables and mapping
  const [letterForm, setLetterForm] = useState({
    letter_title: "",
    recipient: "",
    company: "",
    job_title: "",
    variable1: "",
    variable2: "",
    user_id: user.id
  })
  useEffect(() => {
    setLetterForm(selectedLetter)
  }, [selectedLetter])

  const handleFieldChange = (e) => {
    setLetterForm({
      ...letterForm,
      [e.target.name]: e.target.value
    })
  }

  const handleLetterSubmit = (e) => {
    e.preventDefault()
    console.log("He was right")
  }

  let my_prose = user.prose_blocks
  let prose_list = my_prose.map(pbObj => {
    return (
      <option value={pbObj.block_title}>{pbObj.block_title}</option>
    )
  });

  console.log(letterForm)
  return (
    <>
      <div>LetterEditCard</div>
      <form onSubmit={handleLetterSubmit} >
        <label>
          Letter Title:
          <input type="text" name="letter_title" value={letterForm.letter_title} onChange={handleFieldChange} />
        </label>
        <label>
          Recipient:
          <input type="text" name="recipient" value={letterForm.recipient} onChange={handleFieldChange} />
        </label>
        <label>
          Company:
          <input type="text" name="company" value={letterForm.company} onChange={handleFieldChange} />
        </label>
        <label>
          Job Title:
          <input type="text" name="job_title" value={letterForm.job_title} onChange={handleFieldChange} />
        </label>
        <label>
          User Variable 1:
          <input type="text" name="variable1" value={letterForm.variable1} onChange={handleFieldChange} />
        </label>
        <label>
          User Variable 2:
          <input type="text" name="variable2" value={letterForm.variable2} onChange={handleFieldChange} />
        </label>
        <p>Please select prose blocks from your collection to construct your letter.</p>

        <select id="pbselect1" name='1'>
          {prose_list}
        </select>

        <select id="pbselect2" name='2'>
          {prose_list}
        </select>

        <select id="pbselect3" name='3'>
          {prose_list}
        </select>

        <button id="btn">add another prose block</button>
        <input type="submit" value="Save and View" />
      </form>



    </>
  )
}

export default LetterEditCard

//I need to map the letter data to this card and render its associated blocks with a simplified BlockEditCard.
//There should be a field for each variable (letter_title, recipient, company, job_title, variable1, variable2) that can be updated with user input.
//Each block rendered should also have a dropdown that can change out the block for another and update the letter's blocks.
//A letter will start with three block fields, but a button can add another. There should also be a delete field button.
//There will be a button to compile the letter and display it as formetted text in a div below.

// { letter_title: selectedLetter.letter_title,
//   recipient: selectedLetter.recipient,
//   company: selectedLetter.company,
//   job_title: selectedLetter.job_title,
//   variable1: selectedLetter.variable1,
//   variable2: selectedLetter.variable2,
//   user_id: user.id
// }