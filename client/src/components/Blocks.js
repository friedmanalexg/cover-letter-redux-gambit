import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import BlockEditCard from './BlockEditCard'

const Blocks = () => {
  const { user } = useSelector(state => state.user)
  const [selectedBlock, setSelectedBlock] = useState({})
  const emptyBlock = {
    block_title: "",
    block_type: "",
    prose_content: "",
    user_id: ""
  }

  useEffect(() => {
    emptyBlock.user_id = user.id

  }, [user])

  //const dispatch = useDispatch();
  let my_prose = user.prose_blocks
  let prose_list = my_prose.map(pbObj => {
    return(
      <option value={pbObj.block_title}>{pbObj.block_title}</option>
  )});

  const handleBlockSelect = (e) => {
    if (e.target.value !== "") {
      setSelectedBlock(  
      
        ...user.prose_blocks.filter( pbObj => pbObj.block_title == e.target.value  ))
    } else {
      setSelectedBlock(emptyBlock)
    };
  }    
  
  return (
    <>
    <div>Blocks</div>
    <h1>You will mess around with your prose blocks up in here bruh</h1>
    <select onChange={handleBlockSelect}> <option value={""}>Create New Prose Block</option>, {prose_list} </select>
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

//BEWARE... DELETE in Redux is extremely asanine https://youtu.be/bml92jhF4t8?t=2098
//how is it that obnoxious 🤣

//i can use "select" instead of input for form data