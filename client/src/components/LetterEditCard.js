import React from 'react'

const LetterEditCard = () => {
  return (
    <div>LetterEditCard</div>
  )
}

export default LetterEditCard

//I need to map the letter data to this card and render its associated blocks with a simplified BlockEditCard.
//There should be a field for each variable (recipient, company, job_title, variable1, variable2) that can be updated with user input.
//Each block rendered should also have a dropdown that can change out the block for another and update the letter's blocks.
//A letter will start with three block fields, but a button can add another. There should also be a delete field button.
//There will be a button to compile the letter and display it as formetted text in a div below.