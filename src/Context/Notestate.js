import React, { useState } from "react";
import NoteContext from "./Notecontext";

const NoteState = (props) => {
    const intitalNotes=[
        {
          "_id": "64de1b6ed736d362ae78bf7f",
          "user": "64de1af8d736d362ae78bf7a",
          "description": "go to the bazar and have some shopping",
          "title": "Scedhule of the day2",
          "tag": "Personal",
          "date": "2023-08-17T13:06:54.009Z",
          "__v": 0
        },
        {
          "_id": "64de1bb9d736d362ae78bf87",
          "user": "64de1af8d736d362ae78bf7a",
          "description": "Follow the practice of coding",
          "title": "My first title",
          "tag": "Proffesional",
          "date": "2023-08-17T13:08:09.195Z",
          "__v": 0
        }
      ]
      const [notes,setNotes]=useState(intitalNotes)
 
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;