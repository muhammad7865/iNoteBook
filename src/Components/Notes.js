import React, { useContext } from 'react'
import Notecontext from '../Context/Notecontext'
import NotesItem from './NotesItem'


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
