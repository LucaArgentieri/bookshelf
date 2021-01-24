import React from 'react'
import './style.css'

export default function SingleBook({ img, title, subtitle, authors, description, publisher, }) {
    return (
        <div >
            <div className="singleBook_container">
                <div className="singleBook_info">
                    <h2>{title}</h2>
                    <h2>{subtitle}</h2>
                    <h2>{authors}</h2>
                    <p>Description : {description}</p>
                    <h2>{publisher}</h2>
                </div>
                <div>
                    <img src={img} alt={title} />
                </div>
            </div>
        </div>
    )
}
