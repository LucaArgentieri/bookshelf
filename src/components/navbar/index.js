import React from 'react'
import { Link } from 'react-router-dom'
import { IoBook } from 'react-icons/io5'
import { GiBookshelf } from 'react-icons/gi'
import './style.css'

export default function navbar() {
    return (
        <div>
            <div className="navbar">

                <Link className="logo" to="/"><GiBookshelf size="60px" /></Link>

                <ul className="list">

                    <li><Link to="/randomBook">Random Book</Link></li>
                    <li>
                        <form onSubmit={(e) => e.preventDefault()} role="search">
                            <input id="search" type="search" placeholder="Harry Potter..." required />
                            <button type="submit"><IoBook size="30px" /></button>
                        </form>
                    </li>

                </ul>

            </div>
        </div>
    )
}
