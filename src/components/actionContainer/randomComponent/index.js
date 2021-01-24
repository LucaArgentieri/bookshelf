import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function randomComponent() {
    return (
        <div className="randomBook_container">
            <h3>Random books</h3>
            <p>Not sure which book to choose?
            <br />
            No problem.
            <br /> We'll take care of it, just click the button.
            </p>
            <Link to="random-books">Click</Link>
        </div>
    )
}
