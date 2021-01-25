import React from 'react'
import { Link } from 'react-router-dom'


export default function SearchedBookCard({ id, title, img }) {
    return (
        <Link to={`/books/${id}`}>
            <div className="randomBookCard">
                <img src={img} alt={title} />
                <h3>{title}</h3>
            </div>
        </Link>
    )
}
