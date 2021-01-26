import React, { useState } from 'react'
import { IoBook } from 'react-icons/io5'
import './style.css'
import { Link } from 'react-router-dom'

export default function SearchComponent() {


    const [value, setValue] = useState()


    return (
        <div className="searchBook_container">
            <h3>Search your book</h3>
            <p>Do you want to know more about a book that interests you? <br /> Use the bar below
</p>
            <form onSubmit={(e) => e.preventDefault()} role="search">
                <input onChange={e => setValue(e.target.value)} id="search" type="search" placeholder="Write here title, genre or author" required />
                <Link className="borderBtn" to={value !== undefined ? `/searched-book/${value}` : window.location}>Search your  <IoBook className="ioBook" size="30px" /></Link>
            </form>
        </div>
    )
}
