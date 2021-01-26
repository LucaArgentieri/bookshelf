import React from 'react'
import './style.css'

export default function SingleBook({ img, title, subtitle, authors, description, publisher, price, currency }) {
    return (
        <div >
            <div className="singleBook_container">
                <div className="singleBook_title_mobile">
                    <h2>{title}{subtitle}</h2>
                </div>
                <div className="singleBook_img">
                    <img src={img} alt={title} />
                </div>
                <div className="singleBook_img_mobile">
                    <img src={img} alt={title} />
                </div>
                <div className="singleBook_info">
                    <div className="singleBook_title">
                        <h2>{title}{subtitle}</h2>
                    </div>
                    <div>
                        <h2>Author: </h2><p>{authors}</p>
                    </div>
                    <div>
                        <h2>Description : </h2><p>{description}</p>
                    </div>
                    <div>
                        <h2>Publisher: </h2><p>{publisher}</p>
                    </div>
                    <div>
                        <h2>Price: </h2><p>{price}{currency}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
