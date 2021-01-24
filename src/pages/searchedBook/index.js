import React from 'react'
import Navbar from '../../components/navbar'
import MobileNavbar from '../../components/mobileNavbar'

export default function SearchedBook() {
    return (

        //Da fare chiamata api in base alla lettera ricevuta
        // const { characters } = useParams()

        <div>
            <MobileNavbar />
            <Navbar />
            <h1>Searched Book</h1>
        </div>
    )
}
