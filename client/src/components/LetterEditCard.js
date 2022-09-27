import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const LetterEditCard = ({ selectedLetter }) => {
  const { user } = useSelector(state => state.user)
  
  const [letterForm, setLetterForm] = useState({
    letter_title: "",
    recipient: "",
    company: "",
    job_title: "",
    variable1: "",
    variable2: "",
    user_id: ""
  })

  const [joinArray, setJoinArray] = useState([])


  
  useEffect(() => {
    setLetterForm({...selectedLetter, user_id: user.id})
    setMyProse(user.prose_blocks)
    
  }, [selectedLetter, user])

  const handleFieldChange = (e) => {
    setLetterForm({
      ...letterForm,
      [e.target.name]: e.target.value
    })
  }

  const handleProseSelect = (e) => {
    let newJoinObj = {
      letter_id: selectedLetter.id,
      prose_block_id: parseInt(e.target.value),
      position: parseInt(e.target.name)
    }

    if(!joinArray.some( obj => obj.position === parseInt(e.target.name) ) ){
      console.log('if')
         
      setJoinArray([...joinArray, newJoinObj])
    } else {
      setJoinArray(joinArray.map( obj => {
        if(obj.position === parseInt(e.target.name)){
          return { ...obj, prose_block_id: parseInt(e.target.value)}
        } else {
          return obj;
        }
  }))
      }

    
    
  }
console.log(joinArray)
  const handleLetterSubmit = (e) => {
    e.preventDefault()
    
      fetch('/letters', {
        method: "PATCH",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(letterForm)
      })
      //do your dot thens
      
      // When you create the letter, on the back end create the joins in the letter#create action.
      // Perhaps add "letter_blocks" as a param to the controller so you can send the join info through the body of this fetch.
      

}
const handleLetterDelete = (e) => {
  console.log("hey you still gotta program me!")
}



//prose blocks variables and mapping

const [myProse, setMyProse] = useState([])
let prose_list = myProse.map(pbObj => {
  return (
    <option value={pbObj.id}>{pbObj.block_title}</option>
  )
});


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

      <select id="pbselect1" name='1' onChange={handleProseSelect}>
        <option value={""}>Select a Block</option>
        {prose_list}
      </select>

      <select id="pbselect2" name='2' onChange={handleProseSelect}>
        <option value={""}>Select a Block</option>
        {prose_list}
      </select>

      <select id="pbselect3" name='3' onChange={handleProseSelect}>
        <option value={""}>Select a Block</option>
        {prose_list}
      </select>

      {/* <button id="newbtn">add another prose block</button> */}
      <input type="submit" value="Save and View" />
      <button id='delbtn' onClick={handleLetterDelete}>Delete Selected Letter</button>
      <button id='Fuckin work' onClick={()=>console.log(joinArray)}>Fuckin Work Already</button>
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

