import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function navbar() {
    return (
        <div>
            <div className="navbar">
                <Link className="logo" to="/">Home</Link>

                <ul className="list">
                    <li><Link to="/randomBook">Random Book</Link></li>

                    <li>
                        <form onSubmit={(e) => e.preventDefault()} role="search">
                            <label for="search">Search for stuff</label>
                            <input id="search" type="search" placeholder="Search..." autofocus required />
                            <button type="submit">Go</button>
                        </form>
                    </li>
                </ul>
            </div>
        </div>
    )
}
