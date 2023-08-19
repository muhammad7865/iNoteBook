import React from 'react'

//This function is used to preview the notes for the user in the card

function NotesItem(props) {
    const { title, description, tag } = props.NotesOfUser
    return (

        <div className="col-md-3">

            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{description}</p>
                    <a href="/" class="btn btn-primary">{tag}</a>
                </div>
            </div>
        </div>
    )
}

export default NotesItem
