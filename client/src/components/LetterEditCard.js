import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { v4 as uuid } from 'uuid';


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
    setLetterForm({ ...selectedLetter, user_id: user.id })
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

    if (!joinArray.some(obj => obj.position === parseInt(e.target.name))) {
      

      setJoinArray([...joinArray, newJoinObj])
    } else {
      setJoinArray(joinArray.map(obj => {
        if (obj.position === parseInt(e.target.name)) {
          return { ...obj, prose_block_id: parseInt(e.target.value) }
        } else {
          return obj;
        }
      }))
    }



  }
  console.log(joinArray)
  const handleLetterSubmit = (e) => {
    e.preventDefault()

    fetch(`/letters/${selectedLetter.id}`, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(letterForm)
    })
      .then(joinArray.forEach(element => {
        fetch('/letter_blocks', {
          method:"POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(element)  
      })
      }));
        }    // When you create the letter, on the back end create the joins in the letter#create action.
    // 


  
  const handlePBSelect1 = (e) =>{
    let pb1 = user.prose_blocks.find(obj => obj.id === parseInt(e.target.value))
    setPbSelect1(pb1.block_title)
    setPbRender1(pb1.prose_content)
  }
  const handlePBSelect2 = (e) =>{
    let pb2 = user.prose_blocks.find(obj => obj.id === parseInt(e.target.value))
    setPbSelect2(pb2.block_title)
    setPbRender2(pb2.prose_content)
  }
  const handlePBSelect3 = (e) =>{
    let pb3 = user.prose_blocks.find(obj => obj.id === parseInt(e.target.value))
    setPbSelect3(pb3.block_title)
    setPbRender3(pb3.prose_content)
  }


  //prose blocks variables and mapping
  const [pbSelect1, setPbSelect1]= useState("")
  const [pbRender1, setPbRender1]= useState("") 
  const [pbSelect2, setPbSelect2]= useState("")
  const [pbRender2, setPbRender2]= useState("")
  const [pbSelect3, setPbSelect3]= useState("")
  const [pbRender3, setPbRender3]= useState("")
  const [myProse, setMyProse] = useState([])
  let prose_list = myProse.map(pbObj => {
    return (
      <option key={uuid()} value={pbObj.id}>{pbObj.block_title}</option>
    )
  });


  return (
    <>
      <div></div>
      <form onSubmit={handleLetterSubmit} >
        <label>
          Letter Title:
          <input type="text" name="letter_title" value={letterForm.letter_title} onChange={handleFieldChange} />
        </label>
        <label>
          Recipient:
          <input type="text" name="recipient" value={letterForm.recipient} onChange={handleFieldChange} />
        </label>
        <div></div>
        <label>
          Company:
          <input type="text" name="company" value={letterForm.company} onChange={handleFieldChange} />
        </label>
        <label>
          Job Title:
          <input type="text" name="job_title" value={letterForm.job_title} onChange={handleFieldChange} />
        </label>
        <div></div>
        <label>
          User Variable 1:
          <input type="text" name="variable1" value={letterForm.variable1} onChange={handleFieldChange} />
        </label>
        <label>
          User Variable 2:
          <input type="text" name="variable2" value={letterForm.variable2} onChange={handleFieldChange} />
        </label>
        <p>Please select prose blocks from your collection to construct your letter.</p>
        <label>{pbSelect1}</label>
        <select value={pbSelect1} id="pbselect1" name='1' onChange={handleProseSelect, handlePBSelect1 }>
          <option value={""}>Select a Block</option>
          {prose_list}
        </select>
        
        <label>{pbSelect2}</label>
        <select value={pbSelect2} id="pbselect2" name='2' onChange={handleProseSelect, handlePBSelect2}>
          <option value={""}>Select a Block</option>
          {prose_list}
        </select>

        <label>{pbSelect3}</label>
        <select value={pbSelect3} id="pbselect3" name='3' onChange={handleProseSelect, handlePBSelect3}>
          <option value={""}>Select a Block</option>
          {prose_list}
        </select>

        {/* <button id="newbtn">add another prose block</button> */}
        <input type="submit" value="Save Letter" />
        
      </form>
      <div className='render__letter'>
        {/* easy frontend render to be replaced by LetterViewer Component */}
        <h3>{selectedLetter.letter_title}</h3>
          <p>{pbRender1}</p>
          <p>{pbRender2}</p>
          <p>{pbRender3}</p>
      </div>



    </>
  )
}

export default LetterEditCard

//I need to map the letter data to this card and render its associated blocks with a simplified BlockEditCard.
//There should be a field for each variable (letter_title, recipient, company, job_title, variable1, variable2) that can be updated with user input.
//Each block rendered should also have a dropdown that can change out the block for another and update the letter's blocks.
//A letter will start with three block fields, but a button can add another. There should also be a delete field button.
//There will be a button to compile the letter and display it as formatted text in a div below.

