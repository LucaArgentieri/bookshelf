import React, { useEffect, useState } from 'react'
import './style.css'
import Navbar from '../../components/navbar'
import MobileNavbar from '../../components/mobileNavbar'
import SearchedBookCard from '../../components/searchedBookCard'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function SearchedBook() {

    //Da fare chiamata api in base alla lettera ricevuta
    // const { characters } = useParams()

    const { characters } = useParams()
    const [bookData, setBookData] = useState()

    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${characters}&orderBy=relevance&key=${process.env.REACT_APP_BOOKS_TOKEN}`)
            .then((response) => {
                setBookData(response.data.items)
                console.log(response.data.items)
            })
            .catch(err => console.error(err))
    }, [characters])

    if (!bookData) {
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
                <div className="searchedBookContainer" >
                    <h3>You searched: {characters}</h3>
                </div>
                <div className="searchedBook_list">

                    {
                        bookData.map((book) => {
                            return <SearchedBookCard
                                key={book.id}
                                id={book.id}
                                img={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'Image not aviable'}
                                title={book.volumeInfo.title} />

                        })

                    }
                </div>

            </div >
        )
    }
}
