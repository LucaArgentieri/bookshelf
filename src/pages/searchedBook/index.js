import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar'
import MobileNavbar from '../../components/mobileNavbar'
import SearchedBookCard from '../../components/searchedBookCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function SearchedBook() {

    //Da fare chiamata api in base alla lettera ricevuta
    // const { characters } = useParams()

    const { characters } = useParams()
    const [name, setName] = useState('')
    const [bookData, setBookData] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${name}&orderBy=relevance&key=${process.env.REACT_APP_BOOKS_TOKEN}`)
            .then((response) => {
                setBookData(response.data.items)
                console.log(response.data.items)
                // setIsLoading(false)
            })
            .catch(err => console.error(err))
    }, [])

    if (isLoading) {
        return (
            <div className="randomBook">
                <MobileNavbar />
                <Navbar />
                <div className="loading_container">
                    <h3>Loading...</h3>
                </div>
            </div>
        )
    } else {
        return (
            < div >
                <MobileNavbar />
                <Navbar />
                <h1>Searched Book</h1>
                <SearchedBookCard />
            </div >
        )
    }
}
