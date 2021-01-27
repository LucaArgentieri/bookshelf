import React, { useEffect, useState } from 'react'
import './style.css'
import Navbar from '../../components/navbar'
import MobileNavbar from '../../components/mobileNavbar'
import SearchedBookCard from '../../components/searchedBookCard'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'

export default function SearchedBook() {

    //Da fare chiamata api in base alla lettera ricevuta
    // const { characters } = useParams()

    const { characters } = useParams()
    const [bookData, setBookData] = useState()


    useEffect(() => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${characters}&orderBy=relevance&key=${process.env.REACT_APP_BOOKS_TOKEN}`)
            .then((response) => {
                response.data.items ? setBookData(response.data.items) : response.data.items = undefined
            })
            .catch(err => console.error(err))
    }, [characters])

    if (bookData === undefined) {
        return (
            <div className="randomBook">
                <MobileNavbar />
                <Navbar />
                <div className="loading_container">
                    <h2>{characters} doesn't exist, but you could write it yourself!</h2>
                    <p>Search another book or click <Link to={'/random-books'}>here</Link> for get a random one.</p>
                </div>

            </div>
        )
    }


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
