import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoBook } from 'react-icons/io5'
import { GiBookshelf } from 'react-icons/gi'
import './style.css'

export default function Navbar() {

    const [value, setValue] = useState('')


    return (
        <div>
            <div className="navbar">

                <Link className="logo" to="/"><GiBookshelf size="60px" /></Link>

                <ul className="list">

                    <li><Link to="/random-books">Random Books</Link></li>
                    <li>
                        <form onSubmit={(e) => e.preventDefault()} role="search">
                            <input onChange={e => setValue(e.target.value)} id="search" type="search" placeholder="Harry Potter..." required />
                        </form>
                        <Link className="btn" to={`/searched-book/${value}`}><IoBook size="30px" /></Link>

                    </li>

                </ul>

            </div>
        </div>
    )
}
