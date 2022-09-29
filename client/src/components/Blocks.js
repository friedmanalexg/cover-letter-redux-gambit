import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BlockEditCard from './BlockEditCard'
import { getCurrentUser } from '../features/userSlice'
import { v4 as uuid } from 'uuid';

const Blocks = () => {

  const { user } = useSelector(state => state.user)
  const [selectedBlock, setSelectedBlock] = useState({})
  const [myProseList, setMyProseList] = useState([])
  const emptyBlock = {
    block_title: "",
    block_type: "",
    prose_content: "",
    user_id: ""
  }

  useEffect(() => {
    setMyProseList(user.prose_blocks)
    emptyBlock.user_id = user.id

  }, [user, emptyBlock])

  const dispatch = useDispatch();

  
  let prose_list = myProseList.map(pbObj => {
    return(
      <option key={uuid()} value={pbObj.block_title}>{pbObj.block_title}</option>
  )});

  const handleBlockSelect = (e) => {
    if (e.target.value !== "") {
      setSelectedBlock(  
      
        ...user.prose_blocks.filter( pbObj => pbObj.block_title == e.target.value  ))
    } else {
      setSelectedBlock(emptyBlock)
    };
  } 

  const handleCreateProseBlock = (e) => {
    let newPB = {...emptyBlock, block_title: "My New Prose Block", user_id: user.id }
    fetch("/prose_blocks", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newPB)
    })
    .then (res => res.json())
    .then (data => {
      dispatch(getCurrentUser())
      
    })
  }

  
  return (
    <>
    <div>Blocks</div>
    <h1>Prose Blocks</h1>
    <h3>You can use this form to create and manage your prose blocks.</h3>
    <select onChange={handleBlockSelect}> <option value={""}>Select a prose block...</option>, {prose_list} </select>
    <button id="newbtn" onClick={handleCreateProseBlock}>create another prose block</button>
    <BlockEditCard selectedBlock = {selectedBlock} />
    </>
  )
}

export default Blocks

// I need to define an array that is populated with User.Blocks.all. I made need to add a user field to blocks, or find a way to render the blocks from User.Letters.all.
// I need to render each Block's "block_name" in a dropdown.
// When a user selects a block, render the BlockEditCard in a div below.

//Fetch notes... fetch the data for blocks and letters and feed them to the state store. Then use that copy instead of fetching. Send data back but copy it to state at the same time instead of doing more GET fetches.
// Fetch => Store => Map => Render => Modify => Store & Fetch:PATCH

//BEWARE... DELETE in Redux can be complex https://youtu.be/bml92jhF4t8?t=2098


//i need to use "select" instead of input for dropdown form data