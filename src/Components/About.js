import React, { useContext, useEffect } from 'react'
import NoteContext from '../Context/Notecontext'

export default function About() {
  
  return (
   
        <div class="accordion my-5" id="accordionPanelsStayOpenExample" >
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
       About INoteBook
      </button>
      
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">
        <strong>iNoteBook</strong> is the cloud based 
        note book on which you can create your notes and you can also update them and delete them just on a click and you can access your all the notes just by logging in by your
        valid <code> Login & Sign Up</code> ways.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Privacy Policy
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
      <div class="accordion-body">
        <strong>Talking about the security of iNoteBook</strong> Your data is secured in our database system and only you can
        Access you notes by your valid account we provide the facility of secure password and we keep your password hidden
        ,even we can't see it , we use the hashing algorithm to secure the password , we change the password into 
        <code> 10 bit hash code String</code> , by which it is impossible for anyone to compromise your data .
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
       How to Use
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
      <div class="accordion-body">
        <strong>Talking about How to use </strong> It's quite easy to use the system you can simply create your account if you don't 
        have a account and then you can start your work and save any kind of notes here , if you already have an account 
        You can simply log in to your account and then you can access your all notes with ease.
      </div>
    </div>
  </div>
</div>
  
  )
}
