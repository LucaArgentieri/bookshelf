import React from 'react'
import './index.css'
import { scroller } from "react-scroll";
import { BsArrowDownShort } from 'react-icons/bs'


export default function hero() {

    const scrollHome = () => {
        scroller.scrollTo('actionContainer', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        })
    }

    return (
        <div className="hero">
            <div className="title_right">
                <h1>Book</h1>
            </div>
            <div className="title_left">
                <h1>Shelf</h1>
            </div>
            <div className="scrollBtn" onClick={() => scrollHome()}>Scroll <BsArrowDownShort size="30px" /></div>
        </div>
    )
}
