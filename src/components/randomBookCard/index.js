import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

export default function RandomBookCard({ title, img }) {
    return (
        <Link>
            <div className="randomBookCard">
                <img src={img} alt="" />
                <h3>{title}</h3>
            </div>
        </Link>
    )
}
