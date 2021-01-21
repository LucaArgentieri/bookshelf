import React from 'react'
import { IoBook } from 'react-icons/io5'


export default function searchComponent() {
    return (
        <div className="randomBook_container">
            <h3>Search your book</h3>
            <p>Do you want to know more about a book that interests you? <br /> Use the bar below
</p>
            <form onSubmit={(e) => e.preventDefault()} role="search">
                <input id="search" type="search" placeholder="Write here..." required />
                <button type="submit"><IoBook size="30px" /></button>
            </form>
        </div>
    )
}
