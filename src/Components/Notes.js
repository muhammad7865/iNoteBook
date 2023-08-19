import React, { useContext } from 'react'
import Notecontext from '../Context/Notecontext'
import NotesItem from './NotesItem'

//This funtion is used to fetch the information of the user and senf the information back to the function that displays the notes for the user
export default function Notes() {
    const context=useContext(Notecontext)
    const{notes,setNotes}=context

  return (
    <div className='row'>
      {notes.map((notes)=>{
    return <NotesItem NotesOfUser={notes}/> ;
})}
    </div>
  )
}
