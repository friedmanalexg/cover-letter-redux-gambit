import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import '../styles.css'




const BlockEditCard = ({selectedBlock}) => {
  const { user } = useSelector(state => state.user)
   
  const [proseForm, setProseForm] = useState({
    block_title: "",
    block_type: "",
    prose_content: "none yet",
    user_id: ""
  })

  useEffect(() => {
    
    setProseForm({...selectedBlock, user_id: user.id})
    }, [selectedBlock, user])

  const handleFieldChange = (e) => {
    setProseForm({
      ...proseForm,
      [e.target.name]: e.target.value
    })
  }

  
  //this fetch should save the edited block
  const handleBlockSubmit = (e) => {
    e.preventDefault()
    fetch(`/prose_blocks/${selectedBlock.id}`, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(proseForm)
  })

    
  }


  return (
      <>
    <div>BlockEditCard</div>
    <form onSubmit={handleBlockSubmit} className="block__edit__form">
      <label htmlFor='block_title'>Block Title:</label>
        <input type="text" name="block_title" value={proseForm.block_title} onChange={handleFieldChange} />
      
      <label htmlFor='block_type'>Block Type:</label>
        <input type="text" name="block_type" value={proseForm.block_type} onChange={handleFieldChange} />
      
      <label htmlFor='prose_content'>Prose Content:</label>
        <textarea type="text" name="prose_content" value={proseForm.prose_content} onChange={handleFieldChange} />
      
      

      <input type="submit" value="Save Block" />
    </form>



  </>
  )
}

export default BlockEditCard

//I need to map the block data to this card and render it.
//There should be a field for each variable (block_name, block_type, prose_content) that can be updated with user input.
//Provide user instructions for inserting letter variable fields into the block so that the letter can interpolate the correct content into them later.
