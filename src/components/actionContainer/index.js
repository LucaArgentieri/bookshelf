import React from 'react'
import Navbar from '../navbar'
import RandomComponent from './randomComponent'
import SearchComponent from './searchComponent'

import './style.css'

export default function actionContainer() {
    return (
        <div className="actionContainer">
            <Navbar />
            <div className="actionContainer_flex">
                <SearchComponent />
                <RandomComponent />
            </div>
        </div>
    )
}
