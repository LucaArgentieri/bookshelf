import React from 'react'
import { Link } from 'react-router-dom'
import { GiBookshelf } from 'react-icons/gi'
import { IoBook } from 'react-icons/io5'
import './style.css'


export default function mobileNavbar() {
    return (
        <div className="mobileNavbar">
            <Link className="logo" to="/"><GiBookshelf size="60px" /></Link>

            <ul className="list">
                <li><Link to="/random-books">Random Books</Link></li>
                <li>
                    <form onSubmit={(e) => e.preventDefault()} role="search">
                        <input id="search" type="search" placeholder="Harry Potter..." required />
                        <button type="submit"><IoBook size="30px" /></button>
                    </form>
                </li>
            </ul>

        </div>
    )
}
